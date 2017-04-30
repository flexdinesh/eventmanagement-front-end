angular.module('BorrowerService', []).factory('Borrower', ['$http', function($http) {

    var wrapper = {};

    wrapper.borrowers = [];

    wrapper.getAllBorrowers = function(callback) {
        $http.get("http://127.0.0.1:3000/getborrowers")
            .then(function(response) {
                wrapper.borrowers.push(response.data);
                callback(response.data);
            });
    }
	
	return wrapper;

}]);