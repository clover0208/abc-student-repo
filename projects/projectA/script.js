(function (Raphael) {
    Raphael.colorwheel = function (x, y, sizetwo,initcolor, element) {
        return new ColorWheel(x, y, sizetwo,initcolor, element);
    };
    var pi = Math.PI,
        doc = document,
        win = window,
        ColorWheel = function (x, y, sizetwo, initcolor, element) {
            sizetwo=400
            size = 200 || 200;
            var w3 = 3 * size / 200,
                w1 = size / 200,
                fi = 1.6180339887,
                segments = 3,//pi * size / 50,
                size20 = size / 20,
                size2 = size / 2,
                padding = 2 * size / 200,
                t = this;

            var H = 1, S = 1, B = 1, s = size - (size20 * 4);
            var r = element ? Raphael(element, sizetwo, sizetwo) : Raphael(x, y, sizetwo, sizetwo),
                xy = s / 6 + size20 * 2 + padding,
                wh = s * 2 / 3 - padding * 2;
            w1 < 1 && (w1 = 1);
            w3 < 1 && (w3 = 1);

            // ring drawing
            var a = pi / 2 - pi * 2 / segments * 1.3,
                R = size2 - padding,
                R2 = size2 - padding - size20 * 2,
                path = ["M", size2, padding, "A", R, R, 0, 0, 1, R * Math.cos(a) + R + padding, R - R * Math.sin(a) + padding, "L", R2 * Math.cos(a) + R + padding, R - R2 * Math.sin(a) + padding, "A", R2, R2, 0, 0, 0, size2, padding + size20 * 2, "z"].join();
            for (var i = 0; i < segments; i++) {
                r.path(path).attr({
                    stroke: "none",
                    fill: "#8fd117",
                    transform: "r" + [(360 / segments) * i, size2, size2]
                });
            }

            r.path(["M", size2, padding, "A", R, R, 0, 1, 1, size2 - 1, padding, "l1,0", "M", size2, padding + size20 * 2, "A", R2, R2, 0, 1, 1, size2 - 1, padding + size20 * 2, "l1,0"]).attr({
                "stroke-width": w3,
                stroke: "#fff"
            });
 
            
            t.startCursor = r.set();
            var h = size20 * 2 + 2;

            t.startCursor.push(r.rect(size2 - h / fi / 2, padding - 1, h / fi, h, 3 * size / 200).attr({
                stroke: "#00A0C6",
                opacity: 1,
                "stroke-width": w3
            }));
            t.startCursor.push(t.startCursor[0].clone().attr({
                stroke: "#00A0C6",
                fill : "#8fd117", 
                opacity: 1,
                "stroke-width": w1
            }));
 
            t.endCursor = r.set();
            var h = size20 * 2 + 2;

            t.endCursor.push(r.rect(size2 - h / fi / 2, padding - 1, h / fi, h, 3 * size / 200).attr({
                stroke: "#F96E5B",
                opacity: 1,
                "stroke-width": w3,
                
            }));

            t.endCursor.push(t.endCursor[0].clone().attr({
                stroke: "#F96E5B",
                fill : "#8fd117",
                opacity: 1,
                "stroke-width": w1
            }));

            t.ring = r.path(["M", size2, padding, "A", R, R, 0, 1, 1, size2 - 1, padding, "l1,0M", size2, padding + size20 * 2, "A", R2, R2, 0, 1, 1, size2 - 1, padding + size20 * 2, "l1,0"]).attr({
                fill: "#000",
                opacity: 0,
                stroke: "none"
            }); 

            t.H = t.S = t.B = 1;
            t.raphael = r;
            t.size2 = size2;
            t.wh = wh;
            t.x = x;
            t.xy = xy;
            t.y = y;

            t.endCursor.attr({transform: "r" + [50, t.size2, t.size2]});
            
            t.x0 = t.startCursor[0].attr("x") + t.startCursor[0].attr("width") / 2;
            t.y0 = t.startCursor[0].attr("y") + t.startCursor[0].attr("height") / 2;
            t.initX0 = t.x0;
            t.initY0 = t.y0;
            t.R1 = (R2 + R) / 2;
            t.x1 = t.x0 + t.R1 * Math.sin(50 * Math.PI / 180);
            t.y1 = t.y0 + t.R1 - t.R1 * Math.cos(50 * Math.PI / 180);
            t.initX1 = t.x1;
            t.initY1 = t.y1;
            var path = "M" + t.x0 + "," + t.y0 + "A" + t.R1 + "," + t.R1 + " 50 0,1 " + t.x1 + "," + t.y1;
            
            t.arc = r.path(path)
            .attr({
                stroke: "#009900",
                "stroke-width": 10
            });
    

            t.startCursor.drag(function (dx, dy, x, y) {
                   t.docOnMove(dx, dy, x, y,'startCursor');
                }, function (x, y) { 
                    t.setH(x - t.x - t.size2, y - t.y - t.size2,'startCursor');
                }, function () { 
                    
            }); 

            t.endCursor.drag(function (dx, dy, x, y) {
                   t.docOnMove(dx, dy, x, y,'endCursor');
                }, function (x, y) { 
                    console.log(y - t.y - t.size2)
                    t.setH(x - t.x - t.size2, y - t.y - t.size2,'endCursor');
                }, function () { 
                    
            }); 

            t.startCursor.toFront();
            t.endCursor.toFront();
        },
        proto = ColorWheel.prototype;

    proto.setH = function (x, y,cursor) {  
        var d = Raphael.angle(x, y, 0, 0);
        if(d > 180) {
            d = d - 180;
        }
        else {
            d = d + 90;
        } 
         
        if(cursor === 'startCursor' && d > this.endCursor[0]._.deg) {
            return;
        }

        if(cursor === 'startCursor') {
            this.startCursor.attr({transform: "r" + [d, this.size2, this.size2]});
        }
        else {
            this.endCursor.attr({transform: "r" + [d, this.size2, this.size2]});
        }   

        var m = this.startCursor[0]._.deg ;
        var n = this.endCursor[0]._.deg;
        var t = this;        
        var flag = 0;
        var sweep = 1; 
                
        var path = "";
        if (n < m) {
           m += 360;
        } 
        
        var diff = Math.abs(m - n); 
        
        if (diff > 180) { 
            flag = 1;
        }

        if(cursor === 'endCursor') { 
            t.x1 = t.initX0 + t.R1 * Math.sin(n * Math.PI / 180);
            t.y1 = t.initY0 + t.R1 - t.R1 * Math.cos(n * Math.PI / 180);
        }
        else { 
            t.x0 = t.initX0 + t.R1 * Math.sin(m * Math.PI / 180);
            t.y0 = t.initY0 + t.R1 - t.R1 * Math.cos(m * Math.PI / 180);
        }
        
        //console.log(m,t.x0,t.y0,t.x1,t.y1);
        console.log(t.x1)
        if(t.x1>100){
        path = "M" + t.x0 + "," + t.y0 + "A" + t.R1 + "," + t.R1 + " " +  diff + " " +  flag + "," + sweep + " " + t.x1 + "," + t.y1;
        }
        if(t.x1<100){
            path = "M" + t.x0 + "," + t.y0 + "A" + t.R1 + "," + t.R1 + " " +  diff + " " +  flag + "," + sweep + " " + t.x1 + "," + t.y1*2;
        }

        t.arc = t.arc.attr("path", path );
        
        this.onchange(m,n,diff);
    };

    proto.docOnMove = function (dx, dy, x, y,cursor) {
       
        this.setH(x - this.x - this.size2, y - this.y - this.size2,cursor);
       
       
        
    };
    
})(window.Raphael);





window.onload = function () {
    var cp2 = Raphael.colorwheel(20, 20, 200, 400);
    var X = document.getElementById('x');
    var Y = document.getElementById('y');
    var angle = document.getElementById('angle');

    cp2.onchange = function (x, y, ang) {
        X.innerHTML = Math.round(x * 100) / 100;
        Y.innerHTML = Math.round(y * 100) / 100;
        angle.innerHTML = Math.round(ang * 100) / 100;
        
        
    }
};