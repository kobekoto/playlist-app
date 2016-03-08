(function() {
    'use strict';

    angular
        .module('app.playlist')
        .controller('videoDetailController', videoDetailController);

    videoDetailController.$inject = ['playlistService', '$stateParams'];

    function videoDetailController(playlistService, $stateParams) {

        var vm = this;

        vm.video = null;
        vm.invalidId = false;
        vm.load = load;

        function load() {
            playlistService.getVideo($stateParams.id)
                .then(function(video) {
                    if (angular.isObject(video)) {
                        vm.video = video;
                    } else {
                        vm.invalidId = true;
                    }
                });
        }

        vm.load();


    }

})();