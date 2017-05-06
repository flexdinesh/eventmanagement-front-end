angular.module('AdminService', []).factory('Admin', ['$http', 'APPCONSTANTS', function($http, APPCONSTANTS) {

        // var endpoint = "http://127.0.0.1:3000";
        // var endpoint = "https://eventmanagement-rest-api.herokuapp.com";
        var endpoint = APPCONSTANTS.DOMAIN;

        var wrapper = {};
        wrapper.isAuthenticated = false;
        wrapper.registrations = [];

        wrapper.getAllRegistrations = function(callback) {
            if (wrapper.registrations.length)
                return callback(wrapper.registrations);
            else {
                $http.get(endpoint + "/registration/getallregistrations", {
                        withCredentials: true
                    })
                    .then(function(response) {
                        if (response.data) {
                            wrapper.registrations = response.data;
                            callback(response.data);
                        } else {
                            console.log("Not Authenticated - No Reg Data for You!");
                            callback([]);
                        }
                    });
            }
        }

        wrapper.login = function(data, callback) {

            $http({
                    url: endpoint + "/auth/login",
                    method: "POST",
                    data: data,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    transformRequest: function(obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    },
                    withCredentials: true
                })
                .then(function(response) {
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

    }]);