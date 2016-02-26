'use strict';

NebulaeApp.controller('DashboardCtrl', ['$scope', '$mdDialog', '$rootScope', '$parse', '$mdToast', 'DashboardSrv', 'APISrv', 'SourceSrv',
    function ($scope, $mdDialog, $rootScope, $parse, $mdToast, DashboardSrv, APISrv, SourceSrv) {

        // Title
        $rootScope.templateName = "dashboard";
        $scope.templateState = "loading";
        $scope.gridsterOpts = {
            //columns:10,
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

        // When new dashboard insert
        $scope.$watch(function(){return DashboardSrv.userDashboards;}, function (newValue) {
            $scope.allDashboards = newValue ;
            $scope.cancel();
        }, true);

        // When current dashboard change
        $scope.$watch(function(){return DashboardSrv.currentDashboard;}, function (newValue) {
            if(DashboardSrv.currentDashboard=={} || typeof newValue == "undefined")
                return false;

            $scope.crtdashboard = newValue ;
            $scope.widgetsDashboard = newValue.widgets ;
            $scope.cancel();
        }, true);

        $scope.loadDashboard = function(dashboard){
            DashboardSrv.currentDashboard = dashboard ;
            $scope.crtdashboard = dashboard ;
            // We delete all widgets present
            $scope.widgetsDashboard = [] ;
            if(typeof dashboard.widgets=="undefined")
                return false;

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
                                            // All datas loaded...
                                            $scope.widgetsDashboard[i].pattern = widgetPattern.template ;
                                            $scope.widgetsDashboard[i].status = true ;
                                            $scope.widgetsDashboard[i].datas = data.plain() ;
                                        }
                                    );
                                    $scope.widgetsDashboard[i] = {
                                        title:dashboard.widgets[i].title,
                                        index:i,
                                        idWidget:dashboard.widgets[i].id,
                                        status:false,
                                        pattern:"loading.html"
                                    };
                                }
                            )
                        }
                    )
                })(i);
            }
       }; // End loadDashboard function...

        $scope.addDashboard = function(ev){
            $mdDialog.show({
                templateUrl: 'templates/dashboard/addDashboard.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: true
            });
        };

        $scope.editWidget = function(widgetId){
            alert("Edition du Widget !")
        };

        $scope.removeWidget = function(index,widgetId){
            $scope.widgetsDashboard.splice(index,1);
        }

   }]);