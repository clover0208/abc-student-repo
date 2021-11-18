const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  //all we want to do with client we do it here
  console.log('a user connected',socket.id);


    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      io.emit('messageFromSomeone',msg);
    });

    socket.on('disconnect', () => {
    console.log('user disconnected');
  });



});

server.listen(3200, () => {
  console.log('listening on *:3200');
});
