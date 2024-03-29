/**
 * Compiles LESS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/importer.scss` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-scss
 */
module.exports = function(grunt) {

	grunt.config.set('sass', {
		dev: {
			options: {
            sourceMap: true
        	},
			files: [{
				expand: true,
				cwd: 'assets/styles/',
				src: ['main.scss'],
				dest: '.tmp/public/styles/',
				ext: '.css'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-sass');
};
