// onmousemove = function(e){
//   //Logging purposes
//   console.log("mouse location:", e.clientX, e.clientY);

//   //meat and potatoes of the snippet
//   var pos = e;
//   var dot;
//   dot = document.createElement('div');
//   dot.className = "dot";
//   dot.style.left = pos.x + "px";
//   dot.style.top = pos.y + "px";
//   document.body.appendChild(dot);

//   // ctxtwo.lineTo(300, 40); 
//   // ctxtwo.lineTo(180, 100); 
//   // ctxtwo.lineTo(400, 100);
  
  

    
//   // $('#hexagon').on('click',function(){
//   //   console.log("Text");
//   //   ctx.globalCompositeOperation = 'destination-out';
//   // });
//   // $('#hexagon').onClick(function(){
//   //   $('#hexagon').addClass('classname');
//   // });
  

  
// } 







// $("body").mousemove(function(e) {
//   document.Form1.posx.value = e.pageX;
//   document.Form1.posy.value = e.pageY;
// })

onmousemove = function(e){
  //Logging purposes
  console.log("mouse location:", e.clientX, e.clientY);

  //meat and potatoes of the snippet
  var pos = e;
  var dot;
  dot = document.createElement('div');
  dot.className = "dot";
  dot.style.left = pos.x + "px";
  dot.style.top = pos.y + "px";
  document.body.appendChild(dot);
  var ctx = document.getElementById('hexagon').getContext('2d');

var numberOfSides = 6,
    size = 20,
    Xcenter = 25,
    Ycenter = 25;

ctx.beginPath();
ctx.moveTo(e.clientX/2, e.clientY/2);
// ctx.lineTo(e.clientX*2, e.clientX); 
// ctx.lineTo(e.clientX, e.clientX); 
ctx.bezierCurveTo(20, e.clientX/2, 100, e.clientX, 100, e.clientX/2);
// ctx.bezierCurveTo(20, e.clientX/2, 200, e.clientX, 200, e.clientX/2);
// ctx.lineTo(e.clientY, e.clientX); 
// ctx.lineTo(e.clientY, e.clientX); 
// ctx.lineTo(e.clientY, 120); 
// ctx.lineTo(e.clientX*2, e.clientY);


var gradient = ctx.createLinearGradient(100,0, 300,0);

gradient.addColorStop(0, 'red');
gradient.addColorStop(.5, '#FC7F03');
gradient.addColorStop(1, 'white');
ctx.fillStyle = gradient;
ctx.fill();
  

var ctxtwo = document.getElementById('hexagontwo').getContext('2d');



ctxtwo.beginPath();
ctxtwo.moveTo(e.clientX, e.clientY);
// ctxtwo.lineTo(200, 80); 
// ctxtwo.lineTo(300, 0); 
ctxtwo.bezierCurveTo(100, e.clientY/2, 200, e.clientY, 200, e.clientY/2);

var gradient = ctxtwo.createLinearGradient(10,0, 300,0);
  
gradient.addColorStop(0, 'blue');
gradient.addColorStop(.5, 'blue');
gradient.addColorStop(1, 'white');
ctxtwo.fillStyle = gradient;
ctxtwo.fill();

if(e.clientX=e.clientY){
  var showMe = document.getElementById('showMe');
// // showMe.style.height = 92+"px";
showMe.style.top =  18.5+"vh";
showMe.style.left = 30+"vw";
  $('#showMe').delay(5000).show(0);
}
}      


// $('#hexagon').on('click',function(){
//   console.log("Text");
//   ctx.globalCompositeOperation = 'destination-out';
// });
// $('#hexagon').onClick(function(){
//   $('#hexagon').addClass('classname');
// });

$('#hexagontwo').click(function() {
  console.log("Texttwo");
  $('#hexagontwo').css({
      'opacity': '0'
  });
});
$('#hexagon').click(function() {
  console.log("Textone");
  $('#hexagon').css({
      'opacity': '0'
  });
});



// ute



// function ani() {
//   document.getElementById('hexagon').className = 'classname';
// }

// for (var i = 1; i <= numberOfSides;i += 1) {
//   ctx.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
// }

// ctx.strokeStyle = "#000000";
// ctx.lineWidth = 1;
// ctx.stroke();

