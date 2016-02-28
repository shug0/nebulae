NebulaeApp.service('APISrv', function(Restangular) {
    var
        widgetPattern       =   Restangular.all('widgetPattern');

    return {

        'getWidgetPattern': function(pattern) {
            return widgetPattern.get(pattern)
        },

        'getDataFromAPI': function(listdatas, source) {
            // http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=626e5c5c2ce6311e345e7fa2d59110dc

            var urlTarget = "" ;
            var options = "?" ;
            angular.forEach(source.optionslist, function(value, key) {
                if(value.name=="url"){
                    urlTarget = value.value;
                }else{
                    if(options!="?")
                        options += "&";
                    options += value.name+"="+value.value ;
                }
            });

            angular.forEach(listdatas, function(value, key) {
                if(options!="?")
                    options += "&";
                options += value.name+"="+value.value ;
            });

            return Restangular
                    .allUrl(source.name, urlTarget)
                    .get([options]);

        }

    }
});