NebulaeApp.controller('SourceCtrl', ['$scope', 'SourceSrv','BrickManagerSrv','CategorySrv','SourceFunctionSrv',
    function($scope, SourceSrv, BrickManagerSrv, CategorySrv,SourceFunctionSrv) {

        $scope.currentSource = {};
        $scope.action = "" ;
        $scope.$watch(function(){return SourceSrv.currentSource}, function(newValue, oldValue) {
            if(typeof newValue == "undefined")
                return false;

            $scope.currentSource = SourceSrv.currentSource ;
            if(typeof $scope.currentSource.id == "undefined"){
                $scope.action = "Ajouter" ;
            }else{
                $scope.action = "Mettre à jour" ;
            }
        });

        $scope.saveSource = function(){
            if(typeof $scope.currentSource.id == "undefined"){
                $scope.currentSource.category = CategorySrv.currentCategory.id ;
                console.log($scope.currentSource);
                SourceSrv.addSource($scope.currentSource);
            }else{
                SourceSrv.putSource($scope.currentSource);
            }
        };

        $scope.addSrcParam = function(){
            if(typeof $scope.currentSource.optionslist == "undefined"){
                $scope.currentSource.optionslist = [] ;
            }
            if( $scope.currentSource.optionslist.length > 0 &&
                ($scope.currentSource.optionslist[$scope.currentSource.optionslist.length-1].name == "" ||
                $scope.currentSource.optionslist[$scope.currentSource.optionslist.length-1].value == "" ) ){
                alert("Merci de finir de compléter les paramètres");
            }else{
                $scope.currentSource.optionslist.push({name:"",value:""});
            }
        };

        $scope.addFunction = function(){
            SourceFunctionSrv.currentFunction = {} ;
            BrickManagerSrv.currentPart = "functions" ;
        };


    }]);