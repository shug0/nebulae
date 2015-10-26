'use strict';

var playerApp = angular.module('playerApp', ['ngRoute'])
playerApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/templates/player.html',
      controller: 'PlayerCtrl'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })
  }])
  //Register all MDL elements for proper 
  .run(function ($rootScope,$timeout) {
    $rootScope.$on('$viewContentLoaded', ()=> {
      $timeout(() => {
        componentHandler.upgradeAllRegistered();
      })
    })
  })


playerApp.controller('PlayerCtrl', ['$scope', '$rootScope', 'PlayerService', function($scope, $rootScope, PlayerService) {
  $scope.formData = {};
  $scope.players = [];

  PlayerService.getPlayers().then(function(response) {
    console.log(response);
    $scope.players = response;
  })

  $scope.addPlayer = function() {
    console.log($scope.formData);
    PlayerService.addPlayer($scope.formData).then(function(response) {
      console.log(response);
      $scope.players.push($scope.formData)
      $scope.formData = {};
    })
  }

  $scope.removePlayer = function(player) {
    console.log(player);
    PlayerService.removePlayer(player).then(function(response) {
      $scope.players.splice($scope.players.indexOf(player), 1)
      console.log(response);
    })
  }
}])
