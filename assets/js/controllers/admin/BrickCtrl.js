NebulaeApp.controller('BrickCtrl', ['$scope', 'CategorySrv', 'SourceSrv',
    function($scope, CategorySrv, SourceSrv) {

        $scope.categories = [] ;
        CategorySrv.getCategories().then(function(response){
            for(var i=0 ; i<response.length ; i++){
                $scope.categories.push( {id:response[i].id,name:response[i].name} );
            }
        });

        $scope.currentCategory ;
        $scope.currentCatSrc ;
        $scope.changeCategory = function(cat){
            console.log(cat);
            CategorySrv.getCategorieById(cat).then(function(response){
                $scope.currentCategory = response.name ;
                $scope.currentCatSrc = response.sources ;
            });
        };

    }
]);

'use strict';
