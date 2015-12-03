'use strict';

var NebulaeApp = angular.module('NebulaeApp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngMdIcons', 'ngAnimate']);
NebulaeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/login/', {
      templateUrl: '/templates/auth/login.html',
      controller: 'LoginCtrl'
    })
    .when('/signup/', {
        templateUrl: '/templates/auth/signup.html',
        controller: 'SignupCtrl'
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
  }
]);

NebulaeApp.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('pink')
        .accentPalette('indigo');
});