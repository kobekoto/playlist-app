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
				.state('playlistDetail', {
					url: '/{videoId}',
					templateUrl: 'app/playlist/playlistDetail.html',
					controller: 'PlaylistDetailController',
					controllerAs: 'vm',
					params: {
						videoId: null,
						index: null
					}
				});
		}
})();
