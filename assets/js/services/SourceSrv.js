NebulaeApp.service('SourceSrv', function(Restangular) {
    var source    =   Restangular.all('source')

    return {

        'getSources': function() {
            return source.getList();
        },
        'getSourceById': function(src){
            return Restangular.one('source', src).get();
        },
        'getSourcesByCategory': function(categoryId){
            alert("category : "+typeof categoryId);
            return source.get({category:categoryId});
        },
        'addSource': function(srcParam) {
            return source.post(srcParam);
        },
        'putSource': function(src) {
            source.getList().then(function(sources) {
                var userWithId = _.find(sources, function(theSrc) {
                    return theSrc.id === src.id;
                });
                console.log(src.optionslist)
                if(src.name!=""){ userWithId.name = src.name };
                if(src.description!=""){ userWithId.description = src.description };
                if(src.enabled!=""){ userWithId.enabled = src.enabled };
                if(src.optionslist!={}){ userWithId.optionslist = src.optionslist };
                userWithId.put();
            });
        },
        'deleteSource': function(src) {
            return source.delete(src);
        }

    }
});