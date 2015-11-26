'use strict';

NebulaeApp.controller('UserCtrl', ['$scope', '$rootScope', 'HomeSrv', function($scope, $rootScope, UserSrv) {
  $scope.user = {};
  $scope.users = [];

  UserSrv.getUsers().then(function(response) {
    $scope.users = response;
      console.log(response);
  });

}]);