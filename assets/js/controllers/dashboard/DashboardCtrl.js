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
        $scope.$watch('widgetsDashboard', function(items){
            // one of the items changed
            console.log($scope.widgetsDashboard);
        }, true);

        DashboardSrv.getDashboardsByUser($rootScope.sessionUser.idUser).then(function(allDashboardsResponse){
            var allDashboards = allDashboardsResponse.plain();
            if(allDashboards.length==0) {
                return false;
            }
            DashboardSrv.userDashboards = allDashboards ;
            $scope.allDashboards = allDashboards ;
            $scope.loadDashboard(allDashboards[0]);
        });

        // Open popup for choosing new Widget
        $scope.choosingWidget = function(ev) {
            //$scope.widgetsDashboard.push({title:"coucou",status:false});
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
            DashboardSrv.currentDashboard = dashboard ;
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
                                           // WidgetSrc.allDatasWidgets[i] = data.plain();
                                           // console.log(WidgetSrc.allDatasWidgets[i]);
                                            $scope.widgetsDashboard[i].status = true ;
                                            $scope.widgetsDashboard[i].datas = data.plain() ;
                                        }
                                    );
                                    $scope.widgetsDashboard[i] = {
                                        title:dashboard.widgets[i].title,
                                        status:false,
                                        pattern:widgetPattern.template,
                                        col:2,
                                        row:0,
                                        sizeX:3,
                                        sizeY:2
                                    };
                                }
                            )
                        }
                    )
                })(i);
            }

       }; // End loadDashboard function...
   }]);