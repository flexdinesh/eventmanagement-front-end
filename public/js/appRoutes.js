angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/admin', {
			templateUrl: 'views/admin.html',
			controller: 'AdminController'
		});

	$locationProvider.html5Mode(true);

}]);