let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


var tab_pl = [];
var i = 0;


io.sockets.on('connection', function (socket) {
  let userNum = 0;
  
 
  socket.on('client_connected', function (data) {
    data.id = socket.id;
    tab_pl[i] = data;
    // room=data.room;
   
    socket.player = tab_pl[i];
    i++;
    userNum = i;
    // console.log("userNum"+userNum)

    roomtwo=parseInt((userNum-1)/3) 
    // console.log("room " +roomtwo)
      // room+=1;
      console.log("room",roomtwo)
    socket.join(roomtwo);
    io.sockets.to(roomtwo).emit('get_all_balls', tab_pl);
    io.sockets.to(roomtwo).emit('id_ball', socket.id);
    io.sockets.to(roomtwo).emit('new_ball', data);
    
  // });
  
// }
  });
  socket.on('move_ball', function (data) {
	// maj the tab_pl
	var j = 0;
	while (j < tab_pl.length)
	{
	  if (tab_pl[j].id == data.id)
		tab_pl[j] = data;
	  j++; 
    // let roomtwo=parseInt((tab_pl.length-1)/3) 
    // data.room=roomtwo;
    
    // console.log("j " +j)
	
  }
  // room=data.room;
  roomtwo=parseInt((tab_pl.length-1)/3) 
  console.log(roomtwo)
  io.sockets.to(roomtwo).emit('move_the_ball', data);
  });

  socket.on('disconnect', function () {
    var j = 0;
    var n = 0;
    var tmp = [];

    while (n < tab_pl.length) {
        if (tab_pl[j].id == socket.id)
			n++;
		if (n < tab_pl.length) {
	  	    tmp[j] = tab_pl[n];
	  	    j++;
	  		n++;
	  	 }
	}
	tab_pl = tmp;
	i = j;
  
	socket.broadcast.emit('get_all_balls', tab_pl);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
console.log("Server working on http://localhost:8080");
