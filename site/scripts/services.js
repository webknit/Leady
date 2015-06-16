// Registering the services module
angular.module('leadyCtrl.services', [])

	.factory('leadyPlayersList', function () {

		var players = {
			"title": "Leady",
			"listing": [
				{
					"name": "Shane Prendergast",
		            "avatar": "avatar.png",
		            "points": 80,
		            "position": 1,
		            "previousPosition": 2
				},
				{
					"name": "Whane Prendergast",
		            "avatar": "avatar.png",
		            "points": 79,
		            "position": 2,
		            "previousPosition": 3
				},
				{
					"name": "BRian Prendergast",
		            "avatar": "avatar.png",
		            "points": 78,
		            "position": 3,
		            "previousPosition": 4
				}
	        ]
		}
		
		return {
			get: function () {
				return players;
			}
		}
	})
