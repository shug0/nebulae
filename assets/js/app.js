'use strict';

var NebulaeApp = angular.module('NebulaeApp',
    ['ngRoute', 'ngMaterial', 'ngMessages', 'ngMdIcons', 'ngAnimate', 'restangular', 'gridster']);

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
                templateUrl: '/templates/admin/panel.html'
            })
            .when('/dashboard/', {
                templateUrl: '/templates/dashboard/dashboard.html'
            })
            .otherwise({
              redirectTo: '/login',
              caseInsensitiveMatch: true
            })
    }

]);

NebulaeApp.config(
    function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('pink');
    }
);

NebulaeApp.config(
    function(RestangularProvider) {
        RestangularProvider.setBaseUrl('/');
    }
);