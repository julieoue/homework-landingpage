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

}



