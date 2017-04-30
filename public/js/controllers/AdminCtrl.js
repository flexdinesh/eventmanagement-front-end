angular.module('AdminCtrl', ['AdminService']).controller('AdminController', function($scope, Admin) {

	$scope.isAuthenticated = false;

	//initializing loans list
	Admin.getAllRegistrations(function(data) {
		$scope.registrations = data;
	});

	$scope.login = function() {

		var data = {
			// username: $scope.username,
			// password: $scope.password
			username: $('#username').val(),
			password: $('#password').val()
		}

		Admin.login(data, function(response) {
			if(response) $scope.isAuthenticated = true;
			console.log(response);
		});

	};

});