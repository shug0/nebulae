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
                  //  console.log(response)
                });
            }else{
                $scope.currentCategory = "" ;
            }
        };

        $scope.switch = true ;
        $scope.currentSource = {};
        $scope.currentSource.id = 0 ;
        $scope.currentFunctions = [];
        $scope.changeSource = function(src){
            $scope.currentFunction = "" ;
            SourceSrv.getSourceById(src).then(function(response){
                $scope.currentSource = response.plain()
                $scope.currentFunctions = $scope.currentSource.functions ;
                $scope.switch = $scope.currentSource.enabled ;
                //console.log($scope.currentSource);
            });
        };

        $scope.changeFunction = function(f){
            for(var i=0 ; i<$scope.currentFunctions.length ; i++){
                if(f == $scope.currentFunctions[i].id){
                    $scope.currentFunction = $scope.currentFunctions[i] ;
              //      console.log($scope.currentFunction)
                }
            }
        };

        $scope.saveSource = function(){
            SourceSrv.putSource($scope.currentSource);
        };

        $scope.$watch("currentSource.enabled", function(newValue, oldValue) {
            //console.log("enabled : "+$scope.currentSource.enabled);
            $scope.saveSource();
        },true);

        $scope.addSrcParam = function(){
            if( $scope.currentSource.list_options[$scope.currentSource.list_options.length-1].name == "" ||
                $scope.currentSource.list_options[$scope.currentSource.list_options.length-1].value == ""){
                alert("Merci de finir de compléter blablabla");
            }else{
                $scope.currentSource.list_options.push({name:"",value:""});
            }
        };

        ///// Function /////
        $scope.currentFunction = {} ;
        $scope.optionTypes = [
            {name:"API", url:"templates/admin/brick/function/apiForm.html"},
            {name:"RSS", url:"templates/admin/brick/function/rssForm.html"}
        ];
        $scope.optionType = $scope.optionTypes[0]; //{name:"API", url:"templates/admin/brick/function/apiForm.html"} ;

        $scope.optionMethods = [
            {name:"GET",value:"get"},
            {name:"POST",value:"post"}
        ];
/*
        $scope.$watch('optionType.url', function(newValue, oldValue) {
            angular.forEach($scope.optionTypes, function(value, key) {
                if(value.url==newValue){
                    //$scope.optionType.name = value.name ;
                }
            })
        });
*/
    }
]);

'use strict';
