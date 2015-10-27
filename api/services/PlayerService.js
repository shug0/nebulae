module.exports = {
  getPlayers: function(next) {
    Player.find().exec(function(err, players) {
      if(err) throw err;
      next(players);
    })
  },
  addPlayer: function(player, next) {
    Player.create(player).exec(function(err, player) {
      if(err) throw err;
      next(player);
    })
  },
  removePlayer: function(player, next) {
    Player.destroy(player.id).exec(function(err, player) {
      if(err) throw err;
      next(player);
    })
  }
}