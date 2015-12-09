'use strict';

NebulaeApp.controller('HomeCtrl', ['$scope', '$timeout','$rootScope', 'UserSrv', function($scope, $rootScope, HomeSrv,$timeout) {


        // option de css pour la grille
        $(".gridster ul").gridster({
            widget_margins: [10, 10]
            //widget_base_dimensions: [400,800]
        });

        $scope.dashboards = {
            '1': {
                id: '1',
                name: 'Home',
                widgets: [{
                    col: 0,
                    row: 0,
                    sizeY: 1,
                    sizeX: 1,
                    name: "Widget 1"
                }, {
                    col: 2,
                    row: 1,
                    sizeY: 1,
                    sizeX: 1,
                    name: "Widget 2"
                }]
            }
        };

        $scope.clear = function() {
                $scope.dashboard.widgets = [];
            };

        $scope.addWidget = function() {
                $scope.dashboard.widgets.push({
                    name: "New Widget",
                    sizeX: 2,
                    sizeY: 1
                });
        };

        $scope.$watch('selectedDashboardId', function(newVal, oldVal) {
                if (newVal !== oldVal) {
                    $scope.dashboard = $scope.dashboards[newVal];
                } else {
                    $scope.dashboard = $scope.dashboards[1];
                }
            });

        // init dashboard
        $scope.selectedDashboardId = '1';
}])

NebulaeApp.controller('CustomWidgetCtrl', ['$scope','$mdDialog','$mdMedia',
    function($scope, $mdDialog,$mdMedia) {
        $scope.remove = function(index) {
            $scope.dashboard.widgets.splice(index,1);
        };

        $scope.openSettings = function(widget) {
            var formData = angular.copy(widget);
            //console.log($scope.form);
            $mdDialog.show({
                    templateUrl:'../templates/user/widget_settings.html',
                    locals: {
                        form: formData,
                        widget:widget
                    },
                    parent:angular.element(document.body),
                    clickOutsideToClose:true,
                    controller: WidgetSettingsCtrl
            });
            function WidgetSettingsCtrl($scope, form){
                $scope.form = form;
                //console.log($scope.form);
                $scope.dismiss = function() {
                    $mdDialog.hide();
                };
                $scope.submit = function() {
                    angular.extend(widget, $scope.form);
                    //console.log($scope.form);
                    // sauvegarder les modifications du widgets en base
                    $mdDialog.hide();
                };
            }
        };
    }
])

