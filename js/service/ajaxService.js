/* 
*   base service for ajax call to server
*   created based on http://chariotsolutions.com/blog/post/angularjs-corner-using-promises-q-handle-asynchronous-calls/
*
*   The response object in success, error callback contains following properties
*
*       data – {string|Object} – The response body transformed with the transform functions.
*       status – {number} – HTTP status code of the response.
*       headers – {function([headerName])} – Header getter function.
*       config – {Object} – The configuration object that was used to generate the request.
*       statusText – {string} – HTTP status text of the response.
*       xhrStatus – {string} – Status of the XMLHttpRequest (complete, error, timeout or abort).
*
*/
myAppServices.service('ajaxService', function ($http, $q, $log) {

    var contextPath = window.location.pathname.substring(0, window.location.pathname.indexOf("/", 2));

    var displayException = function() {
        $log.log("ajaxService :: displayException");
    };

    var displayMessage = function (message) {
        $log.log("ajaxService :: displayMessage ");
    };

    var handleSuccessResponse = function (response, deferred) {
        $log.log("ajaxService :: handleSuccessResponse " + angular.toJson(response));
        var data = response;

        if(data["code"] == "750") {
			displayException();
		} else {
			displayMessage(data);
			if(data["code"] == "600") {
                console.log("resolve");
				deferred.resolve(data);
			} else {
                console.log("reject");
				deferred.reject(data);
			}			
		}
    };

    var handleErrorResponse = function() {
        $log.log("ajax service :: handleErrorResponse " + angular.toJson(response));
    };

    this.executeGetRequest = function (url, data) {
        $log.log("ajaxservice :: executeGetrequest");
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: url
        })
        .success(function (response) {
            handleSuccessResponse(response, deferred);
        })
        .error(function (response){
            $log.log("GET call failed, server will return error page");
        });
        return deferred.promise;
    };

    this.executePostRequest = function (url, data) {
        $log.log("ajaxService :: executePostrequest");
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: contextPath + url,
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        })
        .success(function (response) {
            handleSuccessResponse(response, deferred);
        })
        .error(function (response) {
            handleErrorResponse(response);
        });
        return deferred.promise;
    };

});