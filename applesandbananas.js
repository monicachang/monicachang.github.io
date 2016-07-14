$(document).ready(function() {
$("#verse3").hover(function() {
    $(this).animate({"color":"black"}, "slow");
}, function() {
    $(this).animate({"color":"white"}, "slow");
});

});


function play(myVowels){
       var audio = document.getElementById(myVowels);
       audio.play();
       
}
