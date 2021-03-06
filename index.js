var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

io.on('connection', function(socket){
  socket.on('requestTitle', function(title){
    console.log('title: ' + title);
  });
});

io.on('connection', function(socket){
  socket.on('requestQuestion', function(question){
    console.log('question: ' + question);
  });
});
