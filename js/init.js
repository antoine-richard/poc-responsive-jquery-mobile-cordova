/**
* App initialization
*/
$(function() {

	// event binding
	$('#take-photo').on('click', function() {
		Poc.Profil.takePhoto();
		return false;
	});

});