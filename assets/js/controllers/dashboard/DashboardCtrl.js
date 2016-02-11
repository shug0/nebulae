'use strict';

NebulaeApp.controller('DashboardCtrl', ['$scope', '$mdDialog', '$rootScope', '$parse', '$mdToast', 'DashboardSrv', 'APISrv', 'SourceSrv',
    function ($scope, $mdDialog, $rootScope, $parse, $mdToast, DashboardSrv, APISrv, SourceSrv) {

        // Title
        $rootScope.templateName = "dashboard";

        $scope.templateState = "loading";

        $scope.gridsterOpts = {
            margins: [20, 20]
        };

        $scope.widgetsDashboard = [] ;

        // Get all dashboard's user
/*        DashboardSrv.getDashboardsByUserTwo($rootScope.sessionUser.idUser).then(function(allDashboardsResponse){
            var allDashboards = allDashboardsResponse.plain();
            console.log(allDashboards)
        });
  */
        DashboardSrv.getDashboardsByUser($rootScope.sessionUser.idUser).then(function(allDashboardsResponse){
            var allDashboards = allDashboardsResponse.plain();
            console.log(allDashboards)
            if(allDashboards.length==0) {
                return false;
            }
            DashboardSrv.userDashboards = allDashboards ;
            $scope.allDashboards = allDashboards ;
            DashboardSrv.currentDashboard = allDashboards[0] ;
            $scope.loadDashboard(allDashboards[0]);
        });

        // Open popup for choosing new Widget
        $scope.choosingWidget = function(ev) {
            $mdDialog.show({
                templateUrl: 'templates/dashboard/choosingSource.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: true
            });
        };

        $scope.cancel = function(){
            $mdDialog.cancel();
        };


        $scope.loadDashboard = function(dashboard){
            // We delete all widgets present
            $scope.widgetsDashboard = [] ;

            for (var i = 0; i < dashboard.widgets.length; i++) {

                (function (i) {
                    APISrv.getWidgetPattern(dashboard.widgets[i].pattern).then(
                        function (widgetPattern) {
                            widgetPattern = widgetPattern.plain();
                            SourceSrv.getSourceById(widgetPattern.sourceFunction.source).then(
                                function(source) {
                                    source = source.plain();
                                    APISrv.getDataFromAPI(widgetPattern, source).then(
                                        function(data) {
                                            console.log(data.plain());
                                            console.log($scope.widgetsDashboard[i].status);
                                            $scope.widgetsDashboard[i].status = true ;
                                        }
                                    );
                                    $scope.widgetsDashboard[i] = {
                                        title:dashboard.widgets[i].title,
                                        status:false,
                                        pattern:widgetPattern.template
                                    };
                                }
                            )
                        }
                    )
                })(i);
            }



       }; // End loadDashboard function...
   }]);


/*
 DashboardSrv.getDashboard($rootScope.sessionUser).then(
 function (dashboard) {
 console.log(dashboard)
 for (var i = 0; i < dashboard.widgets.length; i++) {

 (function (i) {
 APISrv.getWidgetPattern(dashboard.widgets[i].pattern).then(
 function (widgetPattern) {

 SourceSrv.getSourceById(widgetPattern.sourceFunction.source).then(
 function(source) {

 APISrv.getDataFromAPI(widgetPattern, source).then(
 function(data) {
 console.log(data.plain());
 }
 );
 //dashboard.widgets[i].pattern = widgetPattern;
 //dashboard.widgets[i].status = true;
 }
 )
 }
 )
 })(i);
 }
 $scope.dashboard = dashboard;

 }, // CallBack Result DashboardSrv
 function errorCallback(data) {
 console.log(data);
 }
 ); // DashboardSrv
 */