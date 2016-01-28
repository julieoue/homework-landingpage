$(document).ready(function() {



    $("form").submit(updatePic);
    // Entering form updates Picture 




    function updatePic() {
        event.preventDefault();
        // Entering city type into the variable 
        var city = $("#city-type").val();

        if (city == "New York" || city == "New York City" || city == "NYC") {
            $('body').removeClass().addClass("nyc");
        }
       
        else if (city == "Los Angeles " || city == "LA" || city == "LAX") {
            $('body').removeClass().addClass("la");

		}

		else if (city == "Austin" || city == "ATX" || city == "Texas") {
            $('body').removeClass().addClass("austin");

		}

		else if (city == "San Francisco" || city == "SF" || city == "Bay Area") {
            $('body').removeClass().addClass("sf");

		}

		else if (city == "Sydney" || city == "SYD") {
            $('body').removeClass().addClass(".sydney");

		}


		else {
			$('body').removeClass();
		}
	}


});

