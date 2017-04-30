angular.module('AdminService', []).factory('Admin', ['$http', function($http) {

    var wrapper = {};

    wrapper.registrations = [];

    wrapper.getAllRegistrations = function(callback) {
        $http.get("http://127.0.0.1:3000/registration/getallregistrations")
            .then(function(response) {
                wrapper.registrations.push(response.data);
                callback(response.data);
            });
    }

    wrapper.login = function(data, callback) {
        console.log(data);
        $http({
                url: "http://127.0.0.1:3000/auth/login",
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

    return wrapper;

}])
.config(['$httpProvider', function ($httpProvider) {
  // Intercept POST requests, convert to standard form encoding
  $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
  $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
    var key, result = [];

    if (typeof data === "string")
      return data;

    for (key in data) {
      if (data.hasOwnProperty(key))
        result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
    }
    return result.join("&");
  });
}]);;