let ring=document.getElementById("ring");
//ring.volume=1;

// let canvas = document.getElementById("myCanvas");
// let ctx = canvas.getContext("2d");
// let x = canvas.width/2;
// let y = canvas.height-30;

let box=document.getElementById("movingBox");

let spotX=Math.random()*900;
let spotY=Math.random()*700;

let newBox=document.createElement("div");
newBox.style.width="20px";
newBox.style.height="20px";
newBox.style.position="absolute";
newBox.style.backgroundColor="red";
newBox.style.left=spotX+"px";
newBox.style.top=spotY+"px";
document.body.appendChild(newBox);




let dx = 2;
let dy = -2;

// let x0=canvas.width/2;
// let y0=canvas.height/2;
let d=0;

let rightPressed=false;
let leftPressed=false;
let upPressed=false;
let downPressed=false;

document.addEventListener("keydown", keyDown);
//document.addEventListener("keyup", keyUp, false);

function mapRange (value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
}
let stepX=200;
let stepY=200;
function keyDown(e){

  if(e.key == "Right" || e.key == "ArrowRight"){
    stepX+=50;
    box.style.left = stepX+"px";

  }

  else if(e.key == "Left" || e.key == "ArrowLeft"){
    stepX-=50;
    box.style.left = stepX+"px";
   

  }
  else if(e.key == "Up" || e.key == "ArrowUp"){
    stepY-=50;
    box.style.top = stepY+"px";
  }
  else if(e.key == "Down" || e.key == "ArrowDown"){
    //box.style.transform = "translateY("+stepY+"px)";
    stepY+=50;
    box.style.top = stepY+"px";

  }
  let temp_d=(spotX-stepX)**2+(spotY-stepY)**2;
  d=Math.sqrt(temp_d);
  //ring.volume=mapRange(d,0,1300,1,0);
if(d<150){
  newBox.style.backgroundColor="blue";
}
else{
  newBox.style.backgroundColor="red";

}

 let k=200/d;
 if(k>0 && k<1){
   ring.volume=200/d;

 }
 else if (k<=0){
   ring.volume=0;

 }
 else if(k>=1){
   ring.volume=1;

 }

  console.log(ring.volume);

}
