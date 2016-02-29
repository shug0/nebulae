NebulaeApp.controller('FunctionCtrl', ['$scope','SourceFunctionSrv', 'SourceSrv','BrickManagerSrv','CategorySrv','PatternSrv',
    function($scope, SourceFunctionSrv, SourceSrv, BrickManagerSrv, CategorySrv,PatternSrv) {

        $scope.currentFunction = {};
        $scope.action = "" ;
        $scope.$watch(function(){return SourceFunctionSrv.currentFunction}, function(newValue, oldValue) {
            if(typeof newValue == "undefined")
                return false;

            $scope.patternID = 0 ;
            $scope.currentFunction = SourceFunctionSrv.currentFunction ;
            if(typeof $scope.currentFunction.id == "undefined"){
                $scope.action = "Ajouter" ;

            }else{
                $scope.action = "Mettre à jour" ;
            }
        });

        PatternSrv.getPatterns().then(function(patternsFound){
            $scope.allTemplates = patternsFound.plain();
        });

        $scope.optionTypes = [
            {name:"API", url:"templates/admin/brick/function/apiForm.html"},
            {name:"RSS", url:"templates/admin/brick/function/rssForm.html"}
        ];
        $scope.optionType = {name:"",url:"templates/admin/brick/function/noneForm.html"};

        $scope.$watch('currentFunction.type', function(newValue, oldValue) {
            if(typeof $scope.currentFunction.type == "undefined")
                return false;

            angular.forEach($scope.optionTypes, function(value, key) {
                if(value.name.toUpperCase() == newValue.toUpperCase() ){
                    $scope.optionType = {name:value.name,url:value.url};
                }
            });
        });

        $scope.addApiParameter = function(){
            if(typeof $scope.currentFunction.parameters.datas == "undefined"){
                $scope.currentFunction.parameters.datas = [] ;
            }
            // Avant ajout on check si les dernièrs paramètres sont complet
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
            // Avant ajout on check si les dernièrs paramètres sont complet
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
        };

        $scope.saveFunction = function(){

            PatternSrv.getPatternsById($scope.patternID).then(function(patternFound){
                $scope.template = patternFound.plain() ;

                if(typeof $scope.currentFunction.id != "undefined"){
                    PatternSrv.putPattern($scope.template,$scope.currentFunction.id);
                    SourceFunctionSrv.putFunction($scope.currentFunction);
                }else{
                    $scope.currentFunction.source = SourceSrv.currentSource.id ;
                    console.log($scope.currentFunction);
                    SourceFunctionSrv.addFunction($scope.currentFunction).then(function(back){
                        var f = back.plain() ;
                        var idFunction = f.id ;
                        PatternSrv.putPattern($scope.template,idFunction);
                    });
                }
            });

         };

        $scope.optionMethods = [
            {name:"GET",value:"get"},
            {name:"POST",value:"post"}
        ];
        $scope.allTypes = [
            {name:"String",value:"string"},
            {name:"Integer",value:"number"}
        ];


    }]);