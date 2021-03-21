//original url: https://browser-nativefs.glitch.me/script.mjs retrieved 30Jun20
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 Copyright 2020-21 Sohrab Saran, MIT License
*/

import {
    fileOpen,
    directoryOpen,
    fileSave
} from 'https://unpkg.com/browser-nativefs'

let fileStructure

(async () => {

    const openButton = document.querySelector('#open');
    const openMultipleButton = document.querySelector('#open-multiple');
    const openDirectoryButton = document.querySelector('#open-directory');
    const saveButton = document.querySelector('#save');
    const extnsOfFilesToIncludeTbx = document.querySelector("#extnsOfFilesToIncludeTbx");
    const filePathsToExcludeTbx = document.querySelector('#filePathsToExclude') 
    const pre = document.querySelector('pre');
 
   let filePathsToExclude//datatype: array of strings

    const appendImage = (blob) => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(blob);
        document.body.append(img);
        setTimeout(() => URL.revokeObjectURL(img.src), 1000);
    };

    openButton.addEventListener('click', async () => {
        try {
            const blob = await fileOpen({
                mimeTypes: ['image/*'],
                extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
            });
            appendImage(blob);
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error(err);
            }
        }
    });

    function extnsOfFilesToInclude() {
        return extnsOfFilesToIncludeTbx.value.split(' ').map(extn => rightOf(extn.trim(), '*.'))
    }

    openMultipleButton.addEventListener('click', async () => {
        try {
            const blobs = await fileOpen({
                mimeTypes: ['image/*'],
                extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
                multiple: true,
            });
            for (const blob of blobs) {
                appendImage(blob);
            }
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error(err);
            }
        }
    });

    let blobCtr, numOfBlobs, blobOpts, filteredBlobCtr
    
    async function onBlobRead(blob) {
        blobCtr++
        console.log('filteredBlobCtr = ' + filteredBlobCtr + ', blobCtr = ' + blobCtr + ', numbOfBlobs = ' + numOfBlobs)
        
        //alert('blob.name='+blob.name)
        //alert('blob.webkitRelativePath='+blob.webkitRelativePath)
        if(filePathsToExclude.some(pathPart=>blob.webkitRelativePath.includes(pathPart))) {
           return
        }
     
        if(blobOpts.extensions != null) {
          if(!blob.name.includes('.')) {return}
          const extn = rightOf(blob.name,'.')
          if(!blobOpts.extensions.includes(extn)){return}
        }
        console.log('blob.webkitRelativePath='+blob.webkitRelativePath)
        filteredBlobCtr++
        // The Native File System API currently reports the `webkitRelativePath`
        // as empty string `''`.
        
        const s = `/* Content of File ${blob.webkitRelativePath}${blob.webkitRelativePath.endsWith(blob.name) ? '' :
            ('(error/limitation?: blob.webkitRelativePath(\'' + blob.webkitRelativePath +
                '\') does not end with blob.name(\'' + blob.name + '\'))')
            } */
${//in below LOC, print out file content
            await blob.text()}
`
        //console.log(s)
        fileStructure += s
    }

    //EVENT HANDLER FOR 'ON DIRECTORY SELECTED' EVENT 
    openDirectoryButton.addEventListener('click', async () => {
        try {
            console.log('Clicked open directory button')
            filePathsToExclude = filePathsToExcludeTbx.value.split(' ')
            alert('filePathsToExclude = '+str(filePathsToExclude))
            blobCtr = filteredBlobCtr = 0
            let opts = { recursive: true }
            blobOpts = opts
            if (!['', '*.*'].includes(extnsOfFilesToIncludeTbx.value.trim())) {
                opts.extensions = extnsOfFilesToInclude()
            }
            //alert('>>>opts.extensions = '+ str(opts.extensions))
            const blobs = await directoryOpen(opts);
            numOfBlobs = blobs.length

            fileStructure = ''

            //added 'await' to the below LOC:
            await blobs.sort((a, b) => {
                a = a.webkitRelativePath + a.name;
                b = b.webkitRelativePath + b.name;
                if (a < b) {
                    return -1;
                } else if (a > b) {
                    return 1;
                }
                return 0;

                //in below LOC, changed forEach to asyncForEach
            }).asyncForEach(onBlobRead);
            //pre.textContent = fileStructure;
            console.log('fileStructure.length=' + fileStructure.length)
            setElVal('ta', fileStructure)
            el('ta').dispatchEvent(new Event('input'))

            blobs.filter((blob) => {
                return blob.type.startsWith('image/');
            }).forEach((blob) => {
                appendImage(blob);
            });
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error(err);
            }
        }
    });

    saveButton.addEventListener('click', async () => {
        const blob = await imageToBlob(document.querySelector('img'));
        try {
            await fileSave(blob, { fileName: 'Untitled.png' });
        } catch (err) {
            if (err.name !== 'AbortError') {
                console.error(err);
            }
        }
    });

    openButton.disabled = false;
    openMultipleButton.disabled = false;
    openDirectoryButton.disabled = false;
    saveButton.disabled = false;
})();

/**
 * Converts an image to a Blob.
 * @param {HTMLImageElement} img - Image element.
 * @return {Blob} Resulting Blob.
 from: https://github.com/GoogleChromeLabs/browser-fs-access/blob/main/demo/image-to-blob.mjs
 */
const imageToBlob = async (img) => {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        canvas.toBlob((blob) => {
            resolve(blob);
        });
    });
};
