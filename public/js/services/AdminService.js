angular.module('AdminService', []).factory('Admin', ['$http', function($http) {

        var endpoint = "http://127.0.0.1:3000";
        var wrapper = {};
        wrapper.isAuthenticated = false;
        wrapper.registrations = [];

        wrapper.getAllRegistrations = function(callback) {
            $http.get(endpoint + "/registration/getallregistrations")
                .then(function(response) {
                    wrapper.registrations = response.data;
                    callback(response.data);
                });
        }

        wrapper.login = function(data, callback) {
            $http({
                    url: endpoint + "/auth/login",
                    method: "POST",
                    data: data,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .then(function(response) {
                    // wrapper.events.push(response.data);
                    callback(response.data);
                });;

        }

        wrapper.logout = function(callback) {
            $http.get(endpoint + "/auth/logout")
                .then(function(response) {
                    callback(response.data);
                    wrapper.isAuthenticated = false;
                });

        }

        return wrapper;

    }])
    .config(['$httpProvider', function($httpProvider) {
        // Intercept POST requests, convert to standard form encoding
        $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $httpProvider.defaults.transformRequest.unshift(function(data, headersGetter) {
            var key, result = [];

            if (typeof data === "string")
                return data;

            for (key in data) {
                if (data.hasOwnProperty(key))
                    result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
            }
            return result.join("&");
        });
    }]);