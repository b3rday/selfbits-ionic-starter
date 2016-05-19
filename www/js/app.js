// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'selfbitsAngular'])

.run(function($ionicPlatform, $sbAuth, $state) {

	$ionicPlatform.ready(function() {
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
})

.config(function($stateProvider, $urlRouterProvider, $sbApiProvider) {

	// add your Selfbits BaaS credentials here. If you don't have any yet head to http://www.selfbits.org
	$sbApiProvider.domain = "YOUR_APP_SUBDOMAIN.selfbits.io";
	$sbApiProvider.appId = "YOUR_SB_APP_ID";
	// BE CAREFUL WITH YOUR APP SECRET. IF YOU ARE HOSTING A PUBLIC APP USE ALLOWED ORIGINS INSTEAD.
	$sbApiProvider.appSecret = "YOUR_SB_APP_SECRET";

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
		.state('tab.account', {
			url: '/account',
			views: {
				'tab-account': {
					templateUrl: 'templates/tab-account.html',
					controller: 'AccountCtrl'
				}
			}
		})

	// make sure user is
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

});