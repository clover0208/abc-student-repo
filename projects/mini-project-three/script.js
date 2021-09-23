(function () {
    canvas = document.getElementById('tree');
    ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    WIDTH	= canvas.width;
    HEIGHT	= canvas.height;
    
    clearScreen();
})();

function resizeCanvas() {
    canvas.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    canvas.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
    
    clearScreen();
}

function clearScreen() {
    var grd = ctx.createLinearGradient(0,0,0,180);
    grd.addColorStop(0,"#6666ff");
    grd.addColorStop(1,"#aaaacc");

    ctx.fillStyle = grd;
    ctx.fillRect(  0, 0, WIDTH, HEIGHT );
}



var createTree = function(){


	var draw = (function(){ 
		
		var c = document.getElementById("tree").getContext("2d");
		var canvasWidth = window.innerWidth;
		var canvasHeight = window.innerHeight-100;
		var extent = 2.4; //arbitrary x scale
		var nGen = 4;
	
		return function(multi, r, theta){
			
			var xScale = (function(){
				var xRange = extent;
				var width = canvasWidth;
				var c = width/2;
				var m = width/xRange;
				
				return function(val){
					return Math.round(m*val + c);	
				};
				
			})();
			
			var yScale = (function(){
				var height = canvasHeight;
				var width = canvasWidth;
				var aspect = width/height;
				var yRange = extent/aspect*2;
				var m = -height/yRange;
				var c = -(m*extent);
				
				return function(val){
					return Math.round(m*val + c);	
				};
					
			})();
			
			var branchAngles = [];
			
			(function(){
				var branchSep = (2*theta)/(multi*2);
				for(var i=0; i<multi; i++){
					branchAngles.push(-theta + i*branchSep);	
				}
			})();
			
			c.clearRect(0, 0, canvasWidth, canvasHeight);
			c.beginPath();
			c.strokeStyle = "#";
			var xInit = 0;
			var yInit = 1.6;
			var rotInit = 0;
			
			var thisGen = [{xEnd:xInit, yEnd:yInit, rot:rotInit}];
			var changedCol = false;
			
			for(var i=0; i<nGen; i++){
				
				var lastGen = thisGen;
				var nLastGen = lastGen.length;
				thisGen = [];
				thisGen.length = multi*nLastGen;
				
				var notLastGen = i<(nGen-1) ? true : false;
				
				var	len = Math.pow(r, i+1);
				
				if(!changedCol && i>2){
					changedCol = true;
					c.stroke();
					c.beginPath();
					c.strokeStyle = "#308014";//"green";
				}
				
				
				for(var j=0; j<nLastGen; j++){
					
					var parent = lastGen[j];
					var xStart = parent.xEnd;
					var yStart = parent.yEnd;
					var rotParent = parent.rot;
					
					for(var k=0; k<multi; k++){
						var rot = rotParent + branchAngles[k];
						var xEnd = xStart + len*Math.sin(rot)/2;
						var yEnd = yStart + len*Math.cos(rot)/2;
						
						c.moveTo(xScale(xStart/2), yScale(yStart/2));
						c.lineTo(xScale(xEnd), yScale(yEnd));
						
						if(notLastGen){
							thisGen[j*multi+k] = {
								xEnd: xEnd,
								yEnd: yEnd,
								rot: rot
							};
						}
					}
					
				}
				
			}
			
			c.stroke();
			
			
		};
	
	})();
	
	var multiplicity;
 	var ratio;
	
	
	(function(){

		var setMultiplicity = function(){multiplicity = parseInt(5, 30);};

		setMultiplicity();
		
		var slider = document.getElementById("tree-ratio");
		var setRatio = function(){ratio = parseFloat(slider.value);};
		slider.addEventListener("input", function(){setRatio();});
		setRatio();
	})();
	


	var animationStartTime;
	var requestId;

	
	var startAnimation = function(){
		animationStartTime = window.performance.now();
		requestId = window.requestAnimationFrame(animate);
	};
	
	var animate = function animate(time){
    	requestId = window.requestAnimationFrame(animate);
		var timeDifference = time - animationStartTime;
		var angleDeg = timeDifference/25;
		var angle = angleDeg*(Math.PI/180);
		draw(multiplicity, ratio, angle);
	};
	
	var stopAnimation = function(){
		if(requestId){
			window.cancelAnimationFrame(requestId);
		}
		requestId = undefined;
	};
	

	return Object.freeze({
		startAnimation: function(){startAnimation(); return this;},
		stopAnimation: function(){stopAnimation(); return this;},
	});
	
	
};

var tree = createTree();
tree.startAnimation();



function start() {
    let divWidth = window.innerWidth/50;
    let rangeValue = rangeSquare.value;

    for (let i = 0; i < 200; i++) {
        let Square = document.createElement("div");
        Square.style.width = rangeValue * random[i] + 'px'
        Square.style.height = rangeValue * random[i]+'px'
        Square.style.position = "absolute"
        Square.style.top += rangeValue * random[i] + 'px'
		Square.style.left = divWidth * i + 'px'
		Square.style.border = "thin groove #308014"
        Square.id = "div" + i;
        Square.className = "Squares"
        document.getElementById("moreSquare").appendChild(Squares)
    }

}

let rangeSquare = document.getElementById('rangeSquare')
rangeSquare.addEventListener('input', range1)


let random = [];
for (let i = 0; i < 100; i++) { 
    random.push(Math.random() * 6 + 2)
}

function range1() {
    let divWidth = window.innerWidth/20;
    let rangeValue = rangeSquare.value;

    for (let i = 0; i < 200; i++) {
        let Square = document.createElement("div");
		Square.style.width = divWidth + 'px'
        Square.style.height = 2 + 'px'
		Square.style.position = "absolute"
        Square.style.top += rangeValue * random[i] + 'px'
        Square.style.left = divWidth * i + 'px'
        Square.style.border = "thin groove #308014"
        Square.id = "div" + i;
		Square.className = "Squares"
        document.getElementById("moreSquare").appendChild(Square)
    }

}

//Play with camera

// var video;

// var vScale = 16;
// var slider;

// function setup(){
// 	createCanvas(700,480);
// 	pixelDensity(1);
// 	video = createCapture(VIDEO);
// 	video.size(width/vScale,height/vScale);
// 	slider=createSlider(0,255,77);
// }

// function draw(){
// 	// background(255);
// video.loadPixels();
// loadPixels();
// for(var y=0;y< 900;y++){
// 	for(var x=0; x<video.width;x++){
// 		var index=(video.width-x+1+(y*video.width))*4
// 		var r=video.pixels[index+0];
// 		var g=video.pixels[index+1];
// 		var b=video.pixels[index+2];

// 		var bright=(r+g+b)/3;
// 		var threshold=slider.value();

// 		if(bright>threshold){
// 			fill(255);
// 		}else{
// 			fill(0);
// 		}

// 		noStroke();
// 		rectMode(CENTER);
// 		rect(x+vScale,y+vScale,vScale,vScale);

// 	}
// }
// }


window.onkeyup = keyup;

//creates a global Javascript variable
var inputTextValue;

function keyup(e) {

let contentElement = document.getElementById('contentElement');

  inputTextValue = e.target.value;
  $('#searchValue').text(inputTextValue);
  document.getElementById('searchValue').style.color='white';
  //listens for you to press the ENTER key, at which point your web address will change to the one you have input in the search box
  if (e.keyCode == 13) {
    window.location = "https://duckduckgo.com/?q=" + inputTextValue;
  }
  let letters = inputTextValue.split("");
  for (let i = 0; i < letters.length; i++) {
	let newDiv = document.createElement("div");
	newDiv.style.position = "absolute"
	newDiv.style.top = Math.random() * (window.innerHeight - 100) + 50 + 'px'
	newDiv.style.left = Math.random() * (window.innerWidth) + 'px'
	newDiv.style.color = 'red'
	newDiv.style.fontSize = 20+ 'px'
	newDiv.className = "newDiv"
	newDiv.id = 'newDiv' + i
	let newContent = document.createTextNode(letters[i]);
	newDiv.appendChild(newContent);
	document.getElementById("contentElement").appendChild(newDiv)
}
let NewDiv = document.getElementsByClassName('newDiv')

setInterval(move, 20);





let Rotate = []
for (let i = 0; i <NewDiv.length; i++) {
	Rotate.push(Math.random() * 10 - 5)
}

let Moving = []
for (let i = 0; i < NewDiv.length; i++) {
	Moving.push(Math.random() * 10 - 5)
}
let Movingtwo = []
for (let i = 0; i < NewDiv.length; i++) {
	Movingtwo.push(Math.random() * 10 - 5)
}



function move() {
	for (let i = 0; i < NewDiv.length; i++) {
    Rotate[i] += 2
	Moving[i] += 3
	Movingtwo[i] += 3
	NewDiv[i].style.transform = "translate(" + Movingtwo[i]/3 + "px," + Moving[i]/3 + "px)" + "rotate(" + Rotate[i] + "deg)"

	}
}

//   let letterSpans = letters.map((letter)=>{ return "<span>"+letter+"</span>"});
//   contentElement.innerHTML = letterSpans.join("");
// //   let spanTags = contentElement.getElementsByTagName("span");
// //   let randomMultipliers = letters.map((letter)=>{ return Math.random()*4 })
//   $('.contentElement').find('span:first').addClass('q q4');
//   $('.contentElement').find("td:nth-child(2) span.select_me").addClass('q q2');
// //   $('.contentElement:second').find('span:third').addClass('q q3');
  
//   var element = 1;


//   $(document).ready(function() {
  
//   $('.q').click(function(){
// 		  $(this).removeClass('q').addClass("answer" + element);
// 		  element = element + 1;
//   });
  
//   })
  console.log(contentElement)
  
//   for(let i = 0; i < spanTags.length; i+=1){
  // then we multiply the slider value by the multiplier
//   let yPos = randomNums[i]*i
  // and apply the new value to the top position
  // of the span tag. this works because we have set
  // all span elements to position: relative in style.css
//   spanTags[i].style.top = yPos + "px";
//   }


}

