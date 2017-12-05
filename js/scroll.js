$(document).ready(function() {

	// #links smooth scroll
	$('a').click(function() {
		if($(this).attr('href')){
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top
			}, 1500);
			return false;
		}
		
	});
	// End of smooth scroll


	function scrollToAnchor(aid){
		$('html, body').animate({
			scrollTop: aid.offset().top
		}, 1500);
	};

	var i = 0;
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
			position = $(window).scrollTop();
			header_cutoff = 50;
			footer_cutoff = 300;
			if (position <= header_cutoff) {
				$('#nav').css('height', '12%');
				$('#up-arrow').css('bottom', '-60px');
			}
			else {
				$('#nav').css('height', '3%');
				$('#up-arrow').css('bottom', '10px');
				$('#up-arrow').css('color', '#ffffff');
			}
		});

});
