NebulaeApp.controller('LoginCtrl', ['$scope', '$rootScope', '$mdToast', 'AuthSrv', function($scope, $rootScope, $mdToast, AuthSrv) {

    // Title
    $rootScope.templateName = "login";
    $rootScope.bodyClass = "auth";

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

        AuthSrv.login($scope.user).then(function (response) {
            console.log(response);
            if (response.error) {

                $('[type="submit"]')
                    .addClass('md-warn')
                    .text('Erreur de connexion');

            }
            if (response.auth) {

                $mdToast.show(
                    $mdToast.simple()
                        .content('Vous êtes connecté')
                        .position($scope.getToastPosition())
                        .hideDelay(2000)
                );


            }
        })
    };

}]);

'use strict';
