NebulaeApp.service('AuthSrv', function($http, $q) {
    return {

        'login': function(user) {
            var defer = $q.defer();
            $http.post('/Auth/login', user).success(function(resp){
                defer.resolve(resp);
            }).error( function(err) {
                defer.reject(err);
            });
            return defer.promise;
        }

    }});