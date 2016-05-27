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

.controller('ToDoCtrl', function($scope, $sbDatabase, $ionicPopup, $timeout) {
	// Saves popup form data
  $scope.data = {};

  $scope.todos = $sbDatabase.table('todo').get(function(res) {}, function(err) {
		// Show tutorial how to set up the Database if the Collection does not exist
    $scope.showTutorial = true;
  });

  $scope.remove = function(item) {
    var idx = $scope.todos.docs.indexOf(item);
    $scope.todos.docs.splice(idx, 1);
    $sbDatabase.table('todo').delete(item);
  }

  $scope.add = function() {
    var myPopup = $ionicPopup.show({
      template: '<input type="text" placeholder="Todo" ng-model="data.name"><br><input type="text" placeholder="Details" ng-model="data.details">',
      title: 'New ToDo',
      subTitle: 'Please use normal things',
      scope: $scope,
      buttons: [{
        text: 'Cancel'
      }, {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.name) {
            //don't allow the user to close unless he enters a todo
            e.preventDefault();
          } else {
            console.log($scope);
            return $scope.data;
          }
        }
      }, ]
    });
    myPopup.then(function(res) {
      $sbDatabase.table('todo').save(res);
      $scope.todos.docs.push(res);
      $scope.data = {};
    });
  };
})

.controller('AccountCtrl', function($scope, $sbAuth, $state, $ionicPopup) {
  $scope.logoutAlert = function() {
    var sbAlert = $ionicPopup.confirm({
      title: 'Do you really want to log out?',
      template: 'Please confirm.'
    });

    sbAlert.then(function(res) {
      if (res) {
        console.log('Log Out');
        $sbAuth.logout();
        $state.go('auth.login');
      } else {
        console.log('Cancel');
      }
    });
  };

  $scope.logout = function() {
    $sbAuth.logout();
    $state.go('auth.login');
  }
})


.controller('AuthLoginCtrl', function($sbAuth, $scope, $state, $ionicPopup) {
  $scope.login = function(user) {
    $sbAuth.login(user).then(function(res) {
      $state.go('tab.dash');
    }).catch(function(err) {
      var sbAlert = $ionicPopup.alert({
        title: 'Error',
        template: err.data.message
      });
    });
  }
  $scope.social = function(provider) {
    $sbAuth.social(provider).then(function(res) {
      $state.go('tab.dash');
    }).catch(function(err) {
      console.log(err.data.message);
      var sbAlert = $ionicPopup.alert({
        title: 'Error',
        template: 'Social Login failed. Please try again.'
      });

    });
  }
})

.controller('AuthSignupCtrl', function($sbAuth, $scope, $state, $ionicPopup) {
  $scope.signup = function(user) {
    $sbAuth.signup(user).then(function(res) {
      $state.go('tab.dash');
    }).catch(function(err) {
      var sbAlert = $ionicPopup.alert({
        title: 'Error',
        template: err.data.message
      });
    });
  }
});
