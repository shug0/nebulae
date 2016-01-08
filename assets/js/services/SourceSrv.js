NebulaeApp.service('SourceSrv', function(Restangular) {
    var source    =   Restangular.all('source')

    return {

        'getSources': function() {
            return source.getList();
        },
        'getSourceById': function(src){
            return Restangular.one('source', src).get();
        },
        'addSource': function(srcParam) {
            return source.post(srcParam);
        },
        'putSource': function(src) {
            return source.put(src);
        },
        'deleteSource': function(src) {
            return source.delete(src);
        }

    }
});