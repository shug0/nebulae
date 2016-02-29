NebulaeApp.controller('CategoriesCtrl', ['$scope', 'CategorySrv','BrickManagerSrv',
    function($scope, CategorySrv, BrickManagerSrv) {

        // Init
        $scope.categories = [] ;
        $scope.newCat = "tete" ;
        $scope.inputCat = false ;

        // Get categories
        CategorySrv.getCategories().then(function(categoriesFound){
            $scope.categories = categoriesFound.plain();
        });

        $scope.changeCategory = function(category){
            CategorySrv.currentCategory = category;
            BrickManagerSrv.currentPart = "sources" ;
        };

        $scope.addCategory = function(){
            console.log($scope.newCat);
            if($scope.newCat==""){
                alert("Champe vide");
                return false;
            }

            CategorySrv.addCategory($scope.newCat).then(function(categoryCreated){
                var back = categoryCreated.plain() ;
                if(back.name==$scope.newCat){
                    $scope.categories.push( {id:back.id,name:back.name} );
                    $scope.inputCat = false ;
                    $scope.newCat = "" ;
                }else{
                    alert("Une erreur est survenue !");
                }
            });
        };

    }]);