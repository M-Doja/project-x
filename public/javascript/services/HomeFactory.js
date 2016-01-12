(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var o = {};

	// ADD A NEW EVENT
o.addNewEvent = function(newEvent) {
				var q = $q.defer();
				console.log(newEvent);
				$http.post('/api/event/', newEvent)
				.then(function(res) {
							q.resolve(res.data);
					});
				return q.promise;
			};

	// SHOW ALL EVENTS
o.showEvents = function() {
					var q = $q.defer();
					$http.get('/api/event').then( function(res){
									q.resolve(res.data);
							});
							return q.promise;
					};
// SHOW INDIVDUAL
o.showEventById = function() {

};







		return o;
	}
})();
