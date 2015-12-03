NebulaeApp.controller('AuthCtrl', ['$scope', '$rootScope', '$mdToast', 'AuthSrv', function($scope, $rootScope, $mdToast, AuthSrv) {

    // Title
    $rootScope.templateName = "auth";

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

    $scope.signup = function () {

        if ($scope.user.passwordConfirmed == $scope.user.password) {

            AuthSrv.register($scope.user).then(function (response) {
                console.log(response);
                if (response.error) {

                    $('[type="submit"]')
                        .addClass('md-warn')
                        .text('Erreur de connexion');

                    console.log(response);

                }
                if (response.auth) {

                    console.log(response);

                    $mdToast.show(
                        $mdToast.simple()
                            .content('Utilisateur créer')
                            .position($scope.getToastPosition())
                            .hideDelay(2000)
                    );


                }
            })


        }
        else {
            $('[type="submit"]')
                .addClass('md-warn')
                .text('Password not identical');

        }

    };



}]);

'use strict';
