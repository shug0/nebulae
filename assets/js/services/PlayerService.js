hibossApp.service('PlayerService', function($http, $q) {
  return {
    'getPlayers': function() {
      var defer = $q.defer();
      $http.get('/player/').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addPlayer': function(player) {
      var defer = $q.defer();
      $http.post('/player/create', player).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removePlayer': function(player) {
      var defer = $q.defer();
      $http.post('/player/destroy', player).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }})