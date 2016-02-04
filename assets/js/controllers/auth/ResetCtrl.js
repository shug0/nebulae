NebulaeApp.controller('ResetCtrl', ['$scope','$location', '$rootScope', '$mdToast', 'AuthSrv',
    function($scope, $location, $rootScope, $mdToast, AuthSrv) {

        if ($location.search().token == null) {
            $location.path("/login/");
        }

        // Title
        $rootScope.templateName = "resetPassword";

        // Scope Model
        $scope.user = {};
        $scope.user.newPassword= '';

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
                .text('Reset Password');
        };
        $scope.resetPassword = function () {

            if ($scope.user.newPasswordConfirmed == $scope.user.newPassword) {
                AuthSrv.resetPassword({password:$scope.user.newPassword, token:$location.search().token}).then(function () {
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Password has been reset successfully')
                            .position($scope.getToastPosition())
                            .hideDelay(2000)
                    );
                    $location.path("/login/");
                },
                function errorCallback(data) {
                   if (data.data == 404) {
                       $('[type="submit"]')
                           .addClass('md-warn')
                           .text('Reset Invalide');
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
