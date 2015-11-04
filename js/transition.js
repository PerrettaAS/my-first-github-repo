var id = " ";

$('document').ready(function(){
	id = ".gallary";
	$(".resume-content").fadeOut();
	$(".slideshow").cycle({
        timeout:5000,
        fx: 'fade',
	});
});

$(".navbar .home").click(function () {
	fadeEffect(".page-content .gallary");
});

$(".resume").click(function () {
	fadeEffect(".resume-content");
});

function fadeEffect(newId) {
	$(id).fadeOut('slow', function() {
		$(id).css("visibility", "hidden");
	 	id = newId;
	 	$(id).css("visibility", "visible");
	 	$(id).fadeIn();
	});
}