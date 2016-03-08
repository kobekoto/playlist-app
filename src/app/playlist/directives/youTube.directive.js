(function() {
	'use strict';

	angular
		.module("app.playlist")
		.directive("customYoutube", youTubePlayer);

	youTubePlayer.$inject = ['$window', "$sce"];

	function youTubePlayer($window, $sce) {
		return {
			restrict: "AE",
			template: "<div style='height:200px;'><iframe style='height:100%;width:100%;' src='{{url}}'></iframe></div>",
			scope: {
				vid: "="
			},
			link: function(scope, element, attrs) {
				console.log(scope, "before");
				scope.$watch("vid", function(new_val) {
					console.log(scope, "after");
					console.log(new_val);
					// http://stackoverflow.com/questions/21292114/external-resource-not-being-loaded-by-angularjs
					scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + new_val);
				});
			}

		}
	}


})();