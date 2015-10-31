app.controller('loginController', ['$scope', 'AuthService', '$state', 
	function($scope, AuthService, $state){
		console.log('Inside loginController');
		$scope.user = {
			email: '',
			password: ''
		};

		// $scope.loginAuth = function() {
		// 	console.log('email-->' + $scope.user.email + ' password-->' + $scope.user.password);
		// 	AuthService.login($scope.user.email, $scope.user.password)
		// 		.then(function() {
		// 			$state.go('home');
		// 		});
		// };
		$scope.login = function() {
			$state.go('home');
		};
	}]
);