module.exports = {

    addUser: function (user, next) {

        hash.new(user.password, function (err, hash) {
            if (err) throw err;
            User.create({
                username: user.username,
                email: user.email,
                password: hash
            }).exec(
                function (err, user) {
                    if (err) throw err;
                    next(user);
                });
        });

    },

    login: function (userInput, next) {


        User.findOne({username: userInput.username}, function(err, user) {

            if (err) { next(err) }

            if (!user) {
                next(false);
            }
            else {
                hash.compare(userInput.password, user.password, next, function(res) {
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