NebulaeApp.service('WidgetSrv', function(Restangular) {
    var widget = Restangular.all('widget');

    return {

        'addWidget': function(theWidget){
            return widget.post(theWidget);
        }
    /*
        ,
        'getWidgetById': function(id){
            return Restangular.one('widget', id).get();
        },
        'getWidgetsByDashboard': function(dashboardId){
           // alert("category : "+typeof categoryId);
            return widget.get({widgets:dashboardId});
        },
        'putWidget': function(src) {
         /*
            widget.getList().then(function(widgets) {
                var widgetWithId = _.find(widgets, function(theWid) {
                    return theWid.id === src.id;
                });
                console.log(src.optionslist)
                if(src.name!=""){ widgetWithId.name = src.name };
                widgetWithId.put();
            });
          /*
        },
        'deleteWidget': function(src) {
            return widget.delete(src);
        }
    */

    }
});