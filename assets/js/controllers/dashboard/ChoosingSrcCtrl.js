'use strict';

NebulaeApp.controller('ChoosingSrcCtrl', ['$scope', 'CategorySrv', 'SourceSrv', '$mdSidenav', 'SourceFunctionSrv', 'WidgetSrv', 'DashboardSrv',
    function ($scope, CategorySrv, SourceSrv, $mdSidenav, SourceFunctionSrv, WidgetSrc, DashboardSrv) {
// , $mdSidenav
        $scope.sourceChoose = false ;

        CategorySrv.getCategories().then(function(categoriesFound){
            $scope.allCategories = categoriesFound.plain();
            console.log($scope.allCategories);
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

        $scope.refreshFunctions = function(sourceId){
            SourceSrv.getSourceById(sourceId).then(function(sourceFound){
                var theSrc = sourceFound.plain();
                $scope.sourceName = theSrc.name ;
                $scope.functionsList = theSrc.functions ;
                $scope.sourceChoose = true ;
            });
        };


        /******* Sidenav *******/
        $scope.isSidenavOpen = false ;
        $scope.theFunction = {} ;
        $scope.widget = {} ;
        $scope.openFunction = function(functionId){
            SourceFunctionSrv.getFunctionById(functionId).then(function(functionFound){
                $scope.theFunction = functionFound.plain();
                console.log($scope.theFunction)
            });
            $mdSidenav('right').toggle();
        };

    /*
        $scope.$watch("isSidenavOpen",function(newValue,oldValue){

            if(!$mdSidenav('right').isOpen())
                $scope.theFunction = {} ;
        });
    */
        $scope.addWidget = function(){
            $scope.widget.dashboard = DashboardSrv.currentDashboard.id ;

            WidgetSrc.addWidget($scope.widget).then(function(responseWidget){
               var newWidget = responseWidget.plain();
                console.log("Widget ajouté !!!");
                console.log("Id : "+newWidget.id+" - Title ! "+newWidget.title)
            });
        };

    }]);