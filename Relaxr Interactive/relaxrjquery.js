// ND: So obviously this is working, but it's good practice to encase your code
// in the document.ready function to make sure your DOM elements load before your
//JS file 

$('.readmore').click(slideDown);

function slideDown () {
	event.preventDefault();
	$("#readlesstag").removeClass("hide");
	$("#show-this-on-click").removeClass("hide");
}

$('.readless').click(slideUP);

function slideUP () {
	event.preventDefault();
	$("#readlesstag").addClass("hide");
	$("#show-this-on-click").addClass("hide");
}



$('.learnmore').click(slideDown2);

function slideDown2 () {
	event.preventDefault();
	$("#learnmoretext").removeClass("hide2");
	$(".learnmore").addClass("hide2")
// ND: Got an extra space here you don't need.
}

// ND: So how would you get the learnmore text to no longer display?

 // ND: Nice work, your app is functional. To take it to the next level, try combining your slideDown
 // functions and use an if statment based on what was clicked. The tighter your code, the better
