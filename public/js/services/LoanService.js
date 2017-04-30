angular.module('LoanService', []).factory('Loan', ['$http', function($http) {

	var wrapper = {};

    wrapper.loans = [];

    wrapper.getAllLoans = function(callback) {
        $http.get("http://127.0.0.1:3000/getloaninfo")
            .then(function(response) {
                wrapper.loans.push(response.data);
                callback(response.data);
            });
    }
	
	return wrapper;

}]);