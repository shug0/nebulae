'use strict';

NebulaeApp.controller('HomeCtrl', ['$scope', '$timeout','$rootScope', 'UserSrv', function($scope, $rootScope, HomeSrv,$timeout) {

        // premier idée
    /*
            $scope.gridsterOptions = {
                margins: [20, 20],
                resize:{
                    enabled:true
                }
            };

            $scope.dashboards = {
                '1': {
                    id: '1',
                    name: 'Home',
                    widgets: [{
                        col: 1,
                        row: 1,
                        sizeY: 1,
                        sizeX: 1,
                        name: "Widget 1"
                    }, {
                        col: 1,
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
    */
        // deuxième idée

            // paramétre wwidget
            var gridster = $(".gridster > ul").gridster({
                widget_margins: [5, 5],
                widget_base_dimensions: [100, 55],
                draggable: {
                    handle: 'header'
                },
                resize:{
                    enabled:true
                }
            }).data('gridster');

            // initialisation widgets
            var widgets = [
                ['<li><header>nom1</header></li>', 1, 2], // element html, largeur, hauteur
                ['<li><header>nom2</header></li>', 3, 2],
                ['<li><header>nom3</header></li>', 3, 2],
                ['<li><header>nom4</header></li>', 2, 1]
            ];

            // add widgets on gridster
            $.each(widgets, function(i, widget){
                gridster.add_widget.apply(gridster, widget)
            });

            // addd new widget
            $scope.addWidget2 = function(){
                //console.log(widgets);
                var new_widget = ['<li><header>new </header></li>', 1, 2];
                widgets.push(new_widget);
                gridster.add_widget.apply(gridster, new_widget);
            }

            // delete all widget
            $scope.deleteAll = function(){
                gridster.remove_all_widgets();
            }

}])

/*
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
*/
