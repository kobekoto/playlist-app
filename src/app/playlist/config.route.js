(function() {
	'use strict';

	angular 
		.module('app.playlist')
		.config(configFunction);

		configFunction.$inject = ['$stateProvider'];

		function configFunction($stateProvider) {
			$stateProvider
				.state('playlist', {
					url: '/',
					templateUrl: 'app/playlist/playlist.html',
					controller: 'PlaylistController',
					controllerAs: 'vm'
				})
				.state('videoDetail', {
					url: '/{id}',
					templateUrl: 'app/playlist/videoDetail.html',
					controller: 'videoDetailController',
					controllerAs: 'vm'
				});
		}
})();
