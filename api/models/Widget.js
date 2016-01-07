/**
* Widget.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {

        title: 'string',
        pattern: {model: 'WidgetPattern'},
        gridster: {
            sizeX: 'integer',
            sizeY: 'integer',
            row: 'integer',
            col: 'integer'
        },
        provider: {model: 'SourceFunction'}

    }

};