// document.getElementById('hexagon').onchange = function() {
//   console.log("Text");
//   // ctx.clearRect(0,0,canvas.width,canvas.height);
//  ctx.globalCompositeOperation = 'destination-out';
//   };


// let door1 = document.getElementById("bird");
// door1.style.height = 20+"px";
// door1.style.top =  20+"px";



// function myMove() {
//     let id = null;
//     const bird = document.getElementById("bird");
//     // const elem = document.getElementById("animate");   
//     let pos = 0;
//     console.log("Text");
//     clearInterval(id);
//     id = setInterval(frame, 5);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++; 
//         bird.style.top = pos + "px"; 
//         bird.style.left = pos + "px"; 
//       }
//     }

//     // door1.style.animationName = "openDoor";
//     // door1.style.animationDuration = "5s";
//     // door1.style.animationIterationCount = "1"
//   }

// function do_move() {
//   // fish = document.getElementById("bird");
//   horz = door1.style.left;
//   horz = parseInt(horz.substring(0,horz.length-2));
//   console.log("Text");
//   // How far we are moving the image each "step"
//   horz += 10;
//   door1.style.left = (horz)+'px';

//   // The total distance we are moving the image
//   if (horz < 500) {
//     // Set things up to call again
//     window.setTimeout(function() {
//       do_move(image);
//     }, 250);  // 1/4 of a second
//   }
// }

// var winHeight = window.innerHeight;// get the window height & width
// var winWidth = window.innerWidth;
// var clock;
// var index = 0;

// function do_move() {
//   fish = document.getElementById("bird");
//   horz = fish.style.left;
//   horz = parseInt(horz.substring(0,horz.length-2));

//   // How far we are moving the image each "step"
//   horz += 10;
//   fish.style.left = (horz)+'px';

//   // The total distance we are moving the image
//   if (horz < 500) {
//     // Set things up to call again
//     window.setTimeout(function() {
//       do_move();
//     }, 250);  // 1/4 of a second
//   }
// }
// function add_shark() {

//     var height = Math.floor((Math.random()*winHeight)+100);
//     var image = document.createElement("IMG");
//     image.setAttribute("id", "sharks" + index);
//     image.setAttribute("style", "position:absolute;top:"+height+"px;left:0px;");
//     document.body.appendChild(image);
//     do_move(image.id);
//     index++;
// }

// $(function() {
//   var img = $("#bird"),
//       width = img.get(0).width,
//       screenWidth = $(window).width(),
//       duration = 5000;

//   function animatePlane() {
//       img.css("left", -width).animate({
//           "left": screenWidth
//       }, duration, animatePlane);
//   }

//   animatePlane();
// });
// bird.style.height = 92+"px";


var bird = document.getElementById('img');
var projectone = document.getElementById('project-one');

// var link = document.getElementById("link");
// link.addEventListener("click", move);

bird.style.height = 100+"px";
bird.style.top =  17.5+"vh";
bird.style.left = 3+"vw";
// projectone .style.height = 100+"px";
projectone.style.top =  23+"vh";
projectone.style.left = 5.6+"vw";

var birdX = 20;
var birdY = 20;
var delta =0;

bird.onclick=function() {
  var delta =0;
   birdX += 100;
   birdY += 200;
  // //  var bird = document.getElementById("img");
  //  console.log(Math.sin(birdX * Math.PI))
  //  bird.style.position = "relative";
  // //  bird.style.transform = "translateX(" + (birdX * Math.sin(birdX*Math.PI))+ "px)";
  // bird.style.transform = "translateX("+birdX+" px)";
  // // bird.className = 'element';
  // //  bird.style.transform = "translateY(" + (birdY * Math.sin(birdY*Math.PI))+ "px)";
  //  e.preventDefault();     //prevents the page from redirecting
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
  bird.style.top = x + 'px';
  bird.style.left = y + 'px';
  // bird.setAttribute("class", "rotated-image");
  bird.style.moztransform = "rotate("+delta+"deg)";
  // bird.setAttribute('style','transform:rotate("+delta+"deg); -webkit-transform: rotate("+delta+"deg)')
  delta+=10;
}

