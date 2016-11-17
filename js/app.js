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

	$scope.ime = "";

	$http.get('data/users.json').success(function(data){
		$scope.users = $scope.shuffleArray(data);
	});

	$scope.showMessage = function() {
		var ime = $scope.getName();
		alert("Hello " + ime + '!');
	};

	$scope.getName = function() {
		return $scope.ime;
	};

	$scope.shuffleArray = function (array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	};

});

myApp.controller('contactController', function($scope) {
	$scope.x = 5;
});