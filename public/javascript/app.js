(function() {
	'use strict';
	angular.module('app', ['ui.router',  'ngAnimate', 'ngMaterial'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider
		 .state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		})
		.state('EventPage',{
		 url: '/event/:id',
		 templateUrl: 'views/EventPage.html'
	 })
	 .state('Events',{
		url: '/events_all',
		templateUrl: 'views/Events.html'
	})
	 .state('Profile',{
		url: '/profile/:id',
		templateUrl: 'views/Profile.html'
		})
		.state('EventHome',{
		 url: '/events_admin',
		 templateUrl: 'views/RunningEvent.html'
	 })
	 .state('AddEvent',{
	 url: '/events_add',
	 templateUrl: 'views/AddEventPage.html'
	 })
		 .state('Upgrade',{
		 url: '/upgrade',
		 templateUrl: 'views/Upgrade.html'
	 })
		 .state('Exit',{
		 url: '/exit_page',
		 templateUrl: 'views/ExitPage.html'
	 });
		$urlRouterProvider.otherwise('/');
	}
})();
