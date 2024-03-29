NebulaeApp.service('AuthSrv', function($http, $q) {
    return {

        'login': function(user) {
            var defer = $q.defer();
            $http.post('/auth/login', user).success(function(resp){
                defer.resolve(resp);
            }).error( function(err) {
                defer.resolve(err);
            });
            return defer.promise;
        },

        'register': function(user) {
            var defer = $q.defer();
            $http.post('/auth/register', user).success(function(resp){
                defer.resolve(resp);
            }).error( function(err) {
                defer.resolve(err);
            });
            return defer.promise;
        },

        'logout': function(user) {
            var defer = $q.defer();
            $http.post('/auth/logout', user).success(function(resp){
                defer.resolve(resp);
            }).error( function(err) {
                defer.resolve(err);
            });
            return defer.promise;
        }

    }});