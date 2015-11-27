'use strict';

NebulaeApp.controller('HomeCtrl', ['$scope', '$rootScope', 'UserSrv', function($scope, $rootScope, HomeSrv) {

    $scope.initGridster = function(){
        console.log("init");

            $scope.gridster = $(".gridster > ul").gridster({
                widget_margins: [10, 10],
                widget_base_dimensions: [400, 150],
                resize: {
                    enabled: true
                }
            }).data('gridster');

            var widgets = [
                ['<li>Widget Exemple</li>', 1, 2]
            ];


        $.each(widgets, function(i, widget){
            $scope.gridster.add_widget.apply($scope.gridster, widget)
        });

    };

    $scope.AddWindow = function() {
       // console.log("add");
        var fenetre = ['<li><div class=test>Nouveau Widget</div></li>', 1, 2];
        $scope.gridster.add_widget.apply( $scope.gridster,fenetre);
    };

    $scope.DeleteWindow = function($id){
        var fenetre = document.getElementById($id);
        console.log(fenetre);
        this.remove_widget.apply(fenetre);
    };

    $scope.initGridster();

}]);