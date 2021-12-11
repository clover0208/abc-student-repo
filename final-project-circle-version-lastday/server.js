let express = require('express');
let app = express();
let http = require('http').createServer(app);
const port = process.env.PORT
let io = require('socket.io')(http);
const secret = "paperclip";

let gifts = [];

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//new
app.get('/secret', (request, response) => {
  // console.log(request);
  let query = request.query;
  let guess = query.word;
  console.log(query);
  if(guess == secret){
    console.log("let them into the garden");
    response.redirect("/garden");
    // response.sendFile(__dirname + '/public/garden/index.html')
  }else{
    console.log("something is fishy");
    // response.sendFile(__dirname + '/public/fishy/index.html')
    response.redirect("/fishy");
  }
  console.log("--------")
  // res.sendFile(__dirname + '/index.html')
})

app.get('/gift', (request, response) => {
  // console.log(request);
  let query = request.query;
  let gift = query.gift;
  gifts.push(gift)
  console.log("received:", gift);
  console.log("all the things I have:", gifts);
  console.log("--------")

})
app.get('/getGifts', (request, response) => {
  console.log("someone asks for gifts");
  response.json( {content: gifts, sender: "the garden gods"} );
  console.log("--------");


})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//new


var tab_pl = [];
var i = 0;
var allUser=[];


io.sockets.on('connection', function (socket) {
  let userNum = 0;
  
 
  socket.on('client_connected', function (data) {
    data.id = socket.id;
    tab_pl[i] = data;
   
    allUser.push(socket.id)
    // console.log(tab_pl[1])
    // room=data.room;
    var user=[];
    user.push(data.id);
   
    socket.player = tab_pl[i];
    i++;
    userNum = i;
    // console.log("userNum"+userNum)

    let roomtwo=parseInt((userNum-1)/2) 
    // console.log("room " +roomtwo)
      // room+=1;
    // console.log("room",roomtwo)
    socket.join(roomtwo);
    io.sockets.to(roomtwo).emit('number', userNum);
    
    io.sockets.to(roomtwo).emit('get_all_balls', tab_pl);
    io.sockets.to(roomtwo).emit('id_ball', socket.id);
    io.sockets.to(roomtwo).emit('new_ball', data);
    console.log(socket.id)
     io.sockets.emit('ids', allUser);
    // socket.broadcast..emit('new_ball', data);
    
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
  let roomtwo=parseInt((tab_pl.length-1)/2) 
  // console.log(roomtwo)
  io.sockets.to(roomtwo).emit('move_the_ball', data);
  });

//   socket.on('disconnect', function () {
//     var j = 0;
//     var n = 0;
//     var tmp = [];

//     while (n < tab_pl.length) {
//         if (tab_pl[j].id == socket.id)
// 			n++;
// 		if (n < tab_pl.length) {
// 	  	    tmp[j] = tab_pl[n];
// 	  	    j++;
// 	  		n++;
// 	  	 }
// 	}
// 	tab_pl = tmp;
// 	i = j;
//   let roomtwo=parseInt((i-1)/2) 
//   // console.log(roomtwo)
  
// 	io.sockets.emit('get_all_balls', tab_pl);
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
  let roomtwo=parseInt((j-1)/2) 
	
  tab_pl = tmp;
	i = j;
	socket.broadcast.emit('get_all_balls', tab_pl);
  //  io.sockets.to(roomtwo).emit('get_all_balls', tab_pl);   

  });
  
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
console.log("Server working on http://localhost:8080");