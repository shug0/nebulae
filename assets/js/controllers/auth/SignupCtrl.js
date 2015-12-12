NebulaeApp.controller('SignupCtrl', ['$scope', '$rootScope', '$mdToast', 'AuthSrv', 'UserSrv', function($scope, $rootScope, $mdToast, AuthSrv, UserSrv) {

    // Title
    $rootScope.templateName = "signup";

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

    $scope.signup = function () {

        if ($scope.user.passwordConfirmed == $scope.user.password) {

            AuthSrv.register($scope.user).then(function (response) {
                if (response.error) {

                    $('[type="submit"]')
                        .addClass('md-warn')
                        .text('Erreur de connexion');

                }
                if (response.auth) {

                    AuthSrv.login($scope.user).then(function (response) {
                        console.log(response);
                        if (response.auth) {

                            UserSrv.getTokenUser($scope.user).then(function (response) {
                                if (response.error) {
                                    console.log('Erreur token');
                                }
                            });

                            $mdToast.show(
                                $mdToast.simple()
                                    .content('Votre compte a bien été créé.')
                                    .position($scope.getToastPosition())
                                    .hideDelay(2000)
                            );

                        }
                    })
                }
            });

        }
        else {
            $('[type="submit"]')
                .addClass('md-warn')
                .text('Password not identical');

        }

    };



}]);

'use strict';
