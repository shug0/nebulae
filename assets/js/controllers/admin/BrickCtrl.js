NebulaeApp.controller('BrickCtrl', ['$scope', 'CategorySrv', 'SourceSrv', 'SourceFunctionSrv',
    function($scope, CategorySrv, SourceSrv, SourceFunctionSrv) {

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
                    console.log($scope.currentFunction)
                    //$scope.currentFunction.parameters.datas = [] ;
                }
            }
        };

        $scope.saveSource = function(){
            SourceSrv.putSource($scope.currentSource);
        };
        // Watch if switch value change
        $scope.$watch("currentSource.enabled", function(newValue, oldValue) {
            $scope.saveSource();
        },true);

        $scope.addSrcParam = function(){
            if(typeof $scope.currentSource.list_options == "undefined"){
                $scope.currentSource.list_options = [] ;
            }
            if( $scope.currentSource.list_options.length > 0 &&
                ($scope.currentSource.list_options[$scope.currentSource.list_options.length-1].name == "" ||
                $scope.currentSource.list_options[$scope.currentSource.list_options.length-1].value == "" ) ){
                alert("Merci de finir de compléter les paramètres");
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
        $scope.optionType = {name:"",url:"templates/admin/brick/function/noneForm.html"} // $scope.optionTypes[0]; //  ; // {name:"API", url:"templates/admin/brick/function/apiForm.html"} ;

        $scope.optionMethods = [
            {name:"GET",value:"get"},
            {name:"POST",value:"post"}
        ];
        $scope.allTypes = [
            {name:"String",value:"string"},
            {name:"Integer",value:"integer"}
        ];

        $scope.addFunction = function(){
            $scope.currentFunction = {source:$scope.currentSource.id, parameters:{}} ;
            $scope.optionType = {name:"",url:"templates/admin/brick/function/noneForm.html"};
        };

        $scope.saveFunction = function(){
            console.log($scope.currentFunction)
            if(typeof $scope.currentFunction.id != "undefined")
                SourceFunctionSrv.putFunction($scope.currentFunction);
            else
                SourceFunctionSrv.addFunction($scope.currentFunction);
        };

        // On function type change
        $scope.$watch('currentFunction.type', function(newValue, oldValue) {
            angular.forEach($scope.optionTypes, function(value, key) {
                if(value.name.toUpperCase() == newValue.toUpperCase() ){
                    $scope.optionType = {name:value.name,url:value.url};
                }
            });
        });

        // Ajout/Suppression de parametres/pages (API/RSS)
        $scope.addApiParameter = function(){
            if(typeof $scope.currentFunction.parameters.datas == "undefined"){
                $scope.currentFunction.parameters.datas = [] ;
            }
            if( $scope.currentFunction.parameters.datas.length > 0 &&
                ($scope.currentFunction.parameters.datas[$scope.currentFunction.parameters.datas.length-1].name == "" ||
                $scope.currentFunction.parameters.datas[$scope.currentFunction.parameters.datas.length-1].type == "" ) ){
                alert("Merci de finir de compléter les paramètres");
            }else{
                $scope.currentFunction.parameters.datas.push({name:"",type:"",required:true})
            }
        };
        $scope.addRssParameter = function(){
            if(typeof $scope.currentFunction.parameters.pages == "undefined"){
                $scope.currentFunction.parameters.pages = [] ;
            }
            if( $scope.currentFunction.parameters.pages.length > 0 &&
                $scope.currentFunction.parameters.pages[$scope.currentFunction.parameters.pages.length-1].url == ""){
                alert("Merci de finir de compléter les paramètres");
            }else{
                $scope.currentFunction.parameters.pages.push({
                    page: $scope.currentFunction.parameters.pages.length+2,    // +2 pour la page principale ajouter à cette nouvelle page
                    url:""
                });
            }
        };
        $scope.deleteDataParameter = function(index){
            $scope.currentFunction.parameters.datas.splice(index,1);
        };
        $scope.deleteRssPage = function(){
            $scope.currentFunction.parameters.pages.splice(-1,1);
        }


    }
]);

'use strict';
