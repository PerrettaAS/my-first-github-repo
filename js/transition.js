var id = " ";

$('document').ready(function(){
	id = ".gallary";
	$(".resume-content").fadeOut();
	$(".portfolio-content").fadeOut();
	$(".contact-content").fadeOut();
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

$(".portfolio").click(function () {
	fadeEffect(".portfolio-content");
});

$(".contact").click(function () {
	fadeEffect(".contact-content");
});

function fadeEffect(newId) {
	$(id).fadeOut('slow', function() {
		$(id).css("visibility", "hidden");
	 	id = newId;
	 	$(id).css("visibility", "visible");
	 	$(id).fadeIn();
	});
}