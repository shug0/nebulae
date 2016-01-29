NebulaeApp.controller('ResetCtrl', ['$scope','$location', '$rootScope', '$mdToast', 'AuthSrv', 'UserSrv',
    function($scope, $location, $rootScope, $mdToast, AuthSrv, UserSrv) {

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
                AuthSrv.resetPassword({password:$scope.user.newPassword, token:$location.search().token}).then(function (response) {
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Reset OK for '+ $scope.user.email)
                            .position($scope.getToastPosition())
                            .hideDelay(2000)
                    );
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
