
   let notepad = document.getElementById('notepad');
   
   notepad.addEventListener('keyup', function (event) {
       chrome.storage.local.set({notepad: event.target.innerHTML}, function () {
           console.log("Notepad is updated with", event.target.innerHTML);
       });
   });
   
   chrome.storage.local.get(['notepad'], function (data) {
       console.log('notepad data', data);
       notepad.innerHTML = data.notepad;
   });