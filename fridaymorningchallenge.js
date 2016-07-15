$(document).ready(function() {

	//I like to eat, eat, eat, apples and bananas.
/*var str = "I like to eat, eat, eat, apples and bananas.";

var spans = '<span>' + str.split(/\s+/).join(' </span><span>') + '</span>';

$(spans).click()hide().appendTo('body').each(function(i) {
    $(this).delay(1000 * i).fadeIn();
});*/
	
$("#next-color").click(function() {
	//rgb(0-255, 0-255, 0-255);

	var randomRed = generateRandomColor();
	var randomGreen = generateRandomColor();
	var randomBlue = generateRandomColor();

	var randomColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
	$("#rhyme2").css({"background-color":randomColor});

	});





var line = "I like to eat, eat, eat, apples and bananas.";

var lineArray = line.split(" ");

var currentWordNum = 0;


 $("#next-word").click(function() {
 	$("#word").text(lineArray[currentWordNum]);
 	currentWordNum++;
 	if(currentWordNum == lineArray.length) 
 	{
 		currentWordNum = 0;
 	}
 	e.preventDefault();
 	
});





});

function generateRandomColor() 
{
 	return Math.round(Math.random() * 255);
}










 
 	