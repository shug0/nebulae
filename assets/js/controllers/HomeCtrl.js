'use strict';

NebulaeApp.controller('HomeCtrl', ['$scope', '$timeout','$rootScope', 'UserSrv', function($scope, $rootScope, HomeSrv,$timeout) {

        $scope.gridsterOptions = {
                margins: [20, 20],
        };

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

            $scope.form = {};

            $scope.openSettings = function($event) {
               // console.log($scope.widget);
                $mdDialog.show({
                    templateUrl:'../templates/user/widget_settings.html',
                    locals: {
                        widget: $scope.widget
                    },
                    parent:angular.element(document.body),
                    targetEvent:$event,
                    clickOutsideToClose:true,
                    controller: WidgetSettingsCtrl
                });
                function WidgetSettingsCtrl(widget){
                    console.log(widget.name);
                   $scope.form = { // probléme de mettre les données dans le formulaire
                        name: widget.name,
                        sizeX: widget.sizeX,
                        sizeY: widget.sizeY,
                        col: widget.col,
                        row: widget.row
                    };
                }

            };

            $scope.dismiss = function() {
                $mdDialog.hide();
            };

            $scope.submit = function() {
                //angular.extend(widget, $scope.form);
                // todo sauvegarder du widget
                $mdDialog.hide();

            };
        }
    ])

