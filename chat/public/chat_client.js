$(document).ready(function() {

	var socket = io(); //connect to the server or "pizza place"

		var d = new Date();
		var milliseconds = d.getTime(); //the number of milliseconds since midnight January 1, 1970
		//console.log(milliseconds);
		var timezonediffminutes = d.getTimezoneOffset(); // difference between UTC time and local time
		var seconds = milliseconds / 1000;
		var minutes = seconds / 60 - timezonediffminutes; //this is where I account for the time zone difference and gives you local time
		var hours = minutes / 60;
		var days = hours / 24;
		var years = days / 365;
		var hourstoday = Math.floor(hours) - Math.floor(days)*24;
		var minutestoday = Math.floor(minutes) - Math.floor(hours)*60;
		
		if (minutestoday < 10)
		{
			minutestoday = "0" + minutestoday;
		}

		var time;
		if (hourstoday == 0)
		{
			time = "12" + ":" + minutestoday + " am";
		}else if (hourstoday >= 1 && hourstoday < 12) 
		{
			time = hourstoday + ":" + minutestoday + " am";
		}else if (hourstoday == 12)
		{
			time = "12" + ":" + minutestoday + " pm";
		}else
		{
			time = (hourstoday - 12) + ":" + minutestoday + " pm";
		}



	$("#chat-start").click(function(){//when you refresh the page, enter your username, and click the start chatting button, you will get your past conversation
		$.ajax({
		url: "get_archive", //call this url
		success: function(data){ //on success pass the data
			$('#chat-log ul li').remove(); //taking all the data deleted it, and repopulating it using the append function
			for(var i=0;i<data.length;i++) //when we have the data, increment like this
			{
				var msg = data[i]; //set msg to each thing in the data
				if(msg.username == $("#chat-name").val()) //see if username in chat equals name in data field
				{
					$("#chat-log ul").append("<li class='me-line'><b>" + msg.username +  "</b>: <i>" + msg.text + " (" + time + ")</i></li>"); //use ul because it's in the ul
				}else{
					$("#chat-log ul").append("<li class='them-line'><b>" + msg.username +  "</b>: <i>" + msg.text + " (" + time + ")</i></li>");

				}	
			}
		}
	});

	});


	$("#chat-form").submit(function(){
		var messageObject = {};
		messageObject.username = $("#chat-name").val();
		messageObject.text = $("#chat-input").val();

				var messagesplit = messageObject.text.split(" ");
				var lastword = messagesplit[messagesplit.length - 1]
				var numberofwords = messagesplit.length;
				var buttoncolorchange = messagesplit.length * 25;
				//console.log(lastword);

				
				//$("#api-text ul").text("");

				$.ajax({
					url: "https://api.spotify.com/v1/search",
					data: {
						q: lastword /*+ "%20tag:hipster"*/, //what you are searching up in spotify
						type: "track", //the type of thing you are searching up in spotify
						limit: numberofwords //how many results 
					},
					success: ajaxHandler
				});

		socket.emit("chat message", messageObject); //the function is to emit a command called chat message (we get to name this command "chat message") and along with that command attach some information to it (the value)//"chat message is let the server know that it's going to be a message"
		$("#chat-input").val(""); //empties the box when you hit enter
		$("#sendbutton").css("background-color", "rgb("+buttoncolorchange+",200,180)");
		$("#chat-name").css("color", "rgb("+buttoncolorchange+",200,180)");
		$("#chat-start").css("color", "rgb("+buttoncolorchange+",200,180)");
		$("#chat-log ul li.them-line").css("background-color", "rgb("+buttoncolorchange+",200,180)");
		$("#chat-input").css("color", "rgb("+buttoncolorchange+",200,180)");
		$("#chat-input").css("border-color", "rgb("+buttoncolorchange+",200,180)");
		return false; //prevents from refreshing page			

		});

	function ajaxHandler(data)
		{
			console.log(data);	

			var results = data.tracks.items; //array of track items (nested objects)
			
			if (results.length == 0) //if (results[1].popularity > 10, no hister tracks found)
			{	
				$("#api-text ul").append("<li>NO RESULTS FOUND</li>");
				return false; //if empty do not bother with for loop
			}	


			for(var i = 0; i < results.length; i++) //interate through each item the array
			{
				//console.log(Math.round(results[i].popularity*2.55));
				var resultcolor = Math.round(results[i].popularity*25.5);
					if (results[i].popularity < 10)
				{
					$("#api-text ul").append("<li class='popularitycolor' style=color:rgb("+resultcolor+",200,180)>" + results[i].name + " | " + results[i].artists[0].name + " | " + results[i].popularity + "</li>");
				}
			}
		}
	

		

	socket.on('chat message', function(msg){ //when we get an event called chat message, run the following function w/ parameter called msg and append to our list that message

		if(msg.username == $("#chat-name").val())
			{
				$("#chat-log ul").append("<li class='me-line'><b>" + msg.username +  "</b>: <i>" + msg.text + " (" + time + ")</i></li>"); //use ul because it's in the ul
			}else{
				$("#chat-log ul").append("<li class='them-line'><b>" + msg.username +  "</b>: <i>" + msg.text + " (" + time + ")</i></li>");
			}	

	}); 

});
