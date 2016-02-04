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
                });
            }else{
               CategorySrv.getSourcesByCategory(categoryId).then(function(sourcesFound){
                   $scope.sourcesByCategories = sourcesFound.plain() ;
               });
            }
        };

        $scope.refreshSources(0);

    }]);