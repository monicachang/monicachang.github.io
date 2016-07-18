$(document).ready(function() {



	$("#learn").hover(function(){
	$("#learnheading").animate({color: "black"}, 1200);
	},
	function(){
		$("#learnheading").stop().animate({color:"white"});
	});


	/*$("#verse1").hover(function() {
	    $(this).animate({color:"#a90000"}, 1000);
	}, function() {
	    $(this).animate({color:"white"}, 1000);
	});*/

	var audioElem = document.getElementById("audio1");
	$("#verse1apple").click(function() {
		audioElem.play();
		$("#clickme").hide();
		$(this).fadeOut(5000);
		$("#verse1").animate({color:"#ffffff"}, 4600);
		$("#verse1").animate({color:"#000000"}, 450);
		$("#verse1").animate({color:"#b50000"}, 450);
		$("#verse1").animate({color:"#ffffff"}, 450);
		$(this).animate({left: "+=105", top:"+=43"}, 2500);
		$(this).fadeIn(500);
		$(this).fadeOut(35);
		$(this).animate({left: "+=200"}, 650);
		$(this).fadeIn(500);
		$(this).fadeOut(1500);
		$("#verse1").animate({backgroundColor: "#009000" }, 6500);
		$("#verse1").animate({backgroundColor: "#b50000" }, 450);
		$("#verse1").animate({backgroundColor: "#000000" }, 450);
		$("#verse1").animate({backgroundColor: "#009000" }, 450);
		$(this).animate({left: "-=190", top:"+=105"}, 4800);
		$(this).fadeIn(500);
		$(this).fadeOut(35);
		$(this).animate({left: "+=200"}, 650);
		$(this).fadeIn(500);
		$(this).fadeOut(1500);
		$(this).animate({left: "-=315", top:"-=148"}, 500);
		$(this).fadeIn(500);
		
	});

	$("#verse1apple").mouseover(function() {
		$(this).css("opacity", "1");
	});
	$("#verse1apple").mouseleave(function() {
		$(this).css("opacity", "0.75");
	});


	$("#verse2").hover(function() {
	    $(this).animate({color:"#ad0000"}, 800);
	}, function() {
	    $(this).animate({color:"white"}, 800);
	});

	$("#verse3").hover(function() {
	    $(this).animate({color:"#b20000"}, 800);
	}, function() {
	    $(this).animate({color:"white"}, 800);
	});

	$("#verse4").hover(function() {
	    $(this).animate({color:"#b60000"}, 800);
	}, function() {
	    $(this).animate({color:"white"}, 800);
	});

	$("#verse5").hover(function() {
		$(this).animate({color:"#ba0000"}, 800);
	}, function() {
		$(this).animate({color:"white"}, 800);
	});

	$("#verse6").hover(function() {
		$(this).animate({color:"#be0000"}, 800);
	}, function() {
		$(this).animate({color:"white"}, 800);
	});




	$("#dropdownrecipes").change(function(){
			alert($(this).val());
		});

});



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


