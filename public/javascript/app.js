(function() {
	'use strict';
	angular.module('app', ['ui.router', 'slickCarousel'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider
		 .state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		})
		.state('EventPage',{
		 url: '/events',
		 templateUrl: 'views/EventPage.html'
	 })
	 .state('Profile',{
		url: '/profile/:id',
		templateUrl: 'views/Profile.html'
	})
		.state('EventHome',{
		 url: '/events_admin',
		 templateUrl: 'views/RunningEvent.html'
	 })
		 .state('Upgrade',{
		 url: '/upgrade',
		 templateUrl: 'views/Upgrade.html'
	 });
		$urlRouterProvider.otherwise('/');
	}
})();
