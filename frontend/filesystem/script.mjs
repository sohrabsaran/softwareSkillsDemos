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

import {
  fileOpen,
  directoryOpen,
  fileSave,
  imageToBlob,
} from 'https://unpkg.com/browser-nativefs'

let fileStructure

(async () => {
  const openButton = document.querySelector('#open');
  const openMultipleButton = document.querySelector('#open-multiple');
  const openDirectoryButton = document.querySelector('#open-directory');
  const saveButton = document.querySelector('#save');
  const pre = document.querySelector('pre');

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

  //added this function
  Array.prototype.asyncForEach = async function (fn) {
    for (let i = 0; i < this.length; i++) {
      await fn(this[i], i);
    }
  };
  
  async function onBlobRead(blob) {
      // The Native File System API currently reports the `webkitRelativePath`
      // as empty string `''`.
      fileStructure += `/* Content of File ${blob.webkitRelativePath}${
                      blob.webkitRelativePath.endsWith(blob.name) ? '' :
                      ('(error/limitation?: blob.webkitRelativePath(\''+blob.webkitRelativePath+
                        '\') does not end with blob.name(\''+blob.name+'\'))')
          } */
${//in below LOC, print out file content
      await blob.text()}
`
  }

  openDirectoryButton.addEventListener('click', async () => {
    try {
      //using {recursive: true}
      const blobs = await directoryOpen({ recursive: true });
      //const blobs = await directoryOpen();

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
      setElVal('ta',fileStructure)
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
