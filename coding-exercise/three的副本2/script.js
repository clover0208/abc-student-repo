// (function(){
//     var playBtn = document.getElementById('playBtn');
//     var myAudio = new Audio("https://file-examples.com/wp-content/uploads/2017/11/file_example_WAV_1MG.wav", {
//       dataMax: 50,
//       onLoad: function(){
//         playBtn.onclick = function(e){
//           if(!myAudio.isPlaying){
//             myAudio.play();
//             this.className = 'stop';
//           } else {
//             myAudio.stop();
//             this.className = '';
//           }
//         }
//       },
//       onData: function(data){
//         var maxHeight = (Math.max.apply(null, data)/255)*90;
//         console.log(maxHeight)
//       },
//       onEnded: function(){
//         playBtn.className = '';
//       }
//     });
//   })();







//my working part :(((
// let range = document.getElementById("myRange");
// let valueElement = document.getElementById("valueElement");
// function inputHapppened(){
//     console.log("input happened", range.value);
//     valueElement.innerHTML = range.value;
//     // using the "left" attribute to move the span tag
//     // works because its position is set to "relative"
//     // in the style.css file
//     valueElement.style.left = range.value + "px";
//     TweenLite.to('.bottom', 0.3, {css:{rotationX:rotation+range.value}});
//     TweenLite.to(cube, 0.1, {css:{rotationX:range.value}});
    
 
//   }
// range.addEventListener("input", inputHapppened)
//my working part 


//these are the various code I tried but doesn't work

// let button=document.getElementById("button");

// console.log(button);

// function openWindow(){
//   let popupwidth=200;
//   let popupheight=200;
//   let x=500;
//   let y=500;


//   let openWindow=window.open("","","width=200,height=200");
// setTimeout(()=>{
//   openWindow.close();
// },5000);

// }

// button.addEventListener("click",()=>{
//   console.log("click");
// openWindow();
// })

// let rotation=document.getElementsByClassName('cube');
// rotation.style.transform = 'rotate(90deg)';
// var rotated = false;

// document.getElementById('button').onclick = function() {
// var div = document.getElementsByClassName('cube');
//         deg = rotated ? 0 : 66;

//     // div.style.webkitTransform = 'rotate('+deg+'deg)'; 
//     div.style.mozTransform    = 'rotate('+deg+'deg)'; 
//     div.style.msTransform     = 'rotate('+deg+'deg)'; 
//     div.style.oTransform      = 'rotate('+deg+'deg)'; 
//     div.style.transform       = 'rotate('+deg+'deg)'; 
    
//     rotated = !rotated;
// }


// var spinner = document.querySelector(".cube");
// document.querySelector("button").onclick = function() {
//   spinner.style.animationName = "spin";
//   console.log("hello")
//   setTimeout(function() {
//     spinner.style.animationName = "";
//   }, 4000);
// };



// var spinner = document.querySelector("#cube");
// document.querySelector("button").onclick = function() {
//   spinner.style.animationName = 'spin';
//   console.log("hello")
//   setTimeout(function() {
//     spinner.style.animationName = "";
//   }, 1000);
// };

// document.getElementById('button').onclick = function() {
//     document.getElementById('cube').classList.toggle('rotated');
// }


// let cube = document.getElementById("rotateCube");

// function rotLeft() {
// //   resetCube()
//   cube.className += " " + "show-left";
// }

// function rotRight() {
//   resetCube()
//   cube.className += " " + "show-right";
// }

// function rotUp() {
//   resetCube()
//   cube.className += " " + "show-top";
// }

// function rotDown() {
//   resetCube()
//   cube.className += " " + "show-bottom";
// }

// function resetCube() {
//   cube.className = "cube";
// }


// document.onkeydown = function(e) {
//   e = e || window.event;
//   if (e.keyCode == "37") {
//     rotLeft();
//   } else if (e.keyCode == "39") {
//     rotRight();
//   } else if (e.keyCode == "38") {
//     rotUp();
//   } else if (e.keyCode == "40") {
//     rotDown();
//   }
// };


// (function(){
//     var shouldHandleKeyDown = true;
//     document.onkeydown = function(e){
//         e = e || window.event;
//       if (!shouldHandleKeyDown) return;
//       shouldHandleKeyDown = false;
//       // HANDLE KEY DOWN HERE
//       rotLeft();
//     }
//     document.onkeyup = function(e){
//         e = e || window.event;
//       shouldHandleKeyDown = true;
//     }
// })();

let on = document.getElementById("on");
let off = document.getElementById("off");


let volumeRange = document.getElementById("volumeInput");

let range = document.getElementById("myRange");
let valueElement = document.getElementById("valueElement");

let context = new AudioContext();
let destination = context.destination;

let oscillator = context.createOscillator();
oscillator.type = "triangle";
oscillator.frequency.value = 440;

let gain = context.createGain();

oscillator.connect(gain);
gain.connect(destination);

let oscillatorStarted = false;
gain.gain.value = volumeInput.value/100;
let minHz = 65;
let maxHz = 1050;
function map(value, x1, y1, x2, y2){
  return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
}


