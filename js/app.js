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
			this.options
		);
	}
};

/**
 * Profil utilisateur
 */
Poc.Profil = {
	takePhoto: function() {
		Poc.Photo.takePicture(Poc.Profil.savePhoto);
	},
	savePhoto: function(imageURI) {
		// TODO: on la sauve qq part (en plus de l'afficher) ?
		$('#photo').attr("src", imageURI);
	}

}