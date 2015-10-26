module.exports = {
  getPlayers: function(next) {
    Player.find().exec(function(err, players) {
      if(err) throw err;
      next(players);
    })
  },
  addPlayer: function(playerVal, next) {
    console.log(playerVal);
    Player.create({value: playerVal}).exec(function(err, player) {
      if(err) throw err;
      next(player);
    })
  },
  removePlayer: function(playerVal, next) {
    Player.destroy({value: playerVal}).exec(function(err, player) {
      if(err) throw err;
      next(player);
    })
  }
}