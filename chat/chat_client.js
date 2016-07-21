$(document).ready(function() {

	var socket = io("http://localhost:3000"); //connect to the server or "pizza place"
	var wordSearch;

	$("#chat-start").click(function(){//when you refresh the page, enter your username, and click the start chatting button, you will get your past conversation
		$.ajax({
		url: "http://localhost:3000/get_archive", //call this url
		success: function(data){ //on success pass the data
			$('#chat-log ul li').remove(); //taking all the data deleted it, and repopulating it using the append function
			for(var i=0;i<data.length;i++) //when we have the data, increment like this
			{
				var msg = data[i]; //set msg to each thing in the data
				if(msg.username == $("#chat-name").val()) //see if username in chat equals name in data field
				{
					$("#chat-log ul").append("<li class='me-line'><b>" + msg.username +  "</b>: <i>" + msg.text + "</i></li>"); //use ul because it's in the ul
				}else{
					$("#chat-log ul").append("<li class='them-line'><b>" + msg.username +  "</b>: <i>" + msg.text + "</i></li>");

				}	
			}
		}
	});

	});
	

	$("#chat-form").submit(function(){
		var messageObject = {};
		messageObject.username = $("#chat-name").val();
		messageObject.text = $("#chat-input").val();

		socket.emit("chat message", messageObject); //the function is to emit a command called chat message (we get to name this command "chat message") and along with that command attach some information to it (the value)//"chat message is let the server know that it's going to be a message"
		$("#chat-input").val(""); //empties the box when you hit enter
		return false; //prevents from refreshing page		

		e.preventDefault();
				wordSearch = $("#chat-input").val()
				//console.log($("#chat-input").val());

				$.ajax({
					url: "https://api.spotify.com/v1/search",
					data: {
						q: wordSearch,
						type: "track",
						limit: "25"
					},
					success: ajaxHandler
				});
		});

	function ajaxHandler(data)
		{
			console.log(data);

			var results = data.tracks.items; //array of albums items (nested objects)
			for(var i = 0; i < results.length; i++) //interate through each item in array of albums
			{
				$("#api_result").append(results[i].name + "\n"); //change the .name to .id would give you the ids of the albums instead of the names
			}
		}

	});

	socket.on('chat message', function(msg){ //when we get an event called chat message, run the following function w/ parameter called msg and append to our list that message
		if(msg.username == $("#chat-name").val())
			{
				$("#chat-log ul").append("<li class='me-line'><b>" + msg.username +  "</b>: <i>" + msg.text + "</i></li>"); //use ul because it's in the ul
			}else{
				$("#chat-log ul").append("<li class='them-line'><b>" + msg.username +  "</b>: <i>" + msg.text + "</i></li>");

			}	

	}); 

});