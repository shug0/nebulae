'use strict';

NebulaeApp.controller('AuthCtrl', ['$scope', '$rootScope', '$mdToast', 'AuthSrv',
    function($scope, $rootScope, $mdToast, AuthSrv) {
    $rootScope.templateName = "login";

    $scope.user = {};

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

    $scope.login = function () {

        /*
        $('form').fadeOut();
        setTimeout(function () {
            $('md-progress-circular').fadeIn();
            $('#loginBox').addClass('circleContainer');
        }, 500);
        */

        AuthSrv.login($scope.user).then(function (response) {
            console.log(response);
            if (response.error) {
                console.log("nope");

                $mdToast.show(
                    $mdToast.simple()
                        .content('Erreur de connexion.')
                        .position($scope.getToastPosition())
                        .hideDelay(2000)
                );

            }
            if (response.auth) {
                console.log("Yolo");
            }
        })
    };

}]);