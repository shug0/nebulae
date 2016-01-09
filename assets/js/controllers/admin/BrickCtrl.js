NebulaeApp.controller('BrickCtrl', ['$scope', 'CategorySrv', 'SourceSrv',
    function($scope, CategorySrv, SourceSrv) {

        $scope.categories = [] ;
        CategorySrv.getCategories().then(function(response){
            for(var i=0 ; i<response.length ; i++){
                $scope.categories.push( {id:response[i].id,name:response[i].name} );
            }
        });

        $scope.currentCategory = "" ;
        $scope.currentCatSrc = [] ;
        $scope.changeCategory = function(cat){
            if($scope.currentCategory==""){
                CategorySrv.getCategorieById(cat).then(function(response){
                    $scope.currentCategory = response.name ;
                    $scope.currentCatSrc = response.sources ;
                    console.log(response)
                });
            }else{
                $scope.currentCategory = "" ;
            }
        };

        $scope.currentSource = "";
        $scope.currentFunctions = [];
        $scope.changeSource = function(src){
            $scope.currentFunction = "" ;
            SourceSrv.getSourceById(src).then(function(response){
                $scope.currentSource = response ;
                $scope.currentFunctions = response.functions ;
                console.log($scope.currentFunctions)
            });
        };

        $scope.changeFunction = function(f){
            for(var i=0 ; i<$scope.currentFunctions.length ; i++){
                if(f == $scope.currentFunctions[i].id){
                    $scope.currentFunction = $scope.currentFunctions[i] ;
                    console.log($scope.currentFunction)
                }
            }
        };

    }
]);

'use strict';
