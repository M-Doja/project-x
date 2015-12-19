(function() {
	'use strict';
	angular.module('app')
	.controller('ProfileController', ProfileController);
	function ProfileController($animate) {
		var vm = this;
		vm.title = 'Welcome to Shaker!';
    console.log('ProfileController in effect');
		vm.isBio = false;
		vm.isIns = true;
		vm.isEve = true;
		vm.isStat = true;
		vm.isAch = true;
		$animate.enabled(true);

		// vm.myInterval = 5000;
	  // vm.noWrapSlides = false;
	  // vm.slides = [];
	  // vm.addSlide = function() {
	  //   vm.newWidth = 600 + slides.length + 1;
	  //   vm.slides.push({
	  //     image: '//placekitten.com/' + vm.newWidth + '/300',
	  //     text: ['More','Extra','Lots of','Surplus'][vm.slides.length % 4] + ' ' +
	  //       ['Cats', 'Kittys', 'Felines', 'Cutes'][vm.slides.length % 4]
	  //   });
	  // };
	  // for (var i=0; i<4; i++) {
	  //   vm.addSlide();
	  // }

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
