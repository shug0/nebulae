NebulaeApp.service('SourceFunctionSrv', function(Restangular) {
    var f    =   Restangular.all('sourceFunction')

    return {

        'getFunctions': function() {
            return f.getList();
        },
        'getFunctionById': function(func){
            return Restangular.one('sourceFunction', func).get();
        },
        'addFunction': function(funcParam) {
            return f.post(funcParam);
        },
        'putFunction': function(func) {
            f.getList().then(function(functions){
                var functionWithId = _.find(functions, function(theFunct){
                    return theFunct.id === func.id ;
                })

                if(func.name!=""){ functionWithId.name = func.name }
                if(func.description!=""){ functionWithId.description = func.description }
                if(func.type!=""){ functionWithId.type = func.type }
                if(func.parameters!={}){ functionWithId.parameters = func.parameters }

                functionWithId.put();
            });
        },
        'deleteFunction': function(func) {
            return f.delete(func);
        }

    }
});