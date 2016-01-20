/**
 * User
 *
 * @module      :: Model
 * @description :: This is the base user model
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

    attributes: require('waterlock').models.user.attributes({
        firstname: 'string',
        lastname: 'string',
        country: 'string',
        city: 'string',

        role: {
            type: 'string',
            defaultsTo: 'user'
        },

        dashboard: {
            collection: 'dashboard',
            via: 'owner'
        },

        gravatar: 'string',

    }),

    beforeCreate: require('waterlock').models.user.beforeCreate,

    beforeUpdate: require('waterlock').models.user.beforeUpdate
};
