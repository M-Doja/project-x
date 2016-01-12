(function() {
	'use strict';
	angular.module('app')
	.controller('ProfileController', ProfileController);
	function ProfileController($animate, UserFactory) {
		var vm = this;
		vm.title = 'Welcome to Shaker!';
    console.log('ProfileController in effect');
		vm.isBio = false;
		vm.isIns = true;
		vm.isEve = true;
		vm.isStat = true;
		vm.isAch = true;
		$animate.enabled(true);
		vm.status = UserFactory.status


		vm.showBio = function() {
			vm.isBio = false;
			vm.isIns = true;
			vm.isEve = true;
			vm.isStat = true;
			vm.isAch = true;
		}
		vm.showIns = function() {
			vm.isIns = false;
			vm.isBio = true;
			vm.isEve = true;
			vm.isStat = true;
			vm.isAch = true;
		}
		vm.showEve = function() {
			vm.isBio = true;
			vm.isIns = true;
			vm.isEve = false;
			vm.isStat = true;
			vm.isAch = true;
		}
		vm.showStat = function() {
			vm.isBio = true;
			vm.isIns = true;
			vm.isEve = true;
			vm.isStat = false;
			vm.isAch = true;
		}
		vm.showAch = function() {
			vm.isBio = true;
			vm.isIns = true;
			vm.isEve = true;
			vm.isStat = true;
			vm.isAch = false;
		}
		


	}
})();
