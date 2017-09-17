var myApp = angular.module('myApp',['ngRoute','myApp.directives','myApp.controllers','myApp.components','myApp.services']);

myApp.config(function($routeProvider, $locationProvider) {	
    $routeProvider.
      when('/login', {
          templateUrl: 'partials/login.html',
          controller: 'loginCtrl'
      }).
      when('/register', {
          templateUrl: 'partials/register.html',
          controller: 'registerCtrl'
      }).
      when('/dashboard', {
          templateUrl: 'partials/dashboard.html',
          controller: 'dashboardCtrl'
      }).
      when('/overview', {
          templateUrl: 'partials/overview.html',
          controller: 'overviewCtrl'
      }).
      otherwise({
	        redirectTo: '/login'
      });     
});

myApp.run(function($rootScope, $location, $log) {
    $rootScope.$on( "$routeChangeStart", function() {
        $log.log("Route chage starts " + $location.path());
    });
});

  