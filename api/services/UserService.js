module.exports = {

	addUser: function(user, next) {


		hash.create(user.password, function (err, password) {
        	sails.log(password);
		});

		sails.log(user);
		User.create({ 
			username: user.username, 
			email: user.email/*,
			password: hash.create(user.password)*/
		}).exec(
		function(err, user) {
			if(err) throw err;
			next(user);
		});
	}

	/*

	addPlayer: function(player, next) {
    Player.create(player).exec(function(err, player) {
      if(err) throw err;
      next(player);
    })
  },
  */

}