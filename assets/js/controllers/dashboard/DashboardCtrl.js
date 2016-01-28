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

        DashboardSrv.getDashboard($rootScope.sessionUser).then(
            function (dashboard) {
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

                                            /*
                                             dashboard.widgets[i].pattern = widgetPattern;
                                             dashboard.widgets[i].status = true;
                                             */
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

    }]);