(function() {
	'use strict';

	angular
		.module('app.playlist')
		.controller('PlaylistController', PlaylistController);

	PlaylistController.$inject = ['playlistService'];

	function PlaylistController(playlistService) {
		var vm = this;

		playlistService.getPlaylistInfo()
			.then(function(data) {
				console.log(data.items[0].snippet);
				console.log(data.items);
				vm.playlistData = data.items;
			})
			.catch(function(error) {
				console.log(error);
			});
	}

})();
