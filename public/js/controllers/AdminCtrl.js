angular.module('AdminCtrl', ['AdminService']).controller('AdminController', function($scope, Admin) {

	$scope.isAuthenticated = Admin.isAuthenticated;
	// $scope.isAuthenticated = true;

	//initializing registrations list
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
			if (response) {
				Admin.isAuthenticated = response;
				$scope.isAuthenticated = Admin.isAuthenticated;
			}
			console.log(response);
		});

	};

	$scope.logout = function() {

		Admin.logout(function(response) {
			$scope.isAuthenticated = false;
			console.log(response);
		});

	};

	$scope.initChart = function() {

		loadChart(Admin.registrations);

	};

});

// function to populate pie chart
var loadChart = function(registrations) {

	var allevents = new Array();
	var regmap = {};

	registrations.forEach(function(reg) {
		if (regmap.hasOwnProperty(reg._event.name)) {
			var count = regmap[reg._event.name];
			regmap[reg._event.name] = count + 1;
		} else {
			regmap[reg._event.name] = 1;
		}
		if (allevents.indexOf(reg._event.name) === -1)
			allevents.push(reg._event.name);
	});

	var chartdata = new Array();

	allevents.forEach(function(eventname) {
		var data = {
			name: eventname,
			y: regmap[eventname]
		};
		chartdata.push(data);
	})

	Highcharts.chart('chart-container', {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie'
		},
		title: {
			text: 'Event Registration Pie'
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
					style: {
						color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
					}
				}
			}
		},
		series: [{
			name: 'Events',
			colorByPoint: true,
			data: chartdata
		}]
	});

};