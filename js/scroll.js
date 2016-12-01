$(document).ready(function() {

	// #links smooth scroll
	$('a').click(function() {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1500);
		return false;
	});
	// End of smooth scroll


	function scrollToAnchor(aid){
		$('html, body').animate({
			scrollTop: aid.offset().top
		}, 1500);
	};

	var i = 1;
		$(document).keydown(function (event) {
			if (event.keyCode == 38) {
				i--;
				scrollToAnchor($('#section'+i+''));
			} else if (event.keyCode == 40) {
				i++;
				event.preventDefault();
				scrollToAnchor($('#section'+i+''));
			}
		});

		// Smooth header transition
		$(document).scroll(function() {
			var nav = $('#nav'),
			height = $(window).scrollTop(),
			max = $('#section2').height() -10;
				if (height <= max) {
					nav.css('height', '12%');
				} else {
					nav.css('height', '6%');
				}
		});

});
