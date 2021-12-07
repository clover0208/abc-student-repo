window.onscroll = function () { window.scrollTo(0, 0); };
jQuery(function ($) {


	let d;

	let rightPressed = false;
	let leftPressed = false;
	let upPressed = false;
	let downPressed = false;



	let stepX = Math.random() * 1000;
	let stepY = Math.random()*500;

 	// let ballX=Math.random()*1000;
	// let ballY=Math.random()*500;



	start(name);

	function start(name) {

		document.addEventListener("keydown", keyDown);
		var r = Math.round(Math.random() * 255);
		var g = Math.round(Math.random() * 255);
		var b = Math.round(Math.random() * 255);
		var cl = 'rgb(255,255,255)';


		var pos = document.getElementById('zone').getBoundingClientRect();



		var pl = {
			id: 0,
			name: name,
			cl: cl,
			x: stepX,
			y: stepY,
			room:0
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
			$('#zone').html('');
			var i = 0;
			var bl;


			// while (i < tab_pl.length) {
			// var quo = Math.floor(i/3);
			// if(quo==0){

			// }
			// }


			pos = document.getElementById('zone').getBoundingClientRect();

			while (i < tab_pl.length) {
				bl = tab_pl[i];
				
				// console.log(pl.id)
				console.log(bl.id)
				console.log(typeof bl.id);
				
		

				$('#zone').append(ball);
				socket.on('id_ball', function (id) {
		
					pl.id = id;
					ball = '<div id="' + bl.id + '" class="ball" style="left:' + bl.x+ 'px;top:' +  bl.y+'px;display:none"></div>';
					if (bl.id !== pl.id) {
						$('#' + bl.id).css("display", "block");
						
					}
				});

				i++;
				//let d;
				// if(tab_pl.length>1){
				// 	console.log("0:",tab_pl[0]);
				// 	let tempX=tab_pl[0].x;
				// 	let tempY=tab_pl[0].y;
				// 	let tempD=(tempX-stepX)**2+(tempY-stepY)**2;
				// 	d=Math.sqrt(tempD);
				// 	console.log('d:',d);
				//
				//
				// }


			}

			let peopleimg;
			peopleimg = '<div class="peopleimg" style="left:200px;top:200px;"><img src = "wholepage.png" width="3000px "/></div>';

			$('#zone').append(peopleimg);
		});

		socket.on('new_ball', function (data) {
			pos = $('#zone').position();
			let ball = '<div id="' + data.id + '" class="ball" style="background-color:' + data.cl + ';left:' +data.x + 'px;top:' +data.y+ 'px; display:block;"></div>';

			$('#zone').append(ball);
		});



		socket.on('move_the_ball', function (data) {

			$('#' + data.id).animate({
				'left': data.x,
				'top': data.y
			}, 200);







		});




		function move_div(x, y) {

			pl.x = x
			pl.y = y;

			//pl is me
			socket.emit('move_ball', pl);


			$('#zone').animate({
				'left': 300-x,
				'top': 300-y
			}, 200);

		}


		function keyDown(e) {
			if (e.key == "Right" || e.key == "ArrowRight") {
				stepX += 50;
				move_div(stepX, stepY)
console.log("hello")
			}
			else if (e.key == "Left" || e.key == "ArrowLeft") {
				stepX -= 50;
				move_div(stepX, stepY)


			}
			else if (e.key == "Up" || e.key == "ArrowUp") {
				stepY -= 50;
				move_div(stepX, stepY)
			}
			else if (e.key == "Down" || e.key == "ArrowDown") {
				stepY += 50;
				move_div(stepX, stepY)

			}
		}






	}
});
