NebulaeApp.service('PatternSrv', function(Restangular) {
    var currentIdPattern = 0,
    p    =   Restangular.all('widgetpattern');

    return{

        'getPatterns': function() {
            return p.getList();
        },
        'getPatternsById': function(idPattern){
            return Restangular.one('widgetPattern', idPattern).get();
        },
        'putPattern': function(pat,source) {
            var theSrc = source || "" ;
            p.getList().then(function(patterns){
                var patternWithId = _.find(patterns, function(thePattern){
                    return thePattern.id === pat.id ;
                });
console.log(pat);
console.log(source);

                if(pat.name!=""){ patternWithId.name = pat.name }
                if(pat.description!=""){ patternWithId.description = pat.description }
                if(pat.template!=""){ patternWithId.template = pat.template }
                patternWithId.sourceFunction = theSrc ;
    console.log(patternWithId)
                patternWithId.put();
            });
        }

    }

});