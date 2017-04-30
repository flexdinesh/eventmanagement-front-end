angular.module('RegistrationService', []).factory('Registration', ['$http', function($http) {

    var wrapper = {};

    wrapper.events = [];

    wrapper.getAllEvents = function(callback) {
        $http.get("http://127.0.0.1:3000/event/getallevents")
            .then(function(response) {
                wrapper.events.push(response.data);
                callback(response.data);
            });
    }

    wrapper.addRegistration = function(data, callback) {
        $http({
                url: "http://127.0.0.1:3000/registration/addregistration",
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