'use strict';

NebulaeApp.controller('UserCtrl', ['$scope', '$rootScope', 'UserSrv', function($scope, $rootScope, UserSrv) {
  $scope.user = {};
  $scope.users = [];

  UserSrv.getUsers().then(function(response) {
    $scope.users = response;
      console.log(response);
  });

  $scope.addUser = function() {
      UserSrv.addUser($scope.user).then(function(response) {
          $scope.users.push(response);
          console.log(response);
          $scope.user = {};
      })
  };

  $scope.removeUser = function(user) {
      UserSrv.removeUser(user).then(function(response) {
        $scope.users.splice($scope.users.indexOf(user), 1)
      })
  };

}]);