//my working part :(((
  
  let mappedHertz = map(range.value, 0, 100, minHz, maxHz);
  oscillator.frequency.value = mappedHertz;


  on.addEventListener("click", ()=>{
    if(!oscillatorStarted){
      oscillator.start(0);
      oscillatorStarted = true;
    }
  
    // instead of setting full volume:
    // gain.gain.value = 1;
    // let us stay true to the volume slider:
    gain.gain.value = volumeInput.value/100;
  
  });
  
  off.addEventListener("click", ()=>{
    gain.gain.value = 0;
  });

// function inputHapppened(){
//     console.log("mapped hertz is", mappedHertz)

//       console.log("input happened", range.value);
//       valueElement.innerHTML = range.value;
//       // using the "left" attribute to move the span tag
//       // works because its position is set to "relative"
//       // in the style.css file

//       oscillator.frequency.value = map(range.value, 0, 100, minHz, maxHz);
  
//       console.log(range.value)
//       valueElement.style.left = range.value + "px";
//       TweenLite.to('.bottom', 0.3, {css:{rotationX:rotation+range.value}});
//       TweenLite.to(cube, 0.1, {css:{rotationX:range.value}});
      
   
//     }
//   range.addEventListener("input", inputHapppened)
  //my working part 


var gearSpeed = 0;
// var cubeSpeed = 0;

TweenMax.set('.front', { z: '100px' });
TweenMax.set('.back', { rotationY: 180, z: '-100px' });
TweenMax.set('.right', { rotationX: 90, rotationZ: 90, rotationY: 90, x: '100px' });
TweenMax.set('.left', { rotationX: 90, rotationZ: -90, rotationY: -90, x: '-100px' })
TweenMax.set('.top', { rotationX: 90, y: '-100px' });
TweenMax.set('.bottom', { rotationX: -90, y: '100px' });
TweenMax.to('.front, .back', gearSpeed, { rotationZ: 360, repeat: -1, yoyo: true, ease: Linear.easeNone });
TweenMax.to('.right, .left', gearSpeed, { rotationY: 360, repeat: -1, yoyo: true, ease: Linear.easeNone });
TweenMax.to('.top, .bottom', gearSpeed, { rotationY: 360, repeat: -1, yoyo: true, ease: Linear.easeNone });
TweenMax.to('.middle', gearSpeed, { rotationZ: 360, rotationY: 360, rotationX: 360, repeat: -1, yoyo: true, ease: Linear.easeNone });
TweenMax.fromTo('.cube', 1, { z: 0 }, { z: 0, repeat: -1, ease: Linear.easeNone, yoyo: true });

var cube = $('.cube');
var timeline = new TimelineMax({ repeat: -1, yoyo: true });
// // timeline.to(cube, cubeSpeed, { rotationY: 180 });
// // timeline.to(cube, cubeSpeed, { rotationX: -90, rotationY: 0 });
// // timeline.to(cube, cubeSpeed, { rotationX: 0, rotationY: -90 });
// // timeline.to(cube, cubeSpeed, { rotationY: 0, rotationX: 90 });
// // timeline.to(cube, cubeSpeed, { rotationY: 90, rotationX: 0 });
// //timeline.pause();
var degrees = $(".degree");
var rotation = 10;
var type=10;

// degrees.click(inputHapppened);


// function setTweenValues() {

//     var tweenCode = 'TweenLite.to(".cube", 0.5, {rotation:"' + rotation + rangeValue +'"});';
//     // output.text(tweenCode);
// }

// function doTween(){
//   TweenLite.to('.cube', 0.5, {css:{rotation:rotation+type}});
  
// }


window.onload = function() {
    var file = document.getElementById("file");
      var audio = document.getElementById("audio");
      
      file.onchange = function() {
        var files = this.files;
        audio.src = URL.createObjectURL(files[0]);
        audio.load();
        audio.play();
        var context = new AudioContext();
        var src = context.createMediaElementSource(audio);
        var analyser = context.createAnalyser();
  src.connect(analyser);
        analyser.connect(context.destination);
        analyser.fftSize = 2048;
    var bufferLength = analyser.frequencyBinCount;
        var dataArray = new Uint8Array(bufferLength);
  var x = 0;
    function renderFrame() {
          requestAnimationFrame(renderFrame);
    x = 0;
    analyser.getByteFrequencyData(dataArray);
    
          for (var i = 0; i < bufferLength; i++) {
            console.log(dataArray[i]);
            console.log(typeof dataArray[i]); 
            var n = dataArray[i].toString();
            console.log(n); 
            TweenLite.to('.bottom', 0.3, {css:{rotationX:rotation+n}});
            TweenLite.to(cube, 0.1, {css:{rotationX:n}});
          }
        }
    
        audio.play();
        renderFrame();
        degrees.click(renderFrame);
      };
     
    };


// degrees.mouseenter(setTweenValues);










  
//   // sound.js
//   const WIDTH = 1000;
//   const HEIGHT = 1000;
  
//   const canvas = document.querySelector("canvas");
//   const ctx = canvas.getContext("2d");
//   canvas.width = WIDTH;
//   canvas.height = HEIGHT;
  