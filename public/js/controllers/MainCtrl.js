angular.module('MainCtrl', ['AdminService', 'RegistrationService']).controller('MainController', function($scope, Admin, Registration) {

	$scope.tagline = 'Hi there!';

	$scope.registrationtypes = [{
		id: 1,
		label: 'Self',
		value: 'self'
	}, {
		id: 2,
		label: 'Group',
		value: 'group'
	}, {
		id: 3,
		label: 'Corporate',
		value: 'corporate'
	}, {
		id: 4,
		label: 'Others',
		value: 'others'
	}];

	Registration.getAllEvents(function(data) {
		$scope.events = data;
		$scope.activeEventId = data[0]._id;
		$scope.activeEventname = data[0].name;
		// console.log(data[0]._id);
	});

	$scope.listOnClickHandler = function(el) {
			$(".list-group-item").removeClass("active");
			$("#"+el._id).addClass("active");
			$scope.activeEventId = el._id;
			$scope.activeEventname = el.name;

			$scope.fullname = null;
			$scope.mobile = null;
			$scope.email = null;
			$scope.selectedtype = $scope.registrationtypes[0];
			$scope.ticketcount = 1;
	};

	$scope.navOnClickHandler = function($event) {
			$(".nav-link").removeClass("active");
			console.log(angular.element($event.currentTarget));
			$(angular.element($event.currentTarget)).addClass("active");
	};

	$scope.submit = function() {

		var data = {
			name: $scope.fullname,
			mobile: $scope.mobile,
			email: $scope.email,
			type: $scope.selectedtype.value,
			ticketcount: $scope.ticketcount,
			eventid: $scope.activeEventId
		}
		console.log(data);

		Registration.addRegistration(data, function(data) {
			console.log(data);
			$scope.showRegistrationSuccess = true;
			$scope.regid = data;
		});

	};

});