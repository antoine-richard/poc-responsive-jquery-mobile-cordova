/**
* App initialization
*/
$(function() {

	// event binding

	$(document).on('click', '.take-photo', function() {
		Poc.Profile.takePhoto();
		return false;
	});

	$('.side-list a').on('click', function() {
		var isSmallScreen = window.matchMedia("(max-width: 599px)").matches;
		Poc.Profile.display($(this).attr('id'), isSmallScreen);
		return isSmallScreen;
	});
	
});