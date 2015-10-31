app.controller('homeController', ['$scope', '$state', '$ocLazyLoad',
	function($scope, $state, $ocLazyLoad){
		$scope.$on('$viewContentLoaded', function(){
			$ocLazyLoad.load({
			  serie: true,
			  files: [
			    'js/app/map/list.js',
			    'js/app/map/Mapster.js',
			    'js/app/map/map-options.js',
			    'js/app/map/script.js'
			  ]
			});
			// $ocLazyLoad.load('https://maps.google.com/maps/api/js?sensor=true');
			// $ocLazyLoad.load('js/app/map/markercluster.js');
			// $ocLazyLoad.load('js/app/map/list.js');
			// $ocLazyLoad.load('js/app/map/Mapster.js');
			// $ocLazyLoad.load('js/app/map/map-options.js');
			// $ocLazyLoad.load('js/app/map/script.js');
		});
		console.log('Inside homeController');
		$scope.header = "header";
		$scope.content = "content";
	}]
);