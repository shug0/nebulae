'use strict';

NebulaeApp.controller('AuthCtrl', ['$scope', '$rootScope', 'AuthSrv', function($scope, $rootScope, AuthSrv) {
    $scope.user = {};

    $scope.login = function() {
        AuthSrv.login($scope.user).then(function(response) {
            console.log(response);
        })
    };

}]);