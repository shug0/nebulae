'use strict';

NebulaeApp.controller('AuthCtrl', ['$scope', '$rootScope', 'AuthSrv', function($scope, $rootScope, AuthSrv) {
    $rootScope.templateName = "login";

    $scope.user = {};

    $scope.login = function() {

        $('md-form').fadeOut();
        setTimeout(function(){
            $('md-progress-circular').fadeIn();
            $('#loginBox').addClass('circleContainer');
        }, 500);

        AuthSrv.login($scope.user).then(function(response) {
            console.log(response);
        })
    };

}]);