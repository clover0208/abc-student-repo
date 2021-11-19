const express = require('express');
const app = express();
let http = require('http').createServer(app);
// const server = app.listen(5100);
const io = require('socket.io')(http);

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let players = {};

io.on('connection', connected);



//listening to events after the connection is estalished
function connected(socket){
    socket.on('newPlayer', data => {
        console.log("New client connected, with id: "+socket.id);
        players[socket.id] = data;
        console.log("Starting position: "+players[socket.id].x+" - "+players[socket.id].y);
        console.log("Current number of players: "+Object.keys(players).length);
        console.log("players dictionary: ", players);
        io.emit('updatePlayers', players);
    })
    socket.on('disconnect', function(){
        delete players[socket.id];
        console.log("Goodbye client with id "+socket.id);
        console.log("Current number of players: "+Object.keys(players).length);
        io.emit('updatePlayers', players);
    })

    socket.on('userCommands', data => {
     players[socket.id]=data;

     socket.broadcast.emit('commandUpdate',players);

    })

    socket.on('command', data => {
     players[socket.id]=data;


    console.log("Starting position: "+players[id].down+" - "+players[socket.id].y);

    })
    // socket.on('commandUpdate', data => {
    //   players[socket.id]=data;
    //   console.log("current position: "+players[socket.id].x+" - "+players[socket.id].y);
    // })

    socket.on('ClientClientHello', data => {
        socket.broadcast.emit('ServerClientHello', data);
    })
}

http.listen(3000, () => {
  console.log('listening on *:3000');
});
