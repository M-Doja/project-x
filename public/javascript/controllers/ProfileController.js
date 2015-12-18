(function() {
	'use strict';
	angular.module('app')
	.controller('ProfileController', ProfileController);


	function ProfileController() {
		var vm = this;
		vm.title = 'Welcome to Shaker!';
    console.log('ProfileController in effect');



	}
})();
