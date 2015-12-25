$(document).ready(function() {
	$(".portfolio-content").hide();
	$(".resume-content").hide();
	$(".contact-content").hide();
	$(".home-content .content-block").hide().each(function(i) {
		$(this).delay(i * 250).fadeIn(800);
	});
});

currentActivePage = "home";

$("#home, #portfolio, #resume, #contact").click(function(event) {
	$("." + currentActivePage + "-content").fadeOut(500, function() {
		var clicked = event.target.id;
		$("#" + currentActivePage + "").removeClass("active");
		$("." + clicked + "-content").fadeIn(0);
		$("." + clicked + "-content .content-block").hide().each(function(i) {
			$(this).delay(i * 250).fadeIn(800);
		});
		var activePage = document.getElementById(clicked);
		console.log(activePage.id);
		activePage.className = activePage.className + " active";
		currentActivePage = clicked;
	});
});
