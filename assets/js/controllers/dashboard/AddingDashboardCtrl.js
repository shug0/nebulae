'use strict';

NebulaeApp.controller('AddindDashboardCtrl', ['$scope','$rootScope','DashboardSrv',
    function ($scope,$rootScope,DashboardSrv) {

        $scope.postDashboard = function(){
            console.log("Heu ?");
            var dash = {
                name:$scope.newDashboard,
                owner:$rootScope.sessionUser.idUser
            };
            var back = DashboardSrv.addDashboard(dash).then(function(responseDashboard){
                var newDashboard = responseDashboard.plain();
                console.log(newDashboard);
                DashboardSrv.userDashboards.push(newDashboard);
                console.log(DashboardSrv.currentDashboard);
                DashboardSrv.currentDashboard = newDashboard ;
            });
        };


    }]);
