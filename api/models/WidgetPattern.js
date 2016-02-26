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

        widget_options: {
          type: "json"
        },

        description: {
            type: "string"
        },

        template: {
            type: "string",
            required: true
        },

        widgets: {
            collection: 'widget',
            via: 'pattern'
        },

        sourceFunction: {model: 'sourceFunction'}

    }
};

