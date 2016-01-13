'use strict';

var NebulaeApp = angular.module('NebulaeApp',
    ['ngRoute', 'ngMaterial', 'ngMessages', 'ngMdIcons', 'ngAnimate', 'restangular', 'gridster']);

NebulaeApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/login/', {
                templateUrl: '/templates/auth/login.html'
            })
            .when('/signup/', {
                templateUrl: '/templates/auth/signup.html'
            })
            .when('/user/', {
                templateUrl: '/templates/user/addUser.html'
            })
            .when('/admin/', {
                templateUrl: '/templates/admin/panel.html',
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

// COLOR CONFIG
NebulaeApp.config(
    function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('pink');
    }
);

// RESTANGULAR URL CONFIG
NebulaeApp.config(
    function (RestangularProvider) {
        RestangularProvider.setBaseUrl('/');
    }
);

NebulaeApp.run(function ($rootScope, $location, AuthSrv) {

    AuthSrv.isConnected().then(function (response) {
        $rootScope.isAuthenticated = response
    });

    AuthSrv.sessionUser().then(function (response) {
        $rootScope.sessionUser = response;
    });

    $rootScope.$on("$routeChangeStart", function (event, next, current) {

        AuthSrv.isConnected().then(function (response) {

            if (response) {
                if (
                    next.loadedTemplateUrl == "/templates/auth/login.html" ||
                    next.loadedTemplateUrl == "/templates/auth/signup.html"
                ) {
                    $location.path("/dashboard/");
                }
            }
            else {
                if (
                    next.$$route.controller == "/templates/dashboard/dashboard.html" ||
                    next.$$route.controller == "/templates/admin/*"
                ) {
                    $location.path("/login/");
                }
            }
        });
    });

});

