(function() {
	'use strict';

	angular
		.module('app.playlist')
		.controller('PlaylistController', PlaylistController);

	function PlaylistController() {
		var vm = this;

		vm.playlist = 'Litty';
	}

})();
