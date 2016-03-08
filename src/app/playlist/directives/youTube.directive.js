(function() {
	'use strict';

	angular
		.module('app.playlist')
		.directive('youtube', youTubePlayer);

		console.log('hey!');

	youTubePlayer.$inject = ['$window'];	

	function youTubePlayer($window) {
		return {
			templateUrl: 'app/playlist/directives/youTubePlayer.html',
			restrict: 'E'
			
		};
	}

	function youTubeController() {
		var vm = this;
	}


})();