$(document).ready(function () {
  $("img").click(function () {
//forcing img to rotate every time on click()
      if ($(this).css("transform")=='none') {
          $(this).css("transform", "rotate(180deg)");
      }
      else {
          $(this).css("transform","")
      }
  })
})


var ctx = document.getElementById('hexagon').getContext('2d');

// // hexagon
// var numberOfSides = 6,
//     size = 20,
//     Xcenter = 25,
//     Ycenter = 25;

// ctx.beginPath();
// ctx.moveTo(200, 190);
// ctx.lineTo(280, 60); 
// ctx.lineTo(260, 10); 
// ctx.lineTo(220, 40); 
// ctx.lineTo(180, 140); 
// ctx.lineTo(400, 190);
// // ctx.fillStyle = "linear-gradient(to right, red, yellow)";
// // ctx.fill();

// var gradient = ctx.createLinearGradient(100,0, 300,0);

// gradient.addColorStop(0, 'yellow');
// gradient.addColorStop(.5, '#FFC0CB');
// gradient.addColorStop(1, 'white');
// ctx.fillStyle = gradient;
// ctx.fill();
  

// for (var i = 1; i <= numberOfSides;i += 1) {
//   ctx.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
// }

// ctx.strokeStyle = "#000000";
// ctx.lineWidth = 1;
// ctx.stroke();

// document.getElementById("hexagon").onchange = function() {
//   console.log("Text");
// ctx.globalCompositeOperation = 'destination-out';
//   };

 





// can = document.getElementById("hexagon")  //get canvas element
// can.addEventListener('click', function_name, false) //register event


// function function_name(e) //handle event
// {
//   ctx.globalCompositeOperation = 'destination-out';

// }


// function App(){
//   console.log("text")
//   /*
//    * Create our canvas and context and add an event listener.  
//    */
//   var canvas = document.getElementById("hexagon");
//   this.context = canvas.getContext('2d');
//   document.addEventListener('mousedown', this.onClick.bind(this), false);
// // hexagon
// var numberOfSides = 6,
//     size = 20,
//     Xcenter = 25,
//     Ycenter = 25;

// ctx.beginPath();
// ctx.moveTo(200, 190);
// ctx.lineTo(280, 60); 
// ctx.lineTo(260, 10); 
// ctx.lineTo(220, 40); 
// ctx.lineTo(180, 140); 
// ctx.lineTo(400, 190);
// // ctx.fillStyle = "linear-gradient(to right, red, yellow)";
// // ctx.fill();

// var gradient = ctx.createLinearGradient(100,0, 300,0);

// gradient.addColorStop(0, 'yellow');
// gradient.addColorStop(.5, '#FFC0CB');
// gradient.addColorStop(1, 'white');
// ctx.fillStyle = gradient;
// ctx.fill();
// }

// App.prototype.onClick = function(event){
//   /*
//    * If the event is a left mouse click, randomly generate a new color
//    * and call the fill() method.
//    */
//   if(event.which === 1){
//     ctx.globalCompositeOperation = 'destination-out';
//       // var color = [];
//       // for(var i=0; i<3; i++){
//       //     color.push(Math.floor(Math.random()*256));
//       // }
//       // this.fill('rgb('+color.join(',')+')');

//   }

// };

// App.prototype.fill = function(color){
//   /*
//    * Fill the canvas with the new color.
//    */
//   this.context.fillStyle = color;
//   this.context.fillRect(0, 0, this.context.canvas.width,
//                         this.context.canvas.height);
// };


// function run(){
//   new App();
// }

// window.onload = run;
// run();


$(document).ready(function(){
  animateDiv();
  
});

function makeNewPosition(){
  
  // Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 100;
  var w = $(window).width() - 100;
  
  var nh = Math.floor(Math.random() * h/3);
  var nw = Math.floor(Math.random() * w/3);
  
  return [nh,nw];    
  
}

function animateDiv(){
  var newq = makeNewPosition();
  $('.a').animate({ top: newq[0], left: newq[1] }, function(){
    animateDiv();        
  });
  
};


$(document).ready(function(){
  animateDivtwo();
  
});

function makeNewPositiontwo(){
  
  // Get viewport dimensions (remove the dimension of the div)
  var htwo = $(window).height() - 100;
  var wtwo = $(window).width() - 100;
  
  var nhtwo = Math.floor(Math.random() * htwo/3);
  var nwtwo = Math.floor(Math.random() * wtwo/3);
  
  return [nhtwo,nwtwo];    
  
}

function animateDivtwo(){
  var newqtwo = makeNewPositiontwo();
  $('.b').animate({ top: newqtwo[0], left: newqtwo[1] }, function(){
    animateDivtwo();        
  });
  
};


$(document).ready(function(){
  animateDivthree();
  
});

function makeNewPositionthree(){
  
  // Get viewport dimensions (remove the dimension of the div)
  var hthree = $(window).height() - 100;
  var wthree = $(window).width() - 100;
  
  var nhthree = Math.floor(Math.random() * hthree/3);
  var nwthree = Math.floor(Math.random() * wthree/3);
  
  return [nhthree,nwthree];    
  
}

function animateDivthree(){
  var newqthree = makeNewPositionthree();
  $('.c').animate({ top: newqthree[0], left: newqthree[1] }, function(){
    animateDivthree();        
  });
  
};

$(document).ready(function(){
  animateDivfour();
  
});

function makeNewPositionfour(){
  
  // Get viewport dimensions (remove the dimension of the div)
  var hfour = $(window).height() - 100;
  var wfour = $(window).width() - 100;
  
  var nhfour = Math.floor(Math.random() * hfour/3);
  var nwfour = Math.floor(Math.random() * wfour/3);
  
  return [nhfour,nwfour];    
  
}

function animateDivfour(){
  var newqfour= makeNewPositionfour();
  $('.d').animate({ top: newqfour[0], left: newqfour[1] }, function(){
    animateDivfour();        
  });
  
};


$(document).ready(function(){
  animateDivfive();
  
});

function makeNewPositionfive(){
  
  // Get viewport dimensions (remove the dimension of the div)
  var hfive = $(window).height() - 100;
  var wfive = $(window).width() - 100;
  
  var nhfive = Math.floor(Math.random() * hfive);
  var nwfive = Math.floor(Math.random() * wfive);
  
  return [nhfive,nwfive];    
  
}

function animateDivfive(){
  var newqfive= makeNewPositionfive();
  $('.e').animate({ top: newqfive[0], left: newqfive[1] }, function(){
    animateDivfive();        
  });
  
};



$(document).ready(function(){
  animateDivsix();
  
});

function makeNewPositionsix(){
  
  // Get viewport dimensions (remove the dimension of the div)
  var hsix = $(window).height() - 100;
  var wsix = $(window).width() - 100;
  
  var nhsix = Math.floor(Math.random() * hsix);
  var nwsix = Math.floor(Math.random() * wsix);
  
  return [nhsix,nwsix];    
  
}

function animateDivsix(){
  var newqsix= makeNewPositionsix();
  $('.f').animate({ top: newqsix[0], left: newqsix[1] }, function(){
    animateDivsix();        
  });
  
};

$(document).ready(function(){
  animateDivseven();
  
});

function makeNewPositionseven(){
  
  // Get viewport dimensions (remove the dimension of the div)
  var hseven = $(window).height() - 100;
  var wseven = $(window).width() - 100;
  
  var nhseven = Math.floor(Math.random() * hseven);
  var nwseven = Math.floor(Math.random() * wseven);
  
  return [nhseven,nwseven];    
  
}

function animateDivseven(){
  var newqseven= makeNewPositionseven();
  $('.h').animate({ top: newqseven[0], left: newqseven[1] }, function(){
    animateDivseven();        
  });
  
};

$(document).ready(function(){
  animateDiveight();
  
});

function makeNewPositioneight(){
  
  // Get viewport dimensions (remove the dimension of the div)
  var height = $(window).height() - 100;
  var weight = $(window).width() - 100;
  
  var nheight = Math.floor(Math.random() * height);
  var nweight = Math.floor(Math.random() * weight);
  
  return [nheight,nweight];    
  
}

function animateDiveight(){
  var newqeight= makeNewPositioneight();
  $('.i').animate({ top: newqeight[0], left: newqeight[1] }, function(){
    animateDiveight();        
  });
  
};


