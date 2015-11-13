'use strict';

var NebulaeApp = angular.module('NebulaeApp', ['ngRoute'])
NebulaeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/login/', {
      templateUrl: '/templates/login.html',
      controller: 'UserCtrl'
    })
    .when('/user/', {
      templateUrl: '/templates/user.html',
      controller: 'UserCtrl'
    })
    .otherwise({
      redirectTo: '/login',
      caseInsensitiveMatch: true
    })
  }])
