console.log("i am here")

let button=document.getElementById("button");

console.log(button);

function openWindow(){
  let popupwidth=200;
  let popupheight=200;
  let x=500;
  let y=500;


  let openWindow=window.open("","","width=200,height=200");
setTimeout(()=>{
  openWindow.close();
},5000);

}

button.addEventListener("click",()=>{
  console.log("click");
openWindow();
})