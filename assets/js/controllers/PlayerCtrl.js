'use strict';

hibossApp.controller('PlayerCtrl', ['$scope', '$rootScope', 'PlayerService', function($scope, $rootScope, PlayerService) {
  $scope.formData = {};
  $scope.players = [];

  PlayerService.getPlayers().then(function(response) {
    $scope.players = response;
  })

  $scope.addPlayer = function() {
    console.log($scope.formData);
    PlayerService.addPlayer($scope.formData).then(function(response) {
      $scope.players.push(response)
      $scope.formData = {};
    })
  }

  $scope.removePlayer = function(player) {
    PlayerService.removePlayer(player).then(function(response) {
      $scope.players.splice($scope.players.indexOf(player), 1)
    })
  }
}]).run(function ($rootScope,$timeout) {
    $rootScope.$on('$viewContentLoaded', ()=> {
      $timeout(() => {
        componentHandler.upgradeAllRegistered();
      })
    })
  })
