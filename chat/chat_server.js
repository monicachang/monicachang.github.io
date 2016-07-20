var express = require("express");
var app = express();
var http = require('http').Server(app); //we need to go to the restaurant first to access stuff so we can have efficient exchanges
var io = require('socket.io')(http);

var chatArchive = [];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

app.get("/", function (req, res) { // the "/" is just localhost:3000, with no extra stuff
  res.send("Hello, bonjour, buenos dias");
});


io.on('connection', function(socket){ //let the library (io) listen for this connection//call that connection socket (when connection starts work with something called socket)
	console.log("New Client Connection");
	socket.on("chat message", function(msg){ //now we have th socket connection, let's listen for anything to happen: when we get an event called chat message, do this function 
		chatArchive.push(msg); //add messages to array //now every message that comes into the system will be logged into the array 
		io.emit('chat message', msg); //note: socket listens to message //io used to emit the event
	});
});

app.get('/get_archive', function(req, res){ //when somebody pins the url /get_archive (request to get archive)
	res.send(chatArchive); //we want to use the response to send the chat archive 
});

http.listen(3000, function () {
  console.log("Example app listening on port 3000!"); // console log to the terminal
});