var cssFilesToInject = [
    'styles/**/*.css',
    '/bower_components/angular-material/angular-material.css',
    'bower_components/angular-gridster/dist/angular-gridster.min.css'
];

var jsFilesToInject = [
    'js/dependencies/sails.io.js',
    'js/dependencies/**/*.js',
    '/bower_components/angular/angular.min.js',
    '/bower_components/jquery/dist/jquery.js',
    '/bower_components/angular-route/angular-route.js',
    '/bower_components/angular-messages/angular-messages.js',
    '/bower_components/angular-aria/angular-aria.js',
    '/bower_components/angular-animate/angular-animate.js',
    '/bower_components/angular-material/angular-material.js',
    '/bower_components/angular-material-icons/angular-material-icons.min.js',
    '/bower_components/angular-animate/angular-animate.min.js',
    '/bower_components/lodash/lodash.min.js',
    '/bower_components/restangular/dist/restangular.min.js',
    'bower_components/javascript-detect-element-resize/jquery.resize.js',
    'bower_components/angular-gridster/dist/angular-gridster.min.js',
    'js/**/*.js',
    'js/**/*/*.js'
];

var templateFilesToInject = [
'templates/*.html'
];

module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});