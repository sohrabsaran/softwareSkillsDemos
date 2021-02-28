//won't work because its '..' (outside the allowed folder of access)???
//import "../common.js"
 
import 'https://sohrabsaran.github.io/softwareSkillsDemos/frontend/common.js'

function changeDom(changeCode, afterChangingDom) {
	function afterGettingContent(contentDocHtml) {
		console.log('contentDocHtml', contentDocHtml)
		//parse the html
		let contentDoc = (new DOMParser()).parseFromString(
			contentDocHtml, 'text/html')
		afterChangingDom(contentDoc)
	}
	chrome.tabs.query({ active: true }, function (tabs) {
		var tab = tabs[0];
		chrome.tabs.executeScript(
			tab.id, {
			code: 
				`(function() { try {
			`+ changeCode +
				`
				return document.documentElement.outerHTML
			}catch(e){return e.message+'\\n'+e.stack}})();
			`
		},
			(result) =>
				withErrorLoggingFromChromeRuntime(result, afterGettingContent)
		);
	});
}

function runTest() {
	changeDom(`document.body.style.background='yellow'`,
		(contentDoc) => { el("id1").innerText = contentDoc.documentElement.outerHTML })
}

function withErrorLoggingFromChromeRuntime(result, fn) {
	fn(result)
	const lastErr = chrome.runtime.lastError;
	if (lastErr) console.log(' lastError: ' + JSON.stringify(lastErr));
}

$('#runTestButton').click(runTest)