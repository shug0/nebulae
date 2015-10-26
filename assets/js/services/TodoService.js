playerApp.service('PlayerService', function($http, $q) {
  return {
    'getPlayers': function() {
      var defer = $q.defer();
      $http.get('/player/getPlayers').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'addPlayer': function(player) {
      console.log(player);
      var defer = $q.defer();
      $http.post('/player/addPlayer', player).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
    'removePlayer': function(player) {
      console.log(player);
      var defer = $q.defer();
      $http.post('/player/removePlayer', player).success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    }
  }})