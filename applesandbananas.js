$(document).ready(function() {



	$("#learn").hover(function(){
	$("#learn").animate({color: "black"}, 1200);
},
	function(){
		$("#learn").stop().animate({color:"white"});
});





$("#verse1").hover(function() {
    $(this).animate({color:"black"}, 1500);
}, function() {
    $(this).animate({color:"white"}, 1500);
});

$("#verse2").hover(function() {
    $(this).animate({color:"black"}, 1500);
}, function() {
    $(this).animate({color:"white"}, 1500);
});

$("#verse3").hover(function() {
    $(this).animate({color:"black"}, 1500);
}, function() {
    $(this).animate({color:"white"}, 1500);
});

$("#verse4").hover(function() {
    $(this).animate({color:"black"}, 1500);
}, function() {
    $(this).animate({color:"white"}, 1500);
});

$("#verse5").hover(function() {
	$(this).animate({color:"black"}, 1500);
}, function() {
	$(this).animate({color:"white"}, 1500);
});

$("#verse6").hover(function() {
	$(this).animate({color:"black"}, 1500);
}, function() {
	$(this).animate({color:"white"}, 1500);
});





$("#dropdownrecipes").change(function(){
		alert($(this).val());
	});


});

function play(myVowels){
       var audio = document.getElementById(myVowels);
       audio.play();

       $("#myVowels").click(function() {
    if (audio.paused == false) {
        audio.pause();
        //alert('music paused');
    } else {
        audio.play();
        //alert('music playing');
    }
});
}

/*$('.player_audio').click(function() {
    if ($('.player_audio').paused == false) {
        $('.player_audio').pause();
        alert('music paused');
    } else {
        $('.player_audio').play();
        alert('music playing');
    }
});*/

