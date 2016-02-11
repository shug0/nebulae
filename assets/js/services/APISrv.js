NebulaeApp.service('APISrv', function(Restangular) {
    var
        widgetPattern       =   Restangular.all('widgetPattern');

    return {

        'getWidgetPattern': function(pattern) {
            return widgetPattern.get(pattern)
        },

        'getDataFromAPI': function(widgetPattern, source) {
            // http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=626e5c5c2ce6311e345e7fa2d59110dc
            return Restangular
                    .allUrl('Weather', 'http://api.openweathermap.org/data/2.5/')
                    .get(["weather?appid=626e5c5c2ce6311e345e7fa2d59110dc&q=london,uk"]);
                // .allUrl(source.name, source.options.url)
            /*     .get(
                    widgetPattern.sourceFunction.name,
                    widgetPattern.sourceFunction.parameters
                );
            */
        }

    }
});