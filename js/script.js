$( document ).ready(function() {
	$(".content-block").hide().each(function(i) {
		$(this).delay(i * 400).fadeIn(800);
	});
});
