console.log("i am here")

let button=document.getElementById("button");

let box=document.getElementById("box");

button.addEventListener("click",()=>{
  box.style.transform="rotate(45deg)";
})

let on