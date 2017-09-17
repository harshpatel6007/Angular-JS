myAppControllers.controller('dashboardCtrl', function ($scope, ajaxService, $log) {
    $scope.dsMessage = "Welcome to dashboard";
    // ajaxService.executeGetRequest();

    var request = ajaxService.executePostRequest('/getRowData');
    request
    .then(function (data) {
        $log.log("call success :: " + angular.toJson(data));
        $scope.contextPath = data;
    })
    .catch (function (error) {
        $log.log("call failed :: " + angular.toJson(error));
        $scope.contextPath = error;
    });

    // window.location : {"href":"http://localhost:3000/#/dashboard","ancestorOrigins":{},"origin":"http://localhost:3000","protocol":"http:","host":"localhost:3000","hostname":"localhost","port":"3000","pathname":"/","search":"","hash":"#/dashboard"}
});