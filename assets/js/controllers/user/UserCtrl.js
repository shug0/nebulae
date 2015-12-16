'use strict';

NebulaeApp.controller('UserCtrl', ['$scope', '$rootScope', '$mdToast', 'UserSrv', 'AuthSrv',
    function($scope, $rootScope, $mdToast, UserSrv, AuthSrv) {

  $rootScope.templateName = "adminDashboard";

  $scope.user = {};
  $scope.users = [];

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

  UserSrv.getUsers().then(function(response) {
    $scope.users = response;
  });

  $scope.addUser = function() {
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
                      .content('Utilisateur créer')
                      .position($scope.getToastPosition())
                      .hideDelay(2000)
              );
          }
      })
  };

  $scope.removeUser = function(user) {
      console.log(user);
      UserSrv.deleteUser(user).then(function(response) {
        $scope.users.splice($scope.users.indexOf(user), 1)
      })
  };

}]);