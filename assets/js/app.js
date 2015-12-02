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
    .when('/admin/', {
        templateUrl: '/templates/admin/panel.html',
        controller: 'PanelCtrl'
    })
    .otherwise({
      redirectTo: '/login',
      caseInsensitiveMatch: true
    })
  }]);