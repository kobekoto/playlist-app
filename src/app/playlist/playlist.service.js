(function() {
	'use strict';

	angular
		.module('app.playlist')
		.factory('playlistService', playlistService);

	playlistService.$inject = ['PLAYLIST_URL', '$http'];

	function playlistService(PLAYLIST_URL, $http) {

		var service = { 
			getPlaylistInfo: getPlaylistInfo
		};

		var promise = $http.get(PLAYLIST_URL)
				.then(function(response) {
					console.log(response);
				});


		return service;

		function getPlaylistInfo() {
			var promise = $http.get(PLAYLIST_URL)
				.then(function(response) {
					console.log(response);
				});
		}

	}

})();
