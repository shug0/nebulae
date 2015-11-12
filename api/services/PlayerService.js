module.exports = {
  addPlayer: function(player, next) {
    Player.create(player).exec(function(err, player) {
      if(err) throw err;
      sails.log("Added !");
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