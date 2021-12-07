
window.onscroll = function () { window.scrollTo(0, 0); };
jQuery(function ($) {

	//keyup
	let d = 0;

	let rightPressed = false;
	let leftPressed = false;
	let upPressed = false;
	let downPressed = false;



	let stepX = 200;
	let stepY = 200;

	//key


	start(name);

	function start(name) {

		document.addEventListener("keydown", keyDown);
		var r = Math.round(Math.random() * 255);
		var g = Math.round(Math.random() * 255);
		var b = Math.round(Math.random() * 255);
		var cl = 'rgb(0,0,0)';


		var pos = document.getElementById('zone').getBoundingClientRect();



		var pl = {
			id: 0,
			name: name,
			cl: cl,
			x: stepX,
			y: stepY
		};

		var ball = '';

		let socket = io();

		socket.on('connect', function () {
			socket.emit('client_connected', pl);
		});

		socket.on('id_ball', function (id) {
			pl.id = id;
		});
		// List of all connected players' hash move the picture
		socket.on('get_all_balls', function (tab_pl) {

			document.getElementById("zone").innerHTML = '';
			var i = 0;
			var bl;
			pos = document.getElementById('zone').getBoundingClientRect();
			while (i < tab_pl.length) {
				bl = tab_pl[i];
				ball = '<div id="' + bl.id + '" class="ball" style="left:' + (pos.left + bl.x) + 'px;top:' + (pos.top + bl.y) + 'px;"><img src = "house.png" /></div>';
				// console.log("blone",bl)
				var elems = document.getElementsByClassName('ball');
				for (var i = 0; i < elems.length; i += 1) {
					elems[i].style.display = 'block';
					elems[i].style.width = "30px"
				}
				$('#zone').append(ball);
				i++;
			}
		});

		socket.on('new_ball', function (data) {
			pos = document.getElementById('zone').getBoundingClientRect();
			ball = '<div id="' + data.id + '" class="ball" style="left:' + (pos.left + data.x) + 'px;top:' + (pos.top + data.y) + 'px;"><img src = "house.png" /></div>';
			console.log("dataid", data)
			//ball.style.zIndex = "-1";
			var elemss = document.getElementsByClassName('ball');
			for (var i = 0; i < elemss.length; i += 1) {
				elemss[i].style.display = 'block';
			}
			$('#zone').append(ball);
		});

		socket.on('move_the_ball', function (data) {
			pos = document.getElementById('zone').getBoundingClientRect();
			$('#' + data.id).animate({
				'left': pos.left + data.x,
				'top': pos.top + data.y
			}, 200);
		});




		function move_ball(x, y) {
			pl.x = x
			pl.y = y;
			console.log(pos.left, pos.top)
			socket.emit('move_ball', pl);
			console.log(pl.x, pl.y)
			$('#' + pl.id).animate({
				'left': x,
				'top': y
			}, 200);

		}


		function keyDown(e) {
			if (e.key == "Right" || e.key == "ArrowRight") {
				stepX += 50;
				move_ball(stepX, stepY)

			}
			else if (e.key == "Left" || e.key == "ArrowLeft") {
				stepX -= 50;
				move_ball(stepX, stepY)


			}
			else if (e.key == "Up" || e.key == "ArrowUp") {
				stepY -= 50;
				move_ball(stepX, stepY)
			}
			else if (e.key == "Down" || e.key == "ArrowDown") {

				stepY += 50;
				move_ball(stepX, stepY)

			}
		}





	}
});
