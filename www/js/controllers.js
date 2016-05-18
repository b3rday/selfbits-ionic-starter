angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	};
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $sbAuth, $state) {
	$scope.logout = function() {
		$sbAuth.logout();
		$state.go('auth.login');
	}
})

.controller('AuthLoginCtrl', function($sbAuth, $scope, $state) {
	$scope.login = function(user) {
		$sbAuth.login(user).then(function(res) {
			$state.go('tab.dash');
		});
	}
	$scope.social = function(provider) {
		$sbAuth.social(provider).then(function(res) {
			$state.go('tab.dash');
		});
	}
})

.controller('AuthSignupCtrl', function($sbAuth, $scope, $state) {
	$scope.signup = function(user) {
		$sbAuth.signup(user).then(function(res) {
			$state.go('tab.dash');
		});
	}

});