let socket = io();
console.log("hello")


var form = document.getElementById('form');
var input = document.getElementById('input');
var messages = document.getElementById('messages');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
      socket.emit('chat message', input.value);
      input.value = '';
    }
  });

  socket.on('messageFromSomeone', function(msg) {
      var item = document.createElement('li');
      item.textContent = msg;
      messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    });
