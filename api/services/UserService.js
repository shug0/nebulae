module.exports = {
  getUsers: function(next) {
    User.find().exec(function(err, users) {
      if(err) throw err;
      next(users);
    })
  },
  addUser: function(user, next) {
    User.create(user).exec(function(err, user) {
      if(err) throw err;
      next(user);
    })
  },
  removeUser: function(user, next) {
    User.destroy(user.id).exec(function(err, user) {
      if(err) throw err;
      next(user);
    })
  }
}