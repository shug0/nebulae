var bcrypt = require('bcryptjs');

module.exports = {

	new: function(password, next) {
		bcrypt.genSalt(10, function(err, salt) {
			bcrypt.hash(password, salt, function(err, hash) {
				next(null, hash);
			});
		});
	},

	compare: function(password, hash, next) {
		bcrypt.compare(password, hash, function(err, res) {
			next(res);
		});
	}

}

