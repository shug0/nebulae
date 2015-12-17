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
                serialize_params: function ($w, wgd) {
                    return {
                        id: parseInt($w.prop('id')),
                        col: wgd.col,
                        row: wgd.row,
                        size_x: wgd.size_x,
                    };
                },
                resize:{
                    enabled:true
                }
            }).data('gridster');

             // fonction qui récuperer le contennu d'un fichier
            var Fichier = function Fichier(fichier)
            {
                var obj;
                if(window.XMLHttpRequest) obj = new XMLHttpRequest(); //Pour Firefox, Opera,...
                    else
                        if(window.ActiveXObject) obj = new ActiveXObject("Microsoft.XMLHTTP"); //Pour Internet Explorer
                            else return(false);
                if (obj.overrideMimeType) obj.overrideMimeType("text/xml"); //Évite un bug de Safari
                    obj.open("GET", fichier, false);
                    obj.send(null);
                if(obj.readyState == 4) return(obj.responseText);
                    else return(false);
            }


            // param nom du template à charger
            // retourne un tableau [contennuhtml,largeur,hauteur]
            $scope.recuperationTemplate = function(nomTemplate,hauteur,largeur){
                if(nomTemplate == "social"){
                    var contennu = Fichier('../templates/widget/template1.html');
                    var templateWidget =[contennu,largeur,hauteur];
                }
                return(templateWidget);
            }

            var el = $scope.recuperationTemplate("social",1,2);
            var el1 = $scope.recuperationTemplate("social",3,2);
            var el2 = $scope.recuperationTemplate("social",2,2);
            var el3 = $scope.recuperationTemplate("social",2,1);

            // initialisation widgets grâce au template récupérer
            var widgets = [el,el1,el2,el3];
            //console.log(widgets);

            // add widgets on gridster
            $.each(widgets, function(i, widget){
                gridster.add_widget.apply(gridster, widget);
            });

            // addd new widget
            $scope.addWidget2 = function(){
                //console.log(widgets);
                var new_widget = ['<li><header>new </header></li>', 1, 2];
                widgets.push(new_widget);
                gridster.add_widget.apply(gridster, new_widget);
            };

            // delete all widget
            $scope.deleteAll = function(){
                gridster.remove_all_widgets();
            };

            $scope.save = function(){
                var s = gridster.serialize();
                $('#log').val(JSON.stringify(s));
            };

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
