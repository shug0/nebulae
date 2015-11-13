module.exports = {

	addUser: function(user, next) {

		hash.create(user.password, function (err, hash) {
			if(err) throw err;
        	User.create({ 
				username: user.username, 
				email: user.email,
				password: hash
			}).exec(
			function(err, user) {
				if(err) throw err;
				next(user);
			});
		});

	}

}