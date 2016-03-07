(function() {
    'use strict';

    angular
        .module('app.playlist')
        .factory('playlistService', playlistService);

    playlistService.$inject = ['PLAYLIST_URL', '$http', '$q'];

    function playlistService(PLAYLIST_URL, $http, $q) {
        var savedData = null;

        var service = {
            getPlaylistInfo: getPlaylistInfo,
            getVideo: getVideo
        };

        return service;

        function getPlaylistInfo() {

            if (angular.isObject(savedData)) {
                return $q.when(savedData);
            }

            var promise = $http.get(PLAYLIST_URL)
                .then(function(response) {
                    console.log(response.data);
                    savedData = response.data;
                    return savedData;
                });
            return promise;
        }

        function getVideo(id) {
            return getPlaylistInfo()
                .then(function(data) {
                    var i = 0,
                        length = data.items.length,
                        result = null;
                    for (; i < length; i += 1) {
                        if (data.items[i].id === id) {
                            result = data.items[i];
                            break;
                        }
                    }
                    return result;
                });
        }
    }
})();