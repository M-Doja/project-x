(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);


	function HomeController() {
		var vm = this;
		vm.title = 'Welcome to Showtime!';
		vm.showme = false;
		vm.LogBtn = false;
		vm.NewLogin = true;
		vm.RtnLogin = true;
		vm.NewUser = false;
		vm.ReturnUser = false;
		vm.Cancel = false;

			// LOGIN CONTROLS
		vm.LOGIN = function() {
			vm.showme = true;
			vm.LogBtn = true;
			vm.RtnLogin = true;
			vm.NewLogin = true;
			vm.Cancel = true;
		}
		vm.CancelLogin = function() {
			vm.showme = false;
			vm.LogBtn = false;
			vm.ReturnUser = false;
			vm.NewUser = false;
		}
		vm.newUserLogIn = function() {
			vm.NewLogin = false;
			vm.ReturnUser = true;
			vm.NewUser = true;
			vm.Cancel = false;
		}
		vm.rtnUserLogIn = function() {
			vm.RtnLogin = false;
			vm.NewUser = true;
			vm.ReturnUser = true;
			vm.Cancel = false;
		}
		vm.registerUser = function() {

		}
		vm.LogIn = function() {

		}
		vm.LogOut = function() {

		}



	}
})();
