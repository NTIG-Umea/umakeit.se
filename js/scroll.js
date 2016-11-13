$(document).ready(function() {

	// #links smooth scroll
	$('a').click(function() {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1500);
		return false;
	});
	// End of smooth scroll

});
