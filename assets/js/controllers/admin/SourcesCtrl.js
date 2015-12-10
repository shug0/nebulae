NebulaeApp.controller('SourcesCtrl', ['$scope', '$rootScope', '$mdToast', "$mdDialog", "$mdMedia",
    function($scope, $rootScope, $mdToast, $mdDialog, $mdMedia) {

        $scope.customFullscreen = $mdMedia('sm');
    // Title
    $rootScope.templateName = "adminDashboard";

        $scope.showOptionForm = function(ev) {
            $mdDialog.show({
                    controller: "OptionCtrl",
                    templateUrl: 'templates/option/optionForm.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true,
                    fullscreen: $mdMedia('sm') && $scope.customFullscreen
                })
                .then(function (answer) {
                    //$scope.status = 'You said the information was "' + answer + '".';
                }, function () {
                    //$scope.status = 'You cancelled the dialog.';
                });
        }
}]);

'use strict';
