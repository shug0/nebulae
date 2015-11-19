'use strict';

var NebulaeApp = angular.module('NebulaeApp', ['ngRoute'])
NebulaeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    .when('/login/', {
      templateUrl: '/templates/login.html',
      controller: 'AuthCtrl'
    })
    .when('/user/', {
      templateUrl: '/templates/user.html',
      controller: 'UserCtrl'
    })
    .otherwise({
      redirectTo: '/login',
      caseInsensitiveMatch: true
    })
  }]).run(function () {
  var mdlUpgradeDom = false;
  setInterval(function() {
    if (mdlUpgradeDom) {
      componentHandler.upgradeDom();
      mdlUpgradeDom = false;
    }
  }, 200);

  var observer = new MutationObserver(function () {
    mdlUpgradeDom = true;
  });
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  /* support <= IE 10
   angular.element(document).bind('DOMNodeInserted', function(e) {
   mdlUpgradeDom = true;
   });
   */
});