NebulaeApp.controller('SourcesCtrl', ['$scope', 'SourceSrv','CategorySrv','BrickManagerSrv',
    function($scope, SourceSrv, CategorySrv, BrickManagerSrv) {

        $scope.sources = [] ;

        SourceSrv.getSources().then(function(sourcesFound){
            $scope.sources = sourcesFound.plain();
        });

        $scope.$watch(function(){return CategorySrv.currentCategory}, function(newValue, oldValue) {
            if(typeof newValue == "undefined")
                return false;

            CategorySrv.getSourcesByCategory(newValue.id).then(function(categoriesFound){
                $scope.sources = categoriesFound.plain();
            });
        });

        $scope.changeSource = function(source){
            SourceSrv.currentSource = source ;
            BrickManagerSrv.currentPart = "source" ;
        };


    }]);