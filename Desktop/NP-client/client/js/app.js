var app = angular.module('NatkhatBharat', ['ui.router', 'ngMaterial', 'modelServices', 'oc.lazyLoad']);

app
.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
	    // default route
	    $urlRouterProvider.otherwise('/index');

	    // ui router states
	    $stateProvider
	        .state('index', {
	            url: '/index',
	            views: {
	                header: {
	                    templateUrl: 'views/index/header.html'
	                },
	                content: {
	                    templateUrl: 'views/index/content.html'
	            	}
	            }
	        })
	        .state('index.login', {
	            url: '/login',
	            templateUrl: 'views/index/loginForm.html',
	            controller: 'loginController'
	        })
	        .state('index.signUp', {
	            url: '/signUp',
	            templateUrl: 'views/index/signUpForm.html',
	            controller: 'loginController'
	        })
	        .state('home', {
	            url: '/home',
	            views: {
	                header: {
	                    templateUrl: 'views/home/header.html',
	                    controller: 'homeController'
	                },
	                content: {
	                    templateUrl: 'views/home/content.html',
	                    controller: 'homeController'
	            	}
	            }
	        });
}])
.run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
      // redirect to login page if not logged in
      if (next.authenticate && !$rootScope.currentUser) {
        event.preventDefault(); //prevent current page from loading
        $state.go('index');
      }
    });
}]);
