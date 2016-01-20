'use strict';

NebulaeApp.controller('DashboardCtrl', ['$scope', '$rootScope', '$mdToast', 'DashboardSrv',
    function ($scope, $rootScope, $mdToast, DashboardSrv) {

        // Title
        $rootScope.templateName = "dashboard";

        $scope.gridsterOpts = {
            margins: [20, 20]
        };

        DashboardSrv.getDashboard($rootScope.sessionUser).then(
            function(dashboard) {
                $scope.dashboard = dashboard;
            },
            function errorCallback(data) {
                console.log(data);
            }
        );

    }]);