'use strict';

NebulaeApp.controller('UserCtrl', ['$scope', '$rootScope', 'UserService', function($scope, $rootScope, UserService) {
  $scope.user = {};
  $scope.users = [];

  UserService.getUsers().then(function(response) {
    $scope.users = response;
  });

  $scope.addUser = function() {
    UserService.addUser($scope.user).then(function(response) {
      $scope.users.push(response);
      console.log(response);
      $scope.user = {};
    })
  };

  $scope.removeUser = function(user) {
    UserService.removeUser(user).then(function(response) {
      $scope.users.splice($scope.users.indexOf(user), 1)
    })
  };

  $scope.login = function() {
    UserService.login($scope.user).then(function(response) {
      console.log(response);
    })
  };

}]);