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
                },
                '2': {
                    id: '2',
                    name: 'Other',
                    widgets: [{
                        col: 1,
                        row: 1,
                        sizeY: 1,
                        sizeX: 2,
                        name: "Other Widget 1"
                    }, {
                        col: 1,
                        row: 3,
                        sizeY: 1,
                        sizeX: 1,
                        name: "Other Widget 2"
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

NebulaeApp.controller('CustomWidgetCtrl', ['$scope',
        function($scope, $mdDialog,$mdMedia) {

            $scope.remove = function(widget) {
                $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
            };

            $scope.openSettings = function(ev) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .clickOutsideToClose(true)
                        .title('This is an alert title')
                        .textContent('You can specify some description text in here.')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Got it!')
                        .targetEvent(ev)
                );
            };

        }
    ])

NebulaeApp.controller('WidgetSettingsCtrl', ['$scope', '$timeout', '$rootScope', '$modalInstance', 'widget',
        function($scope, $timeout, $rootScope, $modalInstance, widget) {
            $scope.widget = widget;

            $scope.form = {
                name: widget.name,
                sizeX: widget.sizeX,
                sizeY: widget.sizeY,
                col: widget.col,
                row: widget.row
            };

            $scope.sizeOptions = [{
                id: '1',
                name: '1'
            }, {
                id: '2',
                name: '2'
            }, {
                id: '3',
                name: '3'
            }, {
                id: '4',
                name: '4'
            }];

            $scope.dismiss = function() {
                $modalInstance.dismiss();
            };

            $scope.remove = function() {
                $scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
                $modalInstance.close();
            };

            $scope.submit = function() {
                angular.extend(widget, $scope.form);

                $modalInstance.close(widget);
            };

        }
    ])


