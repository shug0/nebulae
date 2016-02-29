NebulaeApp.controller('BrickCtrl', ['$scope', 'CategorySrv', 'SourceSrv', 'SourceFunctionSrv','BrickManagerSrv',
    function($scope, CategorySrv, SourceSrv, SourceFunctionSrv, BrickManagerSrv) {

        BrickManagerSrv.currentPart = "sources" ;

        $scope.$watch(function(){return BrickManagerSrv.currentPart}, function(newValue, oldValue) {
            $scope.currentPart = newValue ;
        });

    }
]);

'use strict';
