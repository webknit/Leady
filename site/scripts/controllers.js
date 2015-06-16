angular.module('leadyCtrl.controllers', [])
	
	.controller('playersController', function($scope, leadyPlayersList) {

		playersList = [];

		$scope.players = leadyPlayersList.get();

		$scope.playersList = $scope.players.listing;
		
		console.log($scope.playersList);
		
	});