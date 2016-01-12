(function() {
	'use strict';
	angular.module('app')
	.controller('EventController', EventController);


	function EventController(HomeFactory, $state) {
		var vm = this;
		vm.title = 'Welcome to Shaker!';
		vm.newEvent = {};

		// ADD A NEW EVENT
		vm.addNewEvent = function() {
			HomeFactory.addNewEvent(vm.newEvent).then(function(res) {
				vm.newEvent = res;
				$state.go('Events');
			});
		};

		// SHOW ALL EVENTS ON "EVENTS PAGE"
		HomeFactory.showEvents().then(function(res){
			vm.events = res;
		});

		// SHOW INDIVDUAL EVENTS BY ID
		// if(localStorage.oneEvent){
		// 	vm.oneEvent = JSON.parse(localStorage.oneEvent);
		// 	console.log(vm.oneEvent);
		// 	localStorage.removeItem('oneEvent');
		// }
		//
		// vm.getEventsById = function(oneEvent){
	  //   localStorage.setItem("oneEvent", JSON.stringify(oneEvent));
	  //   $state.go('EventPage',{id: oneEvent._id});
	  // };








	} // end of controller
})();
