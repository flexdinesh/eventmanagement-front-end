angular.module('AdminService', []).factory('Admin', ['$http', function($http) {

    // var endpoint = "http://127.0.0.1:3000";
    var endpoint = "https://eventmanagement-rest-api.herokuapp.com";

    var wrapper = {};
    wrapper.isAuthenticated = false;
    wrapper.registrations = [];

    wrapper.getAllRegistrations = function(callback) {
        if (wrapper.registrations.length)
            return callback(wrapper.registrations);
        else {
            $http.get(endpoint + "/registration/getallregistrations")
                .then(function(response) {
                    if (response.data) {
                        console.log("Authenticated!");
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

        $http.post(endpoint + "/auth/login", data).
        success(function(response) {
            console.log(response);
            callback(response);
        }).
        error(function() {
            console.log('Login failed');
        });

        /*$http({
                url: endpoint + "/auth/login",
                method: "POST",
                data: data,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(function(response) {
                console.log(response.headers);
                callback(response.data);
            });;*/

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
/*// Intercept POST requests, convert to standard form encoding
     $httpProvider.defaults.useXDomain = true;
     // $httpProvider.defaults.withCredentials = true;
     // $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
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
 }])*/