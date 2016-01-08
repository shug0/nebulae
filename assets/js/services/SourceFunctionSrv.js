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
            return f.put(func);
        },
        'deleteFunction': function(func) {
            return f.delete(func);
        }

    }
});