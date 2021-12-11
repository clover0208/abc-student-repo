let startbt = document.getElementById("startbt");
let ring = document.getElementById("ring");
let introVideo = document.getElementById("introVideo");


let key = document.getElementById("key");
let text = document.getElementById("text");
let zone = document.getElementById("zone");
let myball = document.getElementById("myball");
let lightball = document.getElementById("lightball");

	var ball = '';


var skip = document.getElementById("skip");

startbt.addEventListener("click", () => {
  introVideo.play();
  startbt.style.display = "none";
  setTimeout(() => {
    introVideo.style.display = "none";
  }, 50000);
});

skip.addEventListener("click", function(e) {
	introVideo.pause();
  startbt.style.display = "none";
  introVideo.style.display = "none";
  key.style.display = 'block';
    text.style.display = 'block';
    zone.style.display = 'block';
    myball.style.display = 'block';
  // lightball.style.display = 'block';
  skip.style.display = "none";
})



  // const timeout = document.getElementsByClassName('classname')
  setTimeout(hideElement, 50000) //milliseconds until timeout//
  function hideElement() {
    key.style.display = 'block';
    text.style.display = 'block';
    zone.style.display = 'block';
    myball.style.display = 'block';
    
  }

function mapValue(n, start1, stop1, start2, stop2){
	return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
}

window.onscroll = function() {
  window.scrollTo(0, 0);
};

jQuery(function($) {
  let d;

  let rightPressed = false;
  let leftPressed = false;
  let upPressed = false;
  let downPressed = false;

  let stepX = Math.random() * 1000;
  let stepY = Math.random() * 500;

  // let ballX=Math.random()*1000;
  // let ballY=Math.random()*500;

  start(name);

  function start(name) {
    document.addEventListener("keydown", keyDown);
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    var cl = "rgb(255,255,255)";

    var pos = document.getElementById("zone").getBoundingClientRect();

    var pl = {
      id: 0,
      name: name,
      cl: cl,
      x: stepX,
      y: stepY,
      room: 0
    };

    var ball = "";

    let socket = io();

    socket.on("connect", function() {
      socket.emit("client_connected", pl);
    });

    socket.on("id_ball", function(id) {
      pl.id = id;
      // console.log(id)
    });

    socket.on("get_all_balls", function(tab_pl) {
      $("#zone").html("");
      var i = 0;
      var bl;

      pos = document.getElementById("zone").getBoundingClientRect();

      while (i < tab_pl.length) {
        bl = tab_pl[i];

        $("#zone").append(ball);
        socket.on("id_ball", function(id) {
          pl.id = id;
          ball =
            '<div id="' +
            bl.id +
            '" class="ball" style="left:' +
            bl.x +
            "px;top:" +
            bl.y +
            'px;display:none"></div>';
          if (bl.id !== pl.id) {
            $("#" + bl.id).css("display", "block");
          }
        });

        i++;
      }

      let peopleimg;
      peopleimg =
        '<div class="peopleimg" style="left:200px;top:200px;"><img src = "https://cdn.glitch.me/9d7a3970-4112-4922-9066-7534f7d4eae8%2Fbigmap%202.png?v=1638987173422" width="6000px "/><img id="lightball" src = "https://cdn.glitch.me/9d7a3970-4112-4922-9066-7534f7d4eae8%2Flight-ball.gif?v=1638986854642" width="100px "/></div>';

      $("#zone").append(peopleimg);
    });

    var user = [];

    socket.on("new_ball", function(data) {
      pos = $("#zone").position();

      user.push(data.id);
      console.log(data.id);
      console.log(user);

      let ball =
        '<div id="' +
        data.id +
        '" class="ball" style="background-color:' +
        data.cl +
        ';left:100px;top:100px; display:block;"></div>';
      // }
      if (user.length == 2) {
        $("#" + user[0]).css("display", "none");
      }

      $("#zone").append(ball);
    });

    socket.on("move_the_ball", function(data) {
      // if (data.id !== pl.id) {
      $("#" + data.id).animate(
        {
          left: data.x,
          top: data.y
        },
        100,"linear"
      );
      //        }

	  let hello=false;

      if (d >= 600) {
        // $("#zone").css("opacity", "0.5");
		hello=true;
        // myball.style.animation = "arrive 2s 5";
        console.log("found");
      }

	  if(hello==true){

        myFunction()
      window.location.href = "/secret?word=paperclip";
      console.log("click gift")


  }

  function myFunction() {
	var person = prompt("Congratulation!!Enter your name please", "");
	if (person != null) {
	console.log(person)
	// let gift = person;
	
	fetch("/gift?gift="+person+"finished");
	
	
	}
	}

      function move_ball(x, y) {
        pl.x = x;
        pl.y = y;
        // if(data.id!==pl.id){

        // };

        //pl is me
        socket.emit("move_ball", pl);
      }
    });

    function move_ball(x, y) {
      pl.x = x;
      pl.y = y;

      socket.emit("move_ball", pl);

      $("#zone").animate(
        {
          left: -29 + x,
          top: -1290 + y
        },
         100,"linear"
      );
      
      let temp_d = (x - 1300) ** 2 + (y - 300) ** 2;
      d = Math.sqrt(temp_d);
      // d.mapValue(d,0, 3000, 100, 300);
      console.log(d);
      
//       function divHeight(value)
// {
    // var x = document.getElementById('div1');
    myball.style.width= mapValue(d,0, 5000, 100, 300)+"px"; 
    myball.style.height= mapValue(d,0, 5000, 100, 300)+"px"; 

      
    }
    
    
    

    function keyDown(e) {
      ring.play();
      document.getElementById("key").style.display = "none";
      if (e.key == "Right" || e.key == "ArrowRight") {
        stepX -= 50;
        move_ball(stepX, stepY);
        // console.log("hello")
      } else if (e.key == "Left" || e.key == "ArrowLeft") {
        stepX += 50;
        move_ball(stepX, stepY);
      } else if (e.key == "Up" || e.key == "ArrowUp") {
        stepY += 50;
        move_ball(stepX, stepY);
      } else if (e.key == "Down" || e.key == "ArrowDown") {
        stepY -= 50;
        move_ball(stepX, stepY);
      }
    }
  }
});