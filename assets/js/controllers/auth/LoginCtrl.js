NebulaeApp.controller('LoginCtrl', ['$scope', '$rootScope', '$location', '$mdToast', 'AuthSrv',
    function($scope, $rootScope, $location, $mdToast, AuthSrv) {

    // Title
    $rootScope.templateName = "login";

    // Scope Model
    $scope.user = {};
    $scope.user.email = 'test@test.me';
    $scope.user.password= '';

    // Init Toast Position
    $scope.toastPosition = angular.extend({},{
        bottom: false,
        top: true,
        left: false,
        right: true
    });
    $scope.getToastPosition = function() {
        return Object.keys($scope.toastPosition)
            .filter(function(pos) { return $scope.toastPosition[pos]; })
            .join(' ');
    };

    // Error message
    $scope.resetError = function () {
        $('[type="submit"]')
            .removeClass('md-warn')
            .text('Login');
    };


    // Scope Function
    $scope.login = function () {

        AuthSrv.login($scope.user).then(
            function() {
                $rootScope.isAuthenticated = true;
                $location.path('/dashboard/');
            },
            function errorCallback(data) {
                $('[type="submit"]')
                    .addClass('md-warn')
                    .text(data.data.error);
            }
        );

    };
    $scope.register = function () {

        AuthSrv.register($scope.user).then(
            function(user) {
                console.log(user);
            },
            function errorCallback(data) {
                console.log(data);
                $('[type="submit"]')
                    .addClass('md-warn')
                    .text(data.data.error);
            }
        );
    };

}]);

'use strict';
