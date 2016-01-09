'use strict';

var NebulaeApp = angular.module('NebulaeApp',
    ['ngRoute', 'ngMaterial', 'ngMessages', 'ngMdIcons', 'ngAnimate', 'restangular', 'gridster']);

NebulaeApp.config(['$routeProvider',
    function ($routeProvider) {
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
                isAuthenticated: true,
                isAdmin: true
            })
            .when('/dashboard/', {
                templateUrl: '/templates/dashboard/dashboard.html',
                isAuthenticated: true
            })
            .otherwise({
                redirectTo: '/login',
                caseInsensitiveMatch: true
            })
    }
]);

NebulaeApp.run(function ($rootScope, $location, AuthSrv) {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        // Teste si l'utilistateur est log via la variable globale
        if ($rootScope.isAuthenticated == true) {
            if (
                next.templateUrl == "/templates/auth/login.html" ||
                next.templateUrl == "/templates/auth/signup.html"
            ) {
                $location.path("/dashboard/");
            }
        }
        // Teste si l'utilistateur est log via req.session
        if (AuthSrv.isConnected().then(function(response) { return response })) {
            if (
                next.templateUrl == "/templates/auth/login.html" ||
                next.templateUrl == "/templates/auth/signup.html"
            ) {
                $location.path("/dashboard/");
            }
        }
    });
});


NebulaeApp.config(
    function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('pink');
    }
);

NebulaeApp.config(
    function (RestangularProvider) {
        RestangularProvider.setBaseUrl('/');
    }
);

