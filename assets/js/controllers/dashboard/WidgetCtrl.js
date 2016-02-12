'use strict';

NebulaeApp.controller('WidgetCtrl', ['$scope',
    function ($scope) {

        $scope.$watch('datas', function () {
            console.log($scope.datas);
        });
    }]);
