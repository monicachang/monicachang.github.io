var num = require("numeral"); // importing the "numeral" module (you can search up what it does
var express = require("express"); // importing the "express" module
var app = express(); //creates a placeholder for referencing the express functionality

var carPrice = 12000; //setting carPrice starting value

app.get("/", function(req, res){ //when the server is told to get the root path, do the following function
    console.log("Returning current price: " + num(carPrice).format('0,0')); //prints starting price in the terminal, formatted with commas 
    res.send("<div style='text-align:center;font-size:20px;margin-top:50px;'>The current car price is<br>" + num(carPrice).format('0,0')+"</div>"); //sends the text to the localhost:3000/ page
}); // close the function for the event handler

app.get("/add", function(req, res){ //when the server is told to get the root path "/add", do the function
    carPrice += 250; // add 250 to the car price 
    confirmCarPriceChange(res); // pass the response to the function (calls a function and passes it to the response object): refer to the function defined below, which says that "Adjusted Car Price" will be printed to terminal and you will see the text followed by car price printed at localhost:3000/add
});

app.get("/subtract", function(req, res){ //there is receiving and getting? when the server is told to get the root path "/add", do the function
    carPrice -= 250; //subtract 250 from the car price
    confirmCarPriceChange(res); // pass the response to the function (calls a function and passes it to the response object): refer to the function defined below, which says that "Adjusted Car Price" will be printed to terminal and you will see the text followed by car price printed at localhost:3000/add
});

app.listen(3000, function () { //listen to the port 3000, so that when we go to the server address on port 3000, we send what is requested
  console.log("Example app listening on port 3000!"); //upon refresh, lets you now it is working in the terminal
});


function confirmCarPriceChange(res)
{
  console.log("Adjusted car price"); //prints this text to terminal that you are adjusting the price 
  res.send("<div style='text-align:center;font-size:20px;margin-top:50px;'>Thank you. See current price <a href='/'>here.</a></div>"); //shows the text in parentheses to the page at whatever link the function is under
}