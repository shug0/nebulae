var bcrypt = require('bcryptjs');

module.exports = {

  create: function(password, next) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
        	sails.log(hash);
          	next(null, hash);
        });
    });
  }
 
}

