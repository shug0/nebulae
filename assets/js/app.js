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
            .when('/resetPassword/', {
                templateUrl: '/templates/auth/resetPassword.html'
            })
            .when('/404/', {
                templateUrl: '/templates/404.html'
            })
            .otherwise({
                redirectTo: '/404',
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

        initRootScope(AuthSrv, $rootScope);

        $rootScope.$on("$routeChangeStart", function (event, next) {

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
                        next.loadedTemplateUrl == "/templates/dashboard/dashboard.html" ||
                        next.loadedTemplateUrl == "/templates/admin/panel.html" ||
                        next.loadedTemplateUrl == "/templates/admin/user.html"
                    ) {
                        $location.path("/login/");
                    }
                }
            });
        }
    );
});


function initRootScope(AuthSrv, $rootScope) {
    AuthSrv.isConnected().then(function (response) {
        $rootScope.isAuthenticated = response
    });
    AuthSrv.sessionUser().then(function (response) {
        $rootScope.sessionUser = response;
    });
}
