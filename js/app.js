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

myApp.controller('homeController', function($scope, $http) {

	$scope.ime = "Ana";

	$http.get('data/users.json').success(function(data){
		$scope.users = data;
	});

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