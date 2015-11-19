
module.exports = {

    login: function (user, next) {

        User.findOne({username: user.username}, function (err, userFound) {

            if (err) {
                next(err)
            }

            if (!user) {
                next(false);
            }
            else {
                hash.compare(user.password, userFound.password, next, function (res) {
                    if (res) {
                        next(true);
                    }
                    else {
                        next(false);
                    }
                });
            }
        });
    }
};