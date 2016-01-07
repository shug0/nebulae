'use strict';

NebulaeApp.controller('DashboardCtrl', ['$scope', '$rootScope', '$mdToast',
    function ($scope, $rootScope, $mdToast) {

        // Title
        $rootScope.templateName = "dashboard";

        $scope.gridsterOpts = {
            margins: [20, 20]
        };

        $scope.widgets = [
            {sizeX: 2, sizeY: 1, row: 0, col: 0, title: 'twitter'},
            {sizeX: 2, sizeY: 2, row: 0, col: 2, title: 'meteo'}

        ];

    }]);