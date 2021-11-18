let socket = io("https://cliff-raspy-nerine.glitch.me");
let others = [];
let myId;
let testMode = false;

//receiveMyId
socket.on('singleId', function(msg) {
  console.log("My ID:", msg.value)
  myId = msg.value
});
// here I receive updated whenever someone disconnects or connects to the socket server.
socket.on('updatedClients', function(msg) {
  console.log("updatedClients", msg)
  others = msg.value
});


let all = document.getElementById("all");
let allbutme = document.getElementById("allbutme");
let randomSingle = document.getElementById("randomSingle");
let buttonOutput = document.getElementById("buttonOutput");

function buttonReceived(){
  buttonOutput.style.backgroundColor = "red";
  buttonOutput.style.position = "absolute";
  buttonOutput.style.left = "0px"
  buttonOutput.style.top = "10px";
  buttonOutput.style.animationName = "example"
  buttonOutput.style.animationDuration = Math.random() + 6 + 's'
  // buttonOutput.style.animationTimingFunction = 'linear'
  setTimeout(function(){
    buttonOutput.style.backgroundColor = "black";
  }, 500)
}

all.addEventListener("click",function(){
  console.log("click");
  socket.emit('button1ToAll');
})

allbutme.addEventListener("click",function(){
  console.log("click");
  socket.emit('button1ToAllButMe');
})

randomSingle.addEventListener("click",function(){
  if(others.length>0){
    let ranFloat=Math.random()*others.length
    let ranIdx=Math.floor(ranFloat)
    let randomOtherId=others[ranIdx];
      socket.emit('button1ToSingle', {id: randomOtherId});
  }
})

socket.on('button1ToAllButMe', function(msg) {
  if(testMode && msg.from != myId){return}
  buttonReceived();
});

socket.on('button1', function(msg) {
  if(testMode && msg.from != myId){return}
  buttonReceived();
});



// socket.on('button1', function(msg) {
//   if(testMode && msg.from != myId){return}
//   buttonReceived();
// });
