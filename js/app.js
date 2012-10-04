/** Namespace POC */
var Poc = Poc || {};

/**
 * Pilotage de l'appareil photo
 */
Poc.Photo = {
	options: {
		quality: 75, 
		destinationType: Camera.DestinationType.FILE_URI,
		allowEdit: true,
		encodingType: Camera.EncodingType.JPEG,
		targetWidth: 100,
		targetHeight: 100,
		mediaType: Camera.MediaType.PICTURE,
		saveToPhotoAlbum: false
	},
	takePicture: function(successCallback) {
		navigator.camera.getPicture(
			function success(imageURI) { 		// Note: le nommage de la fonction ici ne sert à rien, sauf à la lisibilité
				successCallback(imageURI);
			},
			function error(){ 					// Note: le nommage de la fonction ici ne sert à rien, sauf à la lisibilité
				//TODO : appeler ici un handler d'erreur global
			},
			Poc.Photo.options
		);
	}
};

/**
 * Profil utilisateur
 */
Poc.Profile = {
	takePhoto: function() {
		Poc.Photo.takePicture(Poc.Profile.savePhoto);
	},
	savePhoto: function(imageURI) {
		// TODO: la sauver dans les Data
		$('.photo').attr("src", imageURI);
	},
	display: function(colleagueId, isSmallScreen) {
		var colleague = Poc.Data[colleagueId];
		$('.photo').attr('src', 'img/photo-placeholder.jpg'); // default
		$('#colleague-profile-content .title').text(colleague.title);
		$('#colleague-profile-content .age').text(colleague.age);
		if (isSmallScreen) $('#colleague-name').text(colleague.name);
		$(isSmallScreen ? '#colleague-profile-page-container' : '#colleague-profile-side-container').html($('#colleague-profile-content').html());
	}
}
