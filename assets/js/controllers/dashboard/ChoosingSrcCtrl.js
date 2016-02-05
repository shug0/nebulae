'use strict';

NebulaeApp.controller('ChoosingSrcCtrl', ['$scope', 'CategorySrv', 'SourceSrv',
    function ($scope, CategorySrv, SourceSrv) {

        CategorySrv.getCategories().then(function(categoriesFound){
            $scope.allCategories = categoriesFound.plain() ;
            console.log($scope.allCategories);
        });

        $scope.refreshSources = function(categoryId){
            if(categoryId==0){
                SourceSrv.getSources().then(function(sourcesFound){
                    $scope.sourcesByCategories = sourcesFound.plain() ;
                    CategorySrv.currentCategory = {id:-1} ;
                });
            }else{
               CategorySrv.getSourcesByCategory(categoryId).then(function(sourcesFound){
                   $scope.sourcesByCategories = sourcesFound.plain() ;
                   CategorySrv.currentCategory = {id: $scope.sourcesByCategories[0].category } ;
               });
            }
            console.log($scope.sourcesByCategories);
        };

        $scope.refreshSources(0);

        $scope.refreshFunctions = function(sourceId){
            SourceSrv.getSourceById(sourceId).then(function(sourceFound){

            });
        };

    }]);