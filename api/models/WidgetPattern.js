/**
 * Widget.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {

        name: {
            type: "string",
            required: true
        },

        description: {
            type: "string"
        },

        template: {
            type: "string",
            required: true
        },

        design: {
            type: "json",
            defaultsTo: null
        },

        widgets: {
            collection: 'widget',
            via: 'pattern'
        },

        sourceFunction: {model: 'sourceFunction'}

    }
};
