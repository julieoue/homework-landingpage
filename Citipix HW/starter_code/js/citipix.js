/*
 * Hi Julie!  I am adding feedback about your code in Javascript comments like this one.
 *
 * Overall, fantastic job!!  The page functions perfectly and your code below is very well 
 * formatted and indented.  The only code style comment that I have is to make sure you stay 
 * consistent with the number of new lines between bits of your code.
 */

$(document).ready(function() {



    $("form").submit(updatePic);
    // Entering form updates Picture 
    // Great use of comments here ^^



    function updatePic() {

        /*
         * Great use of event.preventDefault().  Don't forget to pass the "event" argument to the 
         * function definition in the line above (to fix issues with some browsers, like we
         * discussed in class):
         *
         *  function updatePic(event) {
         */

        event.preventDefault();
        // Entering city type into the variable 
        var city = $("#city-type").val();

        if (city == "New York" || city == "New York City" || city == "NYC") {
            // Great use of chaining jQuery functions!
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

