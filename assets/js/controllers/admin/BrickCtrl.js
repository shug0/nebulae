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

        $scope.switch = true ;
        $scope.currentSource = {};
        $scope.currentSource.id = 99999 ;
        $scope.currentFunctions = [];
        $scope.changeSource = function(src){
            $scope.currentFunction = "" ;
            SourceSrv.getSourceById(src).then(function(response){
                $scope.currentSource = response.plain()
                $scope.currentFunctions = $scope.currentSource.functions ;
                $scope.switch = $scope.currentSource.enabled ;
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

        $scope.saveSource = function(){
            SourceSrv.putSource($scope.currentSource);
                /*.then(function(response){
                console.log(response);
                alert("Modificaiton cool");
            });*/
        };

/*        $scope.$watch('switch', function(newValue, oldValue) {
            SourceSrv.patchSource($scope.currentSource.id,newValue).then(function(response){
                console.log(response);
                alert("Modificaiton cool")
            });
        });
*/
        $scope.addSrcParam = function(){
            if( $scope.currentSource.list_options[$scope.currentSource.list_options.length-1].name == "" ||
                $scope.currentSource.list_options[$scope.currentSource.list_options.length-1].value == ""){
                alert("Merci de finir de compléter blablabla")
            }else{
                $scope.currentSource.list_options.push({name:"",value:""});
            }
        };

    }
]);

'use strict';
