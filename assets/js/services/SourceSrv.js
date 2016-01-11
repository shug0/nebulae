NebulaeApp.service('SourceSrv', function(Restangular) {
    var source    =   Restangular.all('source')

    return {

        'getSources': function() {
            return source.getList();
        },
        'getSourceById': function(src){
            return Restangular.one('source', src).get()
                /*.then(function(response){
                return response.plain();
            })*/
        },
        'addSource': function(srcParam) {
            return source.post(srcParam);
        },
        'putSource': function(src) {
            source.getList().then(function(sources) {
                var userWithId = _.find(sources, function(theSrc) {
                    return theSrc.id === src.id;
                });

                if(src.name!=""){ userWithId.name = src.name };
                if(src.description!=""){ userWithId.description = src.description };
                if(src.enabled!=""){ userWithId.enabled = src.enabled };
                if(src.list_options!=""){ userWithId.list_options = src.list_options };
                userWithId.put();
            });

        },
        'patchSource': function(id,elem) {
            // Non finis
            Restangular.one("source", id).get().then(function (src) {
                //user.firstName = "Ryan";
                src.patch([elem]); // sends just the name property
            });
        },
        'deleteSource': function(src) {
            return source.delete(src);
        }

    }
});