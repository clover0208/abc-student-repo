// (function (Raphael) {
//     Raphael.colorwheel = function (x, y, size, initcolor, element) {
//         return new ColorWheel(x, y, size, initcolor, element);
//     };
//     var pi = Math.PI,
//         doc = document,
//         win = window,
//         ColorWheel = function (x, y, size, initcolor, element) {
//             size = size || 200;
//             var w3 = 3 * size / 200,
//                 w1 = size / 200,
//                 fi = 1.6180339887,
//                 segments = 3,//pi * size / 50,
//                 size20 = size / 20,
//                 size2 = size / 2,
//                 padding = 2 * size / 200,
//                 t = this;

//             var H = 1, S = 1, B = 1, s = size - (size20 * 4);
//             var r = element ? Raphael(element, size, size) : Raphael(x, y, size, size),
//                 xy = s / 6 + size20 * 2 + padding,
//                 wh = s * 2 / 3 - padding * 2;
//             w1 < 1 && (w1 = 1);
//             w3 < 1 && (w3 = 1);

//             // ring drawing
//             var a = pi / 2 - pi * 2 / segments * 1.3,
//                 R = size2 - padding,
//                 R2 = size2 - padding - size20 * 2,
//                 path = ["M", size2, padding, "A", R, R, 0, 0, 1, R * Math.cos(a) + R + padding, R - R * Math.sin(a) + padding, "L", R2 * Math.cos(a) + R + padding, R - R2 * Math.sin(a) + padding, "A", R2, R2, 0, 0, 0, size2, padding + size20 * 2, "z"].join();
//             for (var i = 0; i < segments; i++) {
//                 r.path(path).attr({
//                     stroke: "none",
//                     fill: "#8fd117",
//                     transform: "r" + [(360 / segments) * i, size2, size2]
//                 });
//             }

//             r.path(["M", size2, padding, "A", R, R, 0, 1, 1, size2 - 1, padding, "l1,0", "M", size2, padding + size20 * 2, "A", R2, R2, 0, 1, 1, size2 - 1, padding + size20 * 2, "l1,0"]).attr({
//                 "stroke-width": w3,
//                 stroke: "#fff"
//             });
 
            
//             t.startCursor = r.set();
//             var h = size20 * 2 + 2;

//             t.startCursor.push(r.rect(size2 - h / fi / 2, padding - 1, h / fi, h, 3 * size / 200).attr({
//                 stroke: "#00A0C6",
//                 opacity: 1,
//                 "stroke-width": w3
//             }));
//             t.startCursor.push(t.startCursor[0].clone().attr({
//                 stroke: "#00A0C6",
//                 fill : "#8fd117", 
//                 opacity: 1,
//                 "stroke-width": w1
//             }));
 
//             t.endCursor = r.set();
//             var h = size20 * 2 + 2;

//             t.endCursor.push(r.rect(size2 - h / fi / 2, padding - 1, h / fi, h, 3 * size / 200).attr({
//                 stroke: "#F96E5B",
//                 opacity: 1,
//                 "stroke-width": w3,
                
//             }));

//             t.endCursor.push(t.endCursor[0].clone().attr({
//                 stroke: "#F96E5B",
//                 fill : "#8fd117",
//                 opacity: 1,
//                 "stroke-width": w1
//             }));

//             t.ring = r.path(["M", size2, padding, "A", R, R, 0, 1, 1, size2 - 1, padding, "l1,0M", size2, padding + size20 * 2, "A", R2, R2, 0, 1, 1, size2 - 1, padding + size20 * 2, "l1,0"]).attr({
//                 fill: "#000",
//                 opacity: 0,
//                 stroke: "none"
//             }); 

//             t.H = t.S = t.B = 1;
//             t.raphael = r;
//             t.size2 = size2;
//             t.wh = wh;
//             t.x = x;
//             t.xy = xy;
//             t.y = y;

//             t.endCursor.attr({transform: "r" + [50, t.size2, t.size2]});
            
//             t.x0 = t.startCursor[0].attr("x") + t.startCursor[0].attr("width") / 2;
//             t.y0 = t.startCursor[0].attr("y") + t.startCursor[0].attr("height") / 2;
//             t.initX0 = t.x0;
//             t.initY0 = t.y0;
//             t.R1 = (R2 + R) / 2;
//             t.x1 = t.x0 + t.R1 * Math.sin(50 * Math.PI / 180);
//             t.y1 = t.y0 + t.R1 - t.R1 * Math.cos(50 * Math.PI / 180);
//             t.initX1 = t.x1;
//             t.initY1 = t.y1;
//             var path = "M" + t.x0 + "," + t.y0 + "A" + t.R1 + "," + t.R1 + " 50 0,1 " + t.x1 + "," + t.y1;
            
//             t.arc = r.path(path)
//             .attr({
//                 stroke: "#009900",
//                 "stroke-width": 10
//             });
    

//             t.startCursor.drag(function (dx, dy, x, y) {
//                    t.docOnMove(dx, dy, x, y,'startCursor');
//                 }, function (x, y) { 
//                     t.setH(x - t.x - t.size2, y - t.y - t.size2,'startCursor');
//                 }, function () { 
                    
//             }); 

//             t.endCursor.drag(function (dx, dy, x, y) {
//                    t.docOnMove(dx, dy, x, y,'endCursor');
//                 }, function (x, y) { 
//                     t.setH(x - t.x - t.size2, y - t.y - t.size2,'endCursor');
//                 }, function () { 
                    
//             }); 

//             t.startCursor.toFront();
//             t.endCursor.toFront();
//         },
//         proto = ColorWheel.prototype;

//     proto.setH = function (x, y,cursor) {  
//         var d = Raphael.angle(x, y, 0, 0);
//         if(d > 270) {
//             d = d - 270;
//         }
//         else {
//             d = d + 90;
//         } 
         
//         if((cursor === 'startCursor' && d > this.endCursor[0]._.deg) || (cursor === 'endCursor' && d <= this.startCursor[0]._.deg)) {
//             return;
//         }

//         if(cursor === 'startCursor') {
//             this.startCursor.attr({transform: "r" + [d, this.size2, this.size2]});
//         }
//         else {
//             this.endCursor.attr({transform: "r" + [d, this.size2, this.size2]});
//         }   

//         var m = this.startCursor[0]._.deg ;
//         var n = this.endCursor[0]._.deg;
//         var t = this;        
//         var flag = 0;
        
//         if(m > 360) {
//             m = m - 360;
//             flag = 1;  
//         }

//         if( n > 360 ) {
//             n = n - 360;
//         } 
        
       
//         var diff = Math.abs(m - n); 
        
//         if (diff > 180) { 
//             flag = 1;
//         }
        
//         var path = "";
//         var sweep = 1; 

//         if(cursor === 'endCursor') { 
//             t.x1 = t.initX0 + t.R1 * Math.sin(n * Math.PI / 180);
//             t.y1 = t.initY0 + t.R1 - t.R1 * Math.cos(n * Math.PI / 180);
//         }
//         else { 
//             t.x0 = t.initX0 + t.R1 * Math.sin(m * Math.PI / 180);
//             t.y0 = t.initY0 + t.R1 - t.R1 * Math.cos(m * Math.PI / 180);
//         }
        
//         console.log(m,t.x0,t.y0,t.x1,t.y1);
        
//         path = "M" + t.x0 + "," + t.y0 + "A" + t.R1 + "," + t.R1 + " " +  diff + " " +  flag + "," + sweep + " " + t.x1 + "," + t.y1;

//         t.arc = t.arc.attr("path", path );
        
//         this.onchange(m,n,diff);
//     };

//     proto.docOnMove = function (dx, dy, x, y,cursor) {
//         this.setH(x - this.x - this.size2, y - this.y - this.size2,cursor);
        
//     };
    
// })(window.Raphael);

// window.onload = function () {
//     var cp2 = Raphael.colorwheel(60, 20, 200, "#eee");
//     var X = document.getElementById('x');
//     var Y = document.getElementById('y');
//     var angle = document.getElementById('angle');

//     cp2.onchange = function (x, y, ang) {
//         X.innerHTML = Math.round(x * 100) / 100;
//         Y.innerHTML = Math.round(y * 100) / 100;
//         angle.innerHTML = Math.round(ang * 100) / 100;
        
        
//     }
// };


//first trying
// var searchDl = 1;
// var l = 0;

// var r = Raphael(50, 50, 400, 400);

// var p = r.path("M 65 320 C -20 210, 125 190, 155 130 S 80 40, 140 5").attr({stroke: "#ddf",strokeWeight: "10"}),
//     pt = p.getPointAtLength(l);
//     e = r.ellipse(pt.x, pt.y, 4, 4).attr({stroke: "none", fill: "#0274ff"}),
//     totLen = p.getTotalLength(),


// start = function () {
//     this.ox = this.attr("cx");
//     this.oy = this.attr("cy");
//     this.attr({opacity: 1});
// },
// move = function (dx, dy) {
//     var tmpPt = {
//         x : this.ox + dx, 
//         y : this.oy + dy
//     };
//     l = gradSearch(l, tmpPt);
//     pt = p.getPointAtLength(l);
//     e.attr({cx: pt.x, cy: pt.y});
// },
// up = function () {
//     this.attr({opacity: 1});
// },
// gradSearch = function (l0, pt) {
//     l0 = l0 + totLen;
//     var l1 = l0,
//         dist0 = dist(p.getPointAtLength(l0 % totLen), pt),
//         dist1,
//         searchDir;

//     if (dist(p.getPointAtLength((l0 - searchDl) % totLen), pt) > 
//        dist(p.getPointAtLength((l0 + searchDl) % totLen), pt)) {
//         searchDir = searchDl;
//     } else {
//         searchDir = -searchDl;
//     }

//     l1 += searchDir;
//     dist1 = dist(p.getPointAtLength(l1 % totLen), pt);
//     while (dist1 < dist0) {
//         dist0 = dist1;
//         l1 += searchDir;
//         dist1 = dist(p.getPointAtLength(l1 % totLen), pt);
//     }
//     l1 -= searchDir;
    
//     return (l1 % totLen);
// },
// dist = function (pt1, pt2) {
//     var dx = pt1.x - pt2.x;
//     var dy = pt1.y - pt2.y;
//     return Math.sqrt(dx * dx + dy * dy);
// };
// e.drag(move, start, up);


// var ptwo = r.path("M 90 300 C 200 240, 85 190, 65 80 S 80 40, 140 5")
// .attr("stroke","#efefef")
// .attr("stroke-width","5");
//     pttwo = ptwo.getPointAtLength(l);
//     etwo = r.ellipse(pttwo.x, pttwo.y, 6, 6)
// 	.attr({stroke: "none", fill: "#0274ff"})
//     totLentwo = ptwo.getTotalLength(),


// starttwo = function () {
// 	etwo.oxtwo = this.attr("cx");
//     etwo.oytwo = this.attr("cy");
//     this.attr({opacity: 1});
// },
// movetwo = function (dxtwo, dytwo) {
//     var tmpPttwo = {
//         x : this.oxtwo + dxtwo, 
//         y : this.oytwo + dytwo
//     };
//     ltwo = gradSearchtwo(l, tmpPttwo);
//     pttwo = ptwo.getPointAtLength(ltwo);
// 	etwo.attr({cx: pttwo.x, cy: pttwo.y});
// },
// uptwo = function () {
//     this.attr({opacity: 1});
// },
// gradSearchtwo = function (l0, pttwo) {
//     l0 = l0 + totLentwo;
//     var l1 = l0,
//         dist0 = dist(ptwo.getPointAtLength(l0 % totLentwo), pttwo),
//         dist1,
//         searchDir;

//     if (dist(ptwo.getPointAtLength((l0 - searchDl) % totLentwo), pttwo) > 
//        dist(ptwo.getPointAtLength((l0 + searchDl) % totLentwo), pttwo)) {
//         searchDir = searchDl;
//     } else {
//         searchDir = -searchDl;
//     }

//     l1 += searchDir;
//     dist1 = dist(ptwo.getPointAtLength(l1 % totLentwo), pttwo);
//     while (dist1 < dist0) {
//         dist0 = dist1;
//         l1 += searchDir;
//         dist1 = dist(ptwo.getPointAtLength(l1 % totLentwo), pttwo);
//     }
//     l1 -= searchDir;
    
//     return (l1 % totLentwo);
// },
// dist = function (pt1, pt2) {
//     var dx = pt1.x - pt2.x;
//     var dy = pt1.y - pt2.y;
//     return Math.sqrt(dx * dx + dy * dy);
// };
// etwo.drag(movetwo, starttwo, uptwo);


var margin = {top: 0, right: 0, bottom: 0, left: 0},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;


// var npoints = 100;
var ptdata = [];
var session = [];
var path;
var drawing = false;

var output = d3.select('#output');

var line = d3.svg.line()
    .interpolate("bundle") // basis, see http://bl.ocks.org/mbostock/4342190
    .tension(1)
    .x(function(d, i) { return d.x; })
    .y(function(d, i) { return d.y; });

