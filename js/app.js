var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'exampleController'
	})
	.when('/home', {
		redirectTo: '/'
	})
	.when('/contact', {
		templateUrl: 'partials/contact.html',
		controller: 'drugiController'
	})
	.otherwise({
		redirectTo: '/'
	});
});

myApp.controller('exampleController', function($scope) {

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

});

myApp.controller('drugiController', function($scope) {
	$scope.x = 5;
});