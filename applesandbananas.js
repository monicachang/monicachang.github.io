$(document).ready(function() {



	$("#learn").hover(function(){
	$("#learnheading").animate({color: "black"}, 1200);
	},
	function(){
		$("#learnheading").stop().animate({color:"white"});
	});


	$("#verse1").hover(function() {
	    $(this).animate({color:"#a90000"}, 1000);
	}, function() {
	    $(this).animate({color:"white"}, 1000);
	});



	


	$("#verse2").hover(function() {
	    $(this).animate({color:"#ad0000"}, 1000);
	}, function() {
	    $(this).animate({color:"white"}, 1000);
	});

	$("#verse3").hover(function() {
	    $(this).animate({color:"#b20000"}, 1000);
	}, function() {
	    $(this).animate({color:"white"}, 1000);
	});

	$("#verse4").hover(function() {
	    $(this).animate({color:"#b60000"}, 1000);
	}, function() {
	    $(this).animate({color:"white"}, 1000);
	});

	$("#verse5").hover(function() {
		$(this).animate({color:"#ba0000"}, 1000);
	}, function() {
		$(this).animate({color:"white"}, 1000);
	});

	$("#verse6").hover(function() {
		$(this).animate({color:"#be0000"}, 1000);
	}, function() {
		$(this).animate({color:"white"}, 1000);
	});




	$("#dropdownrecipes").change(function(){
			alert($(this).val());
		});

	$("#verse1apple").click(function() {
		$(this).animate({top: "+=450", left: "+=50"}, 1000);
		$(this).animate({top: "-=380", left: "+=60"}, 1000);
		$(this).animate({top: "+=380", left: "+=70"}, 1000);
		$(this).animate({top: "-=285", left: "+=81"}, 1000);
		$(this).animate({top: "+=285", left: "+=92"}, 1000);
		$(this).animate({top: "-=140", left: "+=104"}, 1000);
		$(this).animate({top: "+=140", left: "+=116"}, 1000);
		$(this).animate({top: "-=60", left: "+=129"}, 1000);
		$(this).animate({top: "+=60", left: "+=143"}, 1000); 
	});
});


function toggleSound1() {

  var audioElem = document.getElementById("audio1");

  if (audioElem.paused) {
    audioElem.play();
	document.getElementById("listenbutton").value="||";
	}
  else {
    audioElem.pause();
	document.getElementById("listenbutton").value="LISTEN";
	}
}

function toggleSoundA() {

  var audioElem = document.getElementById("audioA");

  if (audioElem.paused) {
    audioElem.play();
	document.getElementById("buttonA").value="||";
	}
  else {
    audioElem.pause();
	document.getElementById("buttonA").value="A";
	}
}

function toggleSoundE() {

  var audioElem = document.getElementById("audioE");

  if (audioElem.paused) {
    audioElem.play();
	document.getElementById("buttonE").value="||";
	}
  else {
    audioElem.pause();
	document.getElementById("buttonE").value="E";
	}
}

function toggleSoundI() {

  var audioElem = document.getElementById("audioI");

  if (audioElem.paused) {
    audioElem.play();
	document.getElementById("buttonI").value="||";
	}
  else {
    audioElem.pause();
	document.getElementById("buttonI").value="I";
	}
}

function toggleSoundO() {

  var audioElem = document.getElementById("audioO");

  if (audioElem.paused) {
    audioElem.play();
	document.getElementById("buttonO").value="||";
	}
  else {
    audioElem.pause();
	document.getElementById("buttonO").value="O";
	}
}

function toggleSoundU() {

  var audioElem = document.getElementById("audioU");

  if (audioElem.paused) {
    audioElem.play();
	document.getElementById("buttonU").value="||";
	}
  else {
    audioElem.pause();
	document.getElementById("buttonU").value="U";
	}
}
/*function toggleSound() {

  var audioElem = document.getElementById("audioA");
  if (audioElem.paused) {
    audioElem.play();
	document.getElementById("buttonA").value="||";
	}
  else {
    audioElem.pause();
	document.getElementById("buttonA").value="A";
	}
}*/


