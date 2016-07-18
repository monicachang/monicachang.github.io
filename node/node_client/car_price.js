$(document).ready(function(){

	$("#set-price-submit").click(function(e){
		e.preventDefault();

        $.ajax({ //call this page without refreshing page
            url: "http://localhost:3000/set_price", 
            type: "GET", //get you the value of the car price that you type in to the form so when you submit and refresh the local host page, it will show that value
            data: {
                price: $('#car-price').val()
                color: $('#car-color').val()
            }
          });
    });
});