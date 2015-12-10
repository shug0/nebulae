NebulaeApp.service('SourceSrv', function(Restangular) {

    var option = Restangular.all('option');
    var source = Restangular.all('source');

    return {

        'getSources': function() {
            return source.getList();
        },
        'addSource': function(src) {
            return source.post(src);
        },
        'updateSource': function(src) {
            return source.put(src);
        },
        'deleteSource': function(src) {
            return source.delete(src);
        },
        'getOptions': function(opt) {
            return option.getList(opt);
        },
        'addOption': function(opt) {
            return option.post(opt);
        },
        'updateOption': function(opt) {
            return option.put(opt);
        },
        'deleteOption': function(opt) {
            return option.delete(opt);
        }

    }});