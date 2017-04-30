angular.module('BorrowerCtrl', ['BorrowerService']).controller('BorrowerController', function($scope, Borrower) {

	//initializing borrowers list
    Borrower.getAllBorrowers(function(data) {
        $scope.borrowers = data;
    });

});