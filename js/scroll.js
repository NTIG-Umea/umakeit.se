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
		},1500);
	}

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

/*	// Fixed header after scroll
   $(document).scroll(function() {
      var nav = $("#nav"),
            height = $(window).scrollTop();
      if(height >= ) {
         nav.addClass('fixed');
      }else {
         nav.removeClass('fixed');
      }
   });
   // End of fixed header
*/
});
