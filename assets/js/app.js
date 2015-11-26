'use strict';

var NebulaeApp = angular.module('NebulaeApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngMdIcons'])
NebulaeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/login/', {
      templateUrl: '/templates/auth/login.html',
      controller: 'AuthCtrl'
    })
    .when('/user/', {
      templateUrl: '/templates/user/addUser.html',
      controller: 'UserCtrl'
    })
    .when('/gridster/', {
      templateUrl: '/templates/user/gridster.html',
      controller: 'HomeCtrl'
    })
    .otherwise({
      redirectTo: '/login',
      caseInsensitiveMatch: true
    })
  }]);