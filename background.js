chrome.runtime.onInstalled.addListener(function () {
     const item = 
     {
         notepad:"note Keypoints here 👇",
         text: 'black'
     };
     chrome.storage.local.set(item, function () {
         console.log("Notepad initialized", item);
     });
 });