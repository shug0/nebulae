'use strict';

var hibossApp = angular.module('hibossApp', ['ngRoute'])
hibossApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/player/', {
      templateUrl: '/templates/player.html',
      controller: 'PlayerCtrl'
    })
    .when('/login/', {
      templateUrl: '/templates/login.html',
      controller: 'UserCtrl'
    }).otherwise({
      redirectTo: '/login',
      caseInsensitiveMatch: true
    })
  }])