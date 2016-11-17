var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'homeController'
	})
	.when('/home', {
		redirectTo: '/'
	})
	.when('/contact', {
		templateUrl: 'partials/contact.html',
		controller: 'contactController'
	})
	.otherwise({
		redirectTo: '/'
	});
});

myApp.controller('homeController', function($scope) {

	$scope.ime = "Ana";

	$scope.users = [
		{
			name: 'Marko',
			lastName: 'Markovic',
			email: 'mmarkovic@email.net',
			id: 51
		},
		{
			name: 'Ana',
			lastName: 'ANICA',
			email: 'aana@email.net',
			id: 24
		},
		{
			name: 'petar',
			lastName: 'petroviC',
			email: 'ppera@email.net',
			id: 14
		}
	];

	$scope.showMessage = function() {
		var ime = $scope.getName();
		alert("Hello " + ime + '!');
	};

	$scope.getName = function() {
		return $scope.ime;
	};

});

myApp.controller('contactController', function($scope) {
	$scope.x = 5;
});