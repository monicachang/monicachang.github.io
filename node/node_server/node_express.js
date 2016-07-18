var express = require('express'); //accessing a module called express
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!, I\'m here!');
});

app.get('/goodbye', function (req, res) { //if you type /goodbye after localhost:3000, you will get the words in this function
  res.send('Goodbye World! I\'m leaving!');
});

app.get('/bananas', function (req, res) { //when we get bananas we get all these things
	var responseText = ""; //empty variable

	responseText += "Did you now? Bananas are amazing!<br>"; //added something into it
	responseText += "Nom Nom Nom";
	responseText += "<img src='http://www.theartofdoingstuff.com/wp-content/uploads/2013/03/Banana.jpg'>" //added something else into it

  res.send(responseText); //pushed it, take this

  console.log('I just told them how awesome bananas are.');
});

app.listen(3000, function () { //port 3000
  console.log('Example app listening on port 3000!'); //this is running on an invisible browser on our terminal, so console.log prints on terminal
});