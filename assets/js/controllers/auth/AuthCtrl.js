NebulaeApp.controller('AuthCtrl', ['$scope', '$rootScope', '$mdToast', 'AuthSrv', function($scope, $rootScope, $mdToast, AuthSrv) {

    // Title
    $rootScope.templateName = "login";

    // Scope Model
    $scope.user = {};
    $scope.user.email = 'test@test.me';
    $scope.user.password= 'testtest';

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
            .text('Envoyer');
    };


        // Scope Function
    $scope.login = function () {

        AuthSrv.login($scope.user).then(function (response) {
            console.log(response);
            if (response.error) {
                console.log("nope");

                $('[type="submit"]')
                    .addClass('md-warn')
                    .text('Connecté');

            }
            if (response.auth) {
                console.log("Yolo");

                $mdToast.show(
                    $mdToast.simple()
                        .content('Erreur de connexion.')
                        .position($scope.getToastPosition())
                        .hideDelay(2000)
                );


            }
        })
    };

}]);

'use strict';
