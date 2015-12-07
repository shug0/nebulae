'use strict';

NebulaeApp.controller('ReqCtrl', ['$scope', '$rootScope', 'ReqSrv', function($scope, $rootScope, ReqSrv) {


    //$scope.sendRequest = function(){
    //    console.log("In the sendRequest function")
    //    ReqSrv.test("Twitter")//.then(function(response){
    //    //    console.log(response);
    //    //});
    //};
    $scope.template = { name: "Formulaire Option", url: "templates/option/optionForm.html"}

}]);