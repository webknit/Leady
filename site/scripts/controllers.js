angular.module('leadyCtrl.controllers', [])
	
	.controller('playersController', function($scope, leadyPlayersList) {

		$scope.players = leadyPlayersList.get();
		console.log($scope.players);
		
	});