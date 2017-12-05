$(document).ready(function() {
	console.log('track')
	// Add facebook tracking event
	$('.fb_track').click(function(event) {
		event.preventDefault();
		var linkElement = $(this);
		var url = linkElement.data('href');
		fbq('track', 'Lead');
		var win = window.open(url, '_blank');
		win.focus();
	});	
});
