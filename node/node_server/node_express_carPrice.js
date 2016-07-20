var express = require("express");
var app = express();

var carPrice;
var carColor;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

app.get("/", function (req, res) { //this doesn't have to do with the price stuff, it is just an example to show the usage of sending
  res.send("Hello World!"); 
});

app.get("/set_price", function(req, res){ 
    console.log(req.query.price); //puts it in the terminal upon submitting
    console.log(req.query.color);
    carPrice = req.query.price; //
    carColor = req.query.color;
});

app.get("/retrieve_price", function(req, res){ //took the variable from above and put it in the localhost:3000/retrieve_price
    res.send("The car price is: " + carPrice + " The car color is: " + carColor);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!"); //upon refresh, lets you know things are working in the terminal
});