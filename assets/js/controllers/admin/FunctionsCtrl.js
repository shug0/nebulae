NebulaeApp.controller('FunctionsCtrl', ['$scope', 'SourceFunctionSrv','CategorySrv','SourceSrv','BrickManagerSrv',
    function($scope, SourceFunctionSrv, CategorySrv, SourceSrv, BrickManagerSrv) {

        $scope.functions = [] ;

        SourceFunctionSrv.getFunctions().then(function(functionsFound){
            $scope.functions = functionsFound.plain();
        });

        $scope.$watch(function(){return CategorySrv.currentCategory}, function(newValue, oldValue) {
            if(typeof newValue == "undefined")
                return false;

            $scope.functions = [];
            CategorySrv.getSourcesByCategory(newValue.id).then(function(categoriesFound){
                var sources = categoriesFound.plain();
                angular.forEach(sources,function(value,key){
                    $scope.getFunctionsFromSource(value.id);
                });
            });
        });

        $scope.$watch(function(){return SourceSrv.currentSource}, function(newValue, oldValue) {
            if(typeof newValue == "undefined")
                return false;

            $scope.functions = [];
            $scope.getFunctionsFromSource(newValue.id);
        });

        $scope.getFunctionsFromSource = function(idSrc){
            SourceFunctionSrv.getFunctionsBySource(idSrc).then(function(functionsFound){
                angular.forEach(functionsFound,function(value,key){
                    $scope.functions.push(value);
                });
            });
        };

        $scope.changeFunction = function(f){
            console.log(f)
            SourceFunctionSrv.currentFunction = f ;
            BrickManagerSrv.currentPart = "functions" ;
        };


    }]);