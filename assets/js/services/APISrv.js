NebulaeApp.service('APISrv', function(Restangular) {
    var
        widgetPattern       =   Restangular.all('widgetPattern');

    return {

        'getWidgetPattern': function(pattern) {
            return widgetPattern.get(pattern)
        },

        'getDataFromAPI': function(widgetPattern, source) {

            return Restangular
                .allUrl(source.name, source.options.url)
                .get(
                    widgetPattern.sourceFunction.name,
                    widgetPattern.sourceFunction.parameters
            );

        }

    }
});