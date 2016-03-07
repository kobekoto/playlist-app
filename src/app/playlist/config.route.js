(function() {
	'use strict';

	angular 
		.module('app.playlist')
		.config(configFunction);

		configFunction.$inject = ['$stateProvider'];

		function configFunction($stateProvider) {
			$stateProvider
				.state('/playlist', {
					url: '/',
					templateUrl: 'app/playlist/playlist.html'
				});
		}
})();