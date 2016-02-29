NebulaeApp.controller('BrickManagerCtrl', ['$scope', 'CategorySrv',
    function($scope, CategorySrv) {

        $scope.categories = [] ;
        CategorySrv.getCategories().then(function(categoriesFound){
            $scope.categories = categoriesFound.plain();
        });


    }]);