$(document).ready(function(){

	$("#summary").hide();

	$("input").focus(function(){ //when it gains focus do the following //input allows it to apply to all of the ids
		$(this).css({"background-color": "#FF6699"});
	});

	$("input").blur(function(){ //when it gains focus do the following
		$(this).css({"background-color": "inherit"});
	});

	$("#user-happy").click(function(){
		if($(this).is(":checked"))
		{
			$("#smiley").text("B-)");
			// $(this).parent().append(""); //fieldset is the parent so we want to add the smiley face in there //span makes the smiley face stay in line with the checkbox as opposed to underneath like div would do
		}else{
			$("#smiley").text("3-("); 
		}
	});

	$("#user-country").change(function(){
		alert($(this).val());
	});

	$("#form-submit").click(function(e){

		e.preventDefault(); //prevents the default refresh after submitting the form

		$("#summary").fadeIn();

		$("#name-result").text($("#user-name").val());
		$("#email-result").text($("#user-email").val());

		if($("user-happy").is(":checked"))
		{
			$("#happy-result").text("are");
		}else{
			$("#happy-result").text("aren't");
		}

		var countryVal = $("#user-country").val();
		var countryName = $("#user-country option[value='" + countryVal + "']").text(); //to find the text option that goes with the value result
		$("#country-result").text(countryName);
	});
});