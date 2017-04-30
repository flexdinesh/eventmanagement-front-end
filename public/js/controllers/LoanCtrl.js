angular.module('LoanCtrl', ['LoanService']).controller('LoanController', function($scope, Loan) {

	//initializing loans list
    Loan.getAllLoans(function(data) {
        $scope.loans = data;
    });

});