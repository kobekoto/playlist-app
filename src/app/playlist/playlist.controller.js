(function() {
	'use strict';

	angular
		.module('app.playlist')
		.controller('PlaylistController', PlaylistController);

	PlaylistController.$inject = ['playlistService'];

	function PlaylistController(playlistService) {
		var vm = this;

		vm.playlist = 'Litty';
	}

})();
