// html starts here:

<div id="container">
			
	</div>




// css starts here

#container
{
	position: absolute;
}

.block
{
	width: 100px;
	height: 100px;
	position: absolute; //so the blocks go to the same position rather than stacking up next to each other
	display: none; // it's invisible
	background-color: black;
}




// javascript starts here:

return; // prevents you from running whats after

var n = 0; // hold a place for a number, and make it equal zero at first

$(document).ready(function(){ // when [the] document [is] ready
	for(var i=0;i<10;i++) // start a loop. 1. start at 0. 2) go until ten. 3) increment by one
	{ //denote what to do in the loop
		$("#container").append("<div class='block'></block>"); //take the container, appending a div, with the class "block". 
		var block = $(".block").last(); //hold a place. make it equal to the most recently added block. 
		moveBlockRight(block) // call the "move the block right" function and pass the most recently added block
});

function moveBlockRight(block) // defines the function
{
	n++;100% //incrementing n (which is the block count)
	block.fadeIn(500).delay(1000*n).animate({"left":"500px"}); 
	//take the most recently added block
	//make it visible (over half a second)
	//wait for one second per block count
	//move the block right by 500px
}


