'use strict';

NebulaeApp.controller('ChoosingSrcCtrl', ['$scope','CategorySrv', 'SourceSrv', '$mdSidenav', 'SourceFunctionSrv', 'WidgetSrv', 'DashboardSrv','PatternSrv','WidgetSrv',
    function ($scope,CategorySrv, SourceSrv, $mdSidenav, SourceFunctionSrv, WidgetSrc, DashboardSrv,PatternSrv,WidgetSrv) {
// , $mdSidenav
        $scope.sourceChoose = false ;

        CategorySrv.getCategories().then(function(categoriesFound){
            $scope.allCategories = categoriesFound.plain();
            //console.log($scope.allCategories);
        });

        $scope.refreshSources = function(categoryId){
            if(categoryId==0){
                SourceSrv.getSources().then(function(sourcesFound){
                    $scope.sourcesByCategories = sourcesFound.plain();
                    CategorySrv.currentCategory = {id:-1} ;
                });
            }else{
               CategorySrv.getSourcesByCategory(categoryId).then(function(sourcesFound){
                   $scope.sourcesByCategories = sourcesFound.plain() ;
                   CategorySrv.currentCategory = {id: $scope.sourcesByCategories[0].category } ;
               });
            }
            $scope.sourceChoose = false ;
        };

        $scope.refreshSources(0);

        $scope.patternsList = [] ;
        $scope.refreshPatterns = function(sourceId){
            SourceSrv.getSourceById(sourceId).then(function(sourceFound){
                var theSrc = sourceFound.plain();
                SourceSrv.currentSource = theSrc ;
                //console.log(sourceFound);
                angular.forEach(theSrc.functions, function(value, key) {
                    SourceFunctionSrv.getFunctionById(value.id).then(function(theFunction){
                        var func = theFunction.plain();
                        console.log(func);
                        SourceFunctionSrv.getPatternsByFunction(func.id).then(function(allPatterns){
                            var patterns = allPatterns.plain();
                            angular.forEach(patterns,function(value,key){
                                value.function = func.id ;
                                $scope.patternsList.push(value);
                            });
                            //console.log($scope.patternsList);
                            $scope.sourceName = theSrc.name ;
                            $scope.sourceChoose = true ;
                        });
                    });
                });
            });
        };


        /******* Sidenav *******/
        $scope.isSidenavOpen = false ;
        $scope.theFunction = {} ;
        $scope.widget = {} ;
        $scope.openFunction = function(functionId,patternId){
            SourceFunctionSrv.getFunctionById(functionId).then(function(functionFound){
                PatternSrv.currentIdPattern = patternId ;
                $scope.theFunction = functionFound.plain();
                console.log($scope.theFunction)
            });
            $mdSidenav('right').toggle();
        };

        $scope.preferences = {} ;
        $scope.addWidget = function(){
            $scope.widget.dashboard = DashboardSrv.currentDashboard.id ;
            $scope.widget.pattern = PatternSrv.currentIdPattern ;
            $scope.widget.preferences = [] ;

            angular.forEach($scope.preferences, function(value, key) {
                $scope.widget.preferences.push({name:key,value:value});
            });

            WidgetSrc.addWidget($scope.widget).then(function(responseWidget){
               var newWidget = responseWidget.plain();
                if(typeof DashboardSrv.currentDashboard.widgets == "undefined"){
                    DashboardSrv.currentDashboard.widgets = newWidget ;
                }else{
                    DashboardSrv.currentDashboard.widgets.push(newWidget);
                }
                WidgetSrv.newWidget = true ;
            });
        };

    }]);