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

});



function play(myVowels){
       var audio = document.getElementById(myVowels);
       audio.play();
   }




function toggleSound() {

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



