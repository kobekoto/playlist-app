(function() {
	'use strict';

	angular
		.module('app.playlist')
		.directive('youtube', youTubePlayer);

	youTubePlayer.$inject = ['$window'];	
	function youTubeController() {
		var vm = this;
	}


})();