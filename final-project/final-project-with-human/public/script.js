window.onscroll = function () { window.scrollTo(0, 0); };
let ring=document.getElementById("ring");
jQuery(function ($) {

  let d=0;

let rightPressed=false;
let leftPressed=false;
let upPressed=false;
let downPressed=false;



let stepX=200;
let stepY=200;



	start(name);

	function start(name) {

document.addEventListener("keydown", keyDown);
		var r = Math.round(Math.random() * 255);
		var g = Math.round(Math.random() * 255);
		var b = Math.round(Math.random() * 255);
		var cl = 'rgb(255,255,255)';


		var pos = document.getElementById('black').getBoundingClientRect();



		var pl = {
			id : 0,
			name : name,
			cl : cl,
			x : stepX,
			y : stepY
		};

		var ball = '';

    let socket = io();

		socket.on('connect', function () {
				socket.emit('client_connected', pl);
		});

		socket.on('id_ball', function (id) {
				pl.id = id;
		});
		socket.on('get_all_balls', function (tab_pl) {
				$('#black').html('');
				var i = 0;
				var bl;
				pos = document.getElementById('black').getBoundingClientRect();
				while (i < tab_pl.length)
			{
					bl = tab_pl[i];
					ball = '<div id="'+bl.id+'" class="ball" style="background-color:'+bl.cl+';left:'+(pos.left + bl.x)+'px;top:'+(pos.top + bl.y)+'px;"><img src = "human.png" /></div>';

					
					
					
					var elems = document.getElementsByClassName('ball');
					for (var i=0;i<elems.length;i+=1){
						elems[i].style.display = 'block';
						elems[i].style.width = "30px"
					  }
					
					
					$('#black').append(ball);
					i++;
				
			}
		});

		socket.on('new_ball', function (data) {
			pos = $('#black').position();
			ball = '<div id="'+data.id+'" class="ball" style="background-color:'+data.cl+';left:'+(pos.left + data.x)+'px;top:'+(pos.top + data.y)+'px;"><img src = "human.png" "/></div>';
			
		var elemss = document.getElementsByClassName('ball');
		for (var i=0;i<elemss.length;i+=1){
			elemss[i].style.display = 'block';
		  }
			$('#black').append(ball);
		});

		socket.on('move_the_ball', function (data) {

			 var duration = Math.round($('#duration').val());
			 pos = $('#black').position();
			 $('#'+data.id).animate({
			'left' : pos.left + data.x,
			'top' : pos.top + data.y
		}, 500);
		
		// console.log(pos.left+data.x,pos.top + data.y)
		// console.log(stepX,stepY)

			 let temp_d=(pos.left+data.x-stepX)**2+(pos.top + data.y-stepY)**2;
            d=Math.sqrt(temp_d);
	        console.log(d)

			if(d<=400){
				
				document.getElementsByClassName('people')[0].style.opacity = '1';
				var board = document.createElement('div');
				board.className = "Custom";
				console.log("count");
				document.getElementById('black').appendChild(board);
				board.style.left=(pos.left+data.x+stepX)/2+'px';
				document.getElementsByClassName('Custom')[0].style.top=(pos.top + data.y+stepY)/2+'px';
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

	
	




		function move_ball(x, y)
		{

			var duration = Math.round($('#duration').val());

            pl.x = x
			pl.y = y;
			socket.emit('move_ball', pl);
		
			// console.log(x, y)
			

			$('#'+pl.id).animate({
		 'left' : x,
			'top' : y
    }, 500);
	
		}



	});

// 	 let temp_d=(spotX-stepX)**2+(spotY-stepY)**2;
//      d=Math.sqrt(temp_d);
//      let k=200/d;
//      if(k>0 && k<1){
//      ring.volume=200/d;

//     }
//     else if (k<=0){
//       ring.volume=0;

//     }
//     else if(k>=1){
//      ring.volume=1;

//  }
function move_ball(x, y)
{

	var duration = Math.round($('#duration').val());

	pl.x = x
	pl.y = y;
	socket.emit('move_ball', pl);

	// console.log(x, y)
	

	$('#'+pl.id).animate({
 'left' : x,
	'top' : y
}, 500);

}
function keyDown(e){
	if(e.key == "Right" || e.key == "ArrowRight"){
		stepX+=50;

	   move_ball(stepX, stepY)

	 }
	 else if(e.key == "Left" || e.key == "ArrowLeft"){
  stepX-=50;
  
 move_ball(stepX, stepY)



}
else if(e.key == "Up" || e.key == "ArrowUp"){

stepY-=50;
 move_ball(stepX, stepY)
}
else if(e.key == "Down" || e.key == "ArrowDown"){


stepY+=50;

 move_ball(stepX, stepY)
}
   }

}
});