var svg = d3.select("#sketch").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)

svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg
  .on("mousedown", listen)
  .on("touchstart", listen)
  .on("touchend", ignore)
  .on("touchleave", ignore)
  .on("mouseup", ignore)
  .on("mouseleave", ignore);


// ignore default touch behavior
var touchEvents = ['touchstart', 'touchmove', 'touchend'];
touchEvents.forEach(function (eventName) {
  document.body.addEventListener(eventName, function(e){
    e.preventDefault();
  });  
});


function listen () {
  drawing = true;
  output.text('event: ' + d3.event.type);
  ptdata = []; // reset point data
  path = svg.append("path") // start a new line
    .data([ptdata])
    .attr("class", "line")
    .attr("d", line);

  if (d3.event.type === 'mousedown') {
    svg.on("mousemove", onmove);
  } else {
    svg.on("touchmove", onmove);
  }
}

function ignore () {
  var before, after;
  output.text('event: ' + d3.event.type);
  svg.on("mousemove", null);
  svg.on("touchmove", null);

  // skip out if we're not drawing
  if (!drawing) return;
  drawing = false;

  before = ptdata.length;
  console.group('Line Simplification');
  console.log("Before simplification:", before)
  
  // simplify
  ptdata = simplify(ptdata);
  after = ptdata.length;

  console.log("After simplification:", ptdata.length)
  console.groupEnd();

  var percentage = parseInt(100 - (after/before)*100, 10);
  output.html('Points: ' + before + ' => ' + after + '. <b>' + percentage + '% simplification.</b>');

  // add newly created line to the drawing session
  session.push(ptdata);
  
  // redraw the line after simplification
  tick();
}


function onmove (e) {
  var type = d3.event.type;
  var point;

  if (type === 'mousemove') {
    point = d3.mouse(this);
    output.text('event: ' + type + ': ' + d3.mouse(this));
  } else {
    // only deal with a single touch input
    point = d3.touches(this)[0];
    output.text('event: ' + type + ': ' + d3.touches(this)[0]);
  }

  // push a new data point onto the back
  ptdata.push({ x: point[0], y: point[1] });
  tick();
}

function tick() {
  path.attr("d", function(d) { return line(d); }) // Redraw the path:
}


// var line = d3.line()
//     .curve(d3.curveBasis);

// var svg = d3.select("svg")
//     .call(d3.drag()
//         .container(function() { return this; })
//         .subject(function() { var p = [d3.event.x, d3.event.y]; return [p, p]; })
//         .on("start", dragstarted));

// function dragstarted() {
//   var d = d3.event.subject,
//       active = svg.append("path").datum(d),
//       x0 = d3.event.x,
//       y0 = d3.event.y;

//   d3.event.on("drag", function() {
//     var x1 = d3.event.x,
//         y1 = d3.event.y,
//         dx = x1 - x0,
//         dy = y1 - y0;

//     if (dx * dx + dy * dy > 100) d.push([x0 = x1, y0 = y1]);
//     else d[d.length - 1] = [x1, y1];
//     active.attr("d", line);
//   });
// }

//second try with mouse drag and draw

// var path = document.querySelector("path");

// document.body.addEventListener("mousemove", function(evt) {
//   var xRatio = Math.min(1, evt.clientX / document.body.offsetWidth );
//   var yRatio = Math.min(1, evt.clientY / document.body.offsetHeight);
//   var red   = parseInt(255 * xRatio);
//   var green = parseInt(255 * yRatio);
//   var color = "rgb(" + red + ", " + green + ", 128)";
//   document.querySelector("path").setAttribute("fill", color);
// });




// $(function() {
//     $( "#slider-vertical-one" ).slider({
//       orientation: "vertical",
//       range: "min",
//       min: 0,
//       max: 100,
//       value: 60,
//       slide: function( event, ui ) {
//         $( "#amount" ).val( ui.value );
//       }
//     });
//     $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
//   });

//   $(function() {
//     $( "#slider-vertical-two" ).slider({
//       orientation: "vertical",
//       range: "min",
//       min: 0,
//       max: 100,
//       value: 60,
//       slide: function( event, ui ) {
//         $( "#amount" ).val( ui.value );
//       }
//     });
//     $( "#amount" ).val( $( "#slider-vertical" ).slider( "value" ) );
//   });

