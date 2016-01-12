(function() {
	'use strict';
	angular.module('app')
	.controller('HomeController', HomeController);


	function HomeController(UserFactory, $state) {
		var vm = this;
		vm.title = 'Welcome to Showtime!';
		vm.showme = false;
		vm.LogBtn = false;
		vm.NewLogin = true;
		vm.RtnLogin = true;
		vm.NewUser = false;
		vm.ReturnUser = false;
		vm.logOutBtn = false;
		vm.Cancel = false;
		vm.status = UserFactory.status
		vm.isLogin = true; //switch between the login and register view on the login_register.html page
		vm.user = {};

		vm.registerUser = function() {
				UserFactory.registerUser(vm.user).then(function() {
					$state.go('Profile',{
				    id: vm.status._id
				  });

				});
			};

		vm.loginUser = function() {
			console.log('hi');
				UserFactory.logIn(vm.user).then(function() {
				  console.log('hi world');
				  $state.go('Profile', {
				    id: vm.status._id
				  });
				});
			};
			vm.logOut = function() {
						UserFactory.logOut();
						$state.go('Home');
					};






			// LOGIN CONTROLS
		vm.LOGIN = function() {
			vm.showme = true;
			vm.LogBtn = true;
			vm.logOutBtn = false;
			vm.RtnLogin = true;
			vm.NewLogin = true;
			vm.Cancel = true;
		}
		vm.CancelLogin = function() {
			vm.showme = false;
			vm.LogBtn = false;
			vm.logOutBtn = true;
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
		// vm.registerUser = function() {
		// 	console.log('clicking registration btn');
		// 		UserFactory.registerUser(vm.user).then(function() {
		// 			// vm.logOutBtn = false;
		// 			console.log('going to profile');
		// 			$state.go('Profile',{
		// 		    id: vm.status._id
		// 		  });
		// 		});
		// 	}
		// vm.LogIn = function() {
		// 	console.log('hi');
		// 	UserFactory.logIn(vm.user).then(function() {
		// 	  console.log('hi world');
		// 		// vm.logOutBtn = false;
		// 	  $state.go('Profile', {
		// 	    id: vm.status._id
		// 	  });
		// 	});
		// }
		// vm.LogOut = function() {
		// 	console.log('clicked log out btn');
		// 	UserFactory.logOut()
		// 		$state.go('Exit');
		// }



	}
})();
