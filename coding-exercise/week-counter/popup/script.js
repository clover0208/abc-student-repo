console.log("hello")

let button=document.querySelector("#button");
let counter=document.querySelector("#count");
let counter=0;

let message={type:"getCount"}
chrome.runtime

button.addEventListenera("click",()=>{
    counter++;
    let message="hi background"
    chrome.runtime.sendMessage(message);
    counter.innerHTML=counter;
})
