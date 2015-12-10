NebulaeApp.controller('OptionCtrl', ['$scope', '$rootScope', 'SourceSrv', function($scope, $rootScope, SourceSrv) {

    // On récupère toutes les sources
    $scope.allSources = [] ;
    SourceSrv.getSources().then(function(response){
        for(var i=0 ; i<response.length ; i++){
            if(response[i].active){
                $scope.allSources.push( {id:response[i].id, name:response[i].name} );
            }
        }
    });

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

    // Ajout de parametre pour les API
    $scope.addApiParameter = function(){
        console.log("Add parameter on API")
    };

    // Ajout d'une page pour les RSS
    $scope.addPage = function(){
        $scope.rssPages.push({
            pageNumber: $scope.rssPages.length+1,
            url: ""
        });
    };

    // Ajouter l'option
    $scope.saveOption = function(){
        $scope.option.type = $scope.optionType.name ;
        $scope.option.parameters.pages = $scope.rssPages ;
        SourceSrv.addOption($scope.option).then(function(response){
            console.log(response)
            alert("Option ajoutée !!!")
        });
    };

}]);

'use strict';
