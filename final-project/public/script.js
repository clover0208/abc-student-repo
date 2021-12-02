

jQuery(function ($) {

  //keyup
  let d=0;

let rightPressed=false;
let leftPressed=false;
let upPressed=false;
let downPressed=false;



let stepX=200;
let stepY=200;

//key


	start(name);

	function start(name) {

document.addEventListener("keydown", keyDown);
		var r = Math.round(Math.random() * 255);
		var g = Math.round(Math.random() * 255);
		var b = Math.round(Math.random() * 255);
		var cl = 'rgb('+r+','+g+','+b+')';


		var pos = document.getElementById('zone').getBoundingClientRect();



		var pl = {
			id : 0,
			name : name,
			cl : cl,
			x : 250,
			y : 250
		};

		var ball = '';

    let socket = io();

		socket.on('connect', function () {
				socket.emit('client_connected', pl);
		});

		socket.on('id_ball', function (id) {
				pl.id = id;
		});
		// List of all connected players' hash
		socket.on('get_all_balls', function (tab_pl) {
				$('#zone').html('');
				var i = 0;
				var bl;
				pos = document.getElementById('zone').getBoundingClientRect();
				while (i < tab_pl.length)
			{
					bl = tab_pl[i];
					ball = '<div id="'+bl.id+'" class="ball" style="background-color:'+bl.cl+';left:'+(pos.left + bl.x)+'px;top:'+(pos.top + bl.y)+'px;"><div style="font-size:10px;position:absolute;margin-top:25px;width:50px;text-align:center;margin-left:-14px;"><b>'+bl.name+'</b></div><div class="chat"></div></div>';
console.log("blone",bl)
					$('#zone').append(ball);
					i++;
			}
		});

		socket.on('new_ball', function (data) {
			pos = $('#zone').position();
			ball = '<div id="'+data.id+'" class="ball" style="background-color:'+data.cl+';left:'+(pos.left + data.x)+'px;top:'+(pos.top + data.y)+'px;"><div style="font-size:10px;position:absolute;margin-top:25px;width:50px;text-align:center;margin-left:-14px;"><b>'+data.name+'</b></div><div class="chat"></div></div>';
console.log("dataid",data)
			$('#zone').append(ball);
		});

		socket.on('move_the_ball', function (data) {

			 var duration = Math.round($('#duration').val());
			 pos = $('#zone').position();
			 $('#'+data.id).animate({
			'left' : pos.left + data.x,
			'top' : pos.top + data.y
		}, 500);
		});




		function move_ball(x, y)
		{
			var duration = Math.round($('#duration').val());

			// pos = $('#zone').position();

			// pl.x = x - pos.left;
			// pl.y = y - pos.top;
            pl.x = x
			pl.y = y;
      console.log(pos.left,pos.top)
			socket.emit('move_ball', pl);
			console.log(pl.x,pl.y)
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
  //box.style.transform = "translateY("+stepY+"px)";
  stepY+=50;
   move_ball(stepX, stepY)

}
     }





	}
});
