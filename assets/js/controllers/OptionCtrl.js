NebulaeApp.controller('OptionCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.formTitle = "Ajouter une option" ;
    $scope.valid = "Ajouter" ;

    $scope.optionTypes = [ {name:"API", url:"templates/option/apiParametersForm.html"},
                           {name:"RSS", url:"templates/option/rssParametersForm.html"}
    ];
    $scope.optionMethods = [ {name:"GET", value:"get"},
        {name:"POST", value:"post"}
    ];
    $scope.optionMethod = $scope.optionMethods[0] ;

    $scope.optionType;
    $scope.option ;

    $scope.rssPages = [] ;

    $scope.$watch('optionType.url', function(newValue, oldValue) {
        angular.forEach($scope.optionTypes, function(value, key) {
            if(value.url==newValue){
                $scope.optionType.name = value.name ;
            }
        })
    });

    $scope.saveOption = function(){
        $scope.option.type = $scope.optionType.name ;
        $scope.option.parameters.pages = $scope.rssPages ;
        console.log($scope.option)
        //console.log($scope.rssPages)
    }

    $scope.addApiParameter = function(){
        console.log("Add parameter on API")
    }

    $scope.addPage = function(){

        $scope.rssPages.push({
            pageNumber: $scope.rssPages.length+1,
            url: ""
        });
    }


}]);

'use strict';
