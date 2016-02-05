NebulaeApp.service('SourceSrv', function(Restangular) {
    var source    =   Restangular.all('source'),
        currentSource = {} ;

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
                var sourceWithId = _.find(sources, function(theSrc) {
                    return theSrc.id === src.id;
                });
                console.log(src.optionslist)
                if(src.name!=""){ sourceWithId.name = src.name };
                if(src.description!=""){ sourceWithId.description = src.description };
                if(src.enabled!=""){ sourceWithId.enabled = src.enabled };
                if(src.optionslist!={}){ sourceWithId.optionslist = src.optionslist };
                sourceWithId.put();
            });
        },
        'deleteSource': function(src) {
            return source.delete(src);
        }

    }
});