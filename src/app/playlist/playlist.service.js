(function() {
	'use strict';

	angular
		.module('app.playlist')
		.factory('playlistService', playlistService);

	playlistService.$inject = ['PLAYLIST_URL', '$http'];

	function playlistService(PLAYLIST_URL, $http) {
		var savedData = { };

		var service = { 
			getPlaylistInfo: getPlaylistInfo
		};

		return service;

		function getPlaylistInfo() {
			
			var promise = $http.get(PLAYLIST_URL)
				.then(function(response) {
					console.log(response.data);
					savedData = response.data;
					return savedData;
				});
			return promise;
		}

	}

})();
