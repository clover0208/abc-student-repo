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
	
	//set multiplicity and ratio
	(function(){
		// var select =  document.getElementById("tree-multi");
		var setMultiplicity = function(){multiplicity = parseInt(5, 30);};
		// select.addEventListener("change", function(){setMultiplicity();});
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
        Square.style.width = rangeValue * randomNums[i] + 'px'
        Square.style.height = rangeValue * randomNums[i]+'px'
        Square.style.position = "absolute"
        Square.style.top += rangeValue * randomNums[i] + 'px'
		Square.style.left = divWidth * i + 'px'
		Square.style.border = "thin groove #308014"
        Square.id = "div" + i;
        Square.className = "Squares"
        document.getElementById("moreSquare").appendChild(Squares)
    }

}

let rangeSquare = document.getElementById('rangeSquare')
rangeSquare.addEventListener('input', range1)


let randomNums = [];
for (let i = 0; i < 100; i++) { 
    randomNums.push(Math.random() * 6 + 2)
}

function range1() {
    let divWidth = window.innerWidth/20;
    let rangeValue = rangeSquare.value;

    for (let i = 0; i < 200; i++) {
        let Square = document.createElement("div");
		Square.style.width = divWidth + 'px'
        Square.style.height = 2 + 'px'
		Square.style.position = "absolute"
        Square.style.top += rangeValue * randomNums[i] + 'px'
        Square.style.left = divWidth * i + 'px'
        Square.style.border = "thin groove #308014"
        Square.id = "div" + i;
		Square.className = "Squares"
        document.getElementById("moreSquare").appendChild(Square)
    }

}

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