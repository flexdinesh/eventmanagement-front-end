angular.module('RegistrationService', []).factory('Registration', ['$http', 'APPCONSTANTS', function($http, APPCONSTANTS) {

    // var endpoint = "http://127.0.0.1:3000";
    // var endpoint = "https://eventmanagement-rest-api.herokuapp.com";
    var endpoint = APPCONSTANTS.DOMAIN;
    
    var wrapper = {};
    wrapper.events = [];

    wrapper.getAllEvents = function(callback) {
        $http.get(endpoint + "/event/getallevents")
            .then(function(response) {
                wrapper.events.push(response.data);
                callback(response.data);
            });
    }

    wrapper.addRegistration = function(data, callback) {
        $http({
                url: endpoint + "/registration/addregistration",
                method: "GET",
                params: data
            })
            .then(function(response) {
                wrapper.events.push(response.data);
                callback(response.data);
            });;

    }

    return wrapper;

}]);