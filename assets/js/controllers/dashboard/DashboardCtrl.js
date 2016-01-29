'use strict';

NebulaeApp.controller('DashboardCtrl', ['$scope', '$rootScope', '$parse', '$mdToast', 'DashboardSrv', 'APISrv', 'SourceSrv',
    function ($scope, $rootScope, $parse, $mdToast, DashboardSrv, APISrv, SourceSrv) {

        // Title
        $rootScope.templateName = "dashboard";

        $scope.templateState = "loading";

        $scope.gridsterOpts = {
            margins: [20, 20]
        };
        console.log("salt");

        DashboardSrv.getDashboardsByUser($rootScope.sessionUser.idUser).then(function(allDashboardsResponse){
            var allDashboards = allDashboardsResponse.plain();
            console.log(allDashboards);
            if(allDashboards.length==0)
                return false ;

            $scope.loadDashboard(allDashboards[0]);
        });

        $scope.loadDashboard = function(dashboard){
            console.log("The fucking first dashboard on the fucking user : "+dashboard.name);

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
        };

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
    }]);