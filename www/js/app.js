// Ionic Starter App

// PLEASE DON'T FORGET TO DELETE THE MARKED BLOCK AT THE BOTTOM OF THIS FILE

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'selfbitsAngular', 'ngCordova'])

.run(function($ionicPlatform, $sbAuth, $state, $sbPush, $rootScope, $ionicPopup) {
  $ionicPlatform.ready(function() {

    // Configure and initialize Push notifications
    // Please note that in order to user Push, you need to call $sbPush.sync() after authentication
    // This is included in this example in the controller.js
    if (window.PushNotification) {
      var pushConfig = {
        android: {
          // For Android you need to add the Sender ID of your project here AND in the package.json
          // afterwards run 'ionic state restore'
          // More details can be found here : https://github.com/phonegap/phonegap-plugin-push/blob/master/docs/INSTALLATION.md
          senderID: "YOUR_SENDER_ID_HERE"
        },
        ios: {
          "badge": true,
          "sound": true,
          "alert": true,
        }
      };
      $sbPush.init(pushConfig);
    }

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

  // Example for the use of push notifications. If you configured push notifications on the Backend and
  // within your code, you can listen for push notifications with the 'pushNotificationReceived' event
  $rootScope.$on('pushNotificationReceived', function(event, data) {
    $ionicPopup.confirm({
      title: data.title,
      template: data.message
    });
  });
})


.config(function($stateProvider, $urlRouterProvider, $sbApiProvider) {
    // add your Selfbits BaaS credentials here. If you don't have any yet head to http://www.selfbits.org
    // Your Backend Subdomain, e.g. http://YOURPORJECT-app.selfbits.io
    $sbApiProvider.domain = "";
    // Your Backend App Id
    $sbApiProvider.appId = "";
    // BE CAREFUL WITH YOUR APP SECRET. IF YOU ARE HOSTING A PUBLIC APP USE ALLOWED ORIGINS INSTEAD.
    $sbApiProvider.appSecret = "";

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js

    // setup an abstract state for the auth views, skip if user is already logged in
    $stateProvider
      .state('auth', {
        url: '/auth',
        abstract: true,
        template: '<ion-nav-view>/<ion-nav-view>',
        resolve: {
          skipIfLoggedIn
        }
      })
      .state('auth.login', {
        url: '/login',
        templateUrl: 'templates/auth-login.html',
        controller: 'AuthLoginCtrl'

      })
      .state('auth.signup', {
        url: '/signup',
        templateUrl: 'templates/auth-signup.html',
        controller: 'AuthSignupCtrl'
      })
      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html',
        resolve: {
          loginRequired
        }
      })
      // Each tab has its own nav history stack:
      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })
      .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })
      .state('tab.todo', {
        url: '/todo',
        views: {
          'tab-todo': {
            templateUrl: 'templates/tab-todo.html',
            controller: 'ToDoCtrl'
          }
        }
      })
      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      })

    // Make sure user is logged in OR check if user requires login
    function skipIfLoggedIn($q, $sbAuth, $location, $timeout) {
      var deferred = $q.defer();
      if ($sbAuth.isAuthenticated()) {
        $location.path('/tab/dash');
        deferred.resolve();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }

    function loginRequired($q, $location, $sbAuth) {
      var deferred = $q.defer();
      console.log($sbAuth.isAuthenticated());
      if ($sbAuth.isAuthenticated()) {
        deferred.resolve();
      } else {
        console.log('to auth login');
        $location.path('/auth/login');
        deferred.resolve();
      }
      return deferred.promise;
    }

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/auth/login');
});// DEMOBLOCK_PLACEHOLDER
