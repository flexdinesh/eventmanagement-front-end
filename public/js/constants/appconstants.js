angular.module("Constants", []).constant('APPCONSTANTS', (function() {

	// var endpoint = "http://127.0.0.1:3000";
	var endpoint = "https://eventmanagement-rest-api.herokuapp.com";

	return {
		DOMAIN: endpoint
	}
})());