NebulaeApp.service('SourceSrv', function($http, $q) {
    return {
        'addOption': function() {
            var defer = $q.defer();
            $http.get('/user/').success(function(resp){
                defer.resolve(resp);
            }).error( function(err) {
                defer.reject(err);
            });
            return defer.promise;
        }
    }});