NebulaeApp.service('UserService', function($http, $q) {
  return {
    'getUsers': function() {
      var defer = $q.defer();
      $http.get('/user/').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addUser': function(user) {
      var defer = $q.defer();
      $http.post('user/addUser', user).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removeUser': function(user) {
      var defer = $q.defer();
      $http.post('/user/destroy', user).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'login': function(user) {
      var defer = $q.defer();
      $http.post('/login', user).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }});