(function() {
	'use strict';

	angular
		.module('app.playlist')
		.controller('PlaylistDetailController', PlaylistDetailController);

	PlaylistDetailController.$inject = ['playlistService', '$stateParams'];

	function PlaylistDetailController(playlistService, $stateParams) {
		
		var vm = this;
		console.log($stateParams);

	}

})();