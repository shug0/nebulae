'use strict';


NebulaeApp.controller('UserCtrl', ['$scope', '$rootScope', '$mdToast', 'UserSrv', 'AuthSrv',
    function ($scope, $rootScope, $mdToast, UserSrv, AuthSrv) {

        $rootScope.templateName = "adminDashboard";

        $scope.user = {};
        $scope.users = [];

        $scope.roles = ['user', 'admin'];

        // Init Toast Position
        $scope.toastPosition = angular.extend({}, {
            bottom: false,
            top: true,
            left: false,
            right: true
        });

        $scope.getToastPosition = function () {
            return Object.keys($scope.toastPosition)
                .filter(function (pos) {
                    return $scope.toastPosition[pos];
                })
                .join(' ');
        };

        UserSrv.getUsers().then(function (response) {
            $scope.users = response;
        });


        $scope.load = function (user) {
            $scope.user = user;
            $scope.user.email = user.auth.email;
            $scope.edit = true;
        };


        $scope.addUser = function () {

            if ($scope.user.passwordConfirmed == $scope.user.password) {

                AuthSrv.register($scope.user).then(function (response) {

                    if (response.error) {
                        $('[type="submit"]')
                            .addClass('md-warn')
                            .text('Erreur de connexion');
                    }
                    if (response.auth) {

                        $scope.users.push(response);
                        $scope.user = {};
                        $scope.addUserForm.$setPristine();
                        $scope.addUserForm.$setUntouched();

                        $mdToast.show(
                            $mdToast.simple()
                                .content('User ' + response.auth.email + 'has been created.')
                                .position($scope.getToastPosition())
                                .hideDelay(2000)
                        );
                    }
                })
            }
            else {
                $mdToast.show(
                    $mdToast.simple()
                        .content('Password not identical')
                        .position($scope.getToastPosition())
                        .hideDelay(2000)
                );
            }
        };

        $scope.removeUser = function (user) {
            UserSrv.deleteUser(user).then(function (response) {
                $scope.users.splice($scope.users.indexOf(user), 1);
                $mdToast.show(
                    $mdToast.simple()
                        .content(user.auth.email + ' has been deleted.')
                        .position($scope.getToastPosition())
                        .hideDelay(2000)
                );
            })
        };

        $scope.resetPasswordUser = function (user) {
            UserSrv.sendResetPassUser({email:$scope.user.auth.email}).then(function (response) {
                $mdToast.show(
                    $mdToast.simple()
                        .content('Reset has sent to '+ user.auth.email)
                        .position($scope.getToastPosition())
                        .hideDelay(2000)
                );
            })
        };



        $scope.updateUser = function (user) {
            user.gravatar = md5(user.email);
            console.log(UserSrv.updateUser(user));

            /*.then(function(response) {

                $mdToast.show(
                    $mdToast.simple()
                        .content(user.auth.email+' has been updated.')
                        .position($scope.getToastPosition())
                        .hideDelay(2000)
                );
            })*/

        };

    }]);