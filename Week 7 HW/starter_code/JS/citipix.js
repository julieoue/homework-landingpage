$(document).ready(function() {

// When you click on a city in the scroll down have it show a picture

$("form").click(changeImage);

//click a scroll item changes Image

function changeImage() {
	 event.preventDefault();



var city = $("#city-type").val();

 if (city == "NYC" ) {
            $('body').removeClass().addClass("nyc");
        }

	


});
