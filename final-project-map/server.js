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
  // let userNum = 0;
  // userNum += 1;
  socket.on('client_connected', function (data) {
    data.id = socket.id;
    tab_pl[i] = data;
    socket.player = tab_pl[i];
    i++;
    console.log(tab_pl);
    socket.emit('get_all_balls', tab_pl);
    socket.emit('id_ball', socket.id);
    socket.broadcast.emit('new_ball', data);
  

  });
  socket.on('move_ball', function (data) {
	// maj the tab_pl
	var j = 0;
	while (j < tab_pl.length)
	{
	  if (tab_pl[j].id == data.id)
		tab_pl[j] = data;
	  j++;
	}
	socket.broadcast.emit('move_the_ball', data);
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
