/**
 * IndexController
 *
 * @module      :: Controller
 * @description	::
 *
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = {

    index: function (req, res) {
        res.view('index', { layout: 'index' });
    }

};