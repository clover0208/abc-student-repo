// https://developer.chrome.com/extensions/messaging




// let findWord = document.getElementById("findword");
// let replaceWord = document.getElementById("replaceword");
// let button = document.getElementById("replaceButton");


// button.addEventListener("click", ()=>{

//   let wordToSearchFor = findWord.value;
//   let wordToUseInstead = replaceWord.value;


//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     let message = {
//       find: wordToSearchFor,
//       replace: wordToUseInstead
//     }

//     chrome.tabs.sendMessage(tabs[0].id, message);
//   });
// })

// var letter_e = [
//     25,
//     25,
//     25,
//     25,
//     25,
//     10,
//     10,
//     10,
//     10,
//     10,
//     25,
//     25,
//     25,
//     25,
//     10,
//     10,
//     10,
//     10,
//     10,
//     25,
//     25,
//     25,
//     25,
//     25
// ];



// var string = 'Writing out giant letters with javascript is a bad idea! ';

// console.log(string)
// var current_letter_count = 0;
// letter_e.forEach(function(count) {
//     document.addEventListener('DOMContentLoaded', function() {
//         var div = document.createElement('div');
//         div.id = 'container';
//         div.innerHTML = 'Hi there!';
//         div.className = 'border pad';
     
//         document.body.appendChild(div);
   
//     for (i = 0; i < count; i++) {
        
//         div.innerHTML = div.innerHTML + string[current_letter_count];

//         current_letter_count++;
//         if (current_letter_count >= string.length) {
//             current_letter_count = 0;
//         }
//     }
//     div.innerHTML = div.innerHTML + '</br>';
//     console.log(div.innerHTML)
// }, false);
// });


   
// let toggle = document.getElementById('toggle');
// toggle.addEventListener('click', () => {
//     let checked = toggle.checked;


//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//         let message = {
//             toggle: checked,
//         }
//         chrome.tabs.sendMessage(tabs[0].id, message);
//     });

// })


// let popup=document.getElementById("popup");
//mirror.addEventListener("click",test);


// popup.addEventListener("click",()=>{
// alert("has been applied");
//     chrome.tabs.query({active:true, currentWindow:true},function (tabs){
//         value=value+1;
//         let currentTab=tabs[0];
//         chrome.tabs.sendMessage(currentTab.id,  {type: "buttonPressed",value:value} );
//       }
//       );

// });



// function saySomething() {
//     console.log("Hello World");
//   }

// function testSomething() {
//     // Replace console.log with stub implementation.
//     const originalLog = console.log;
//     const calls = [];
//     console.log = (...args) => {
//       calls.push(args);
//       originalLog(...args);
//     };
  
//     try {
//       console.assert(calls.length == 0);
//       saySomething();
//       console.assert(calls.length == 1);
//       console.assert(calls[0][0] == "Hello World");
//     } catch (error) {
//       console.error(error);
//     } finally {
//       // Restore original implementation after testing.
//       console.log = originalLog;
//     }
//   }
