// Registering the services module
angular.module('leadyCtrl.services', [])

	.factory('leadyPlayersList', function () {

		var players = {
	        1: {
	            "name": "Shane Prendergast",
	            "avatar": "avatar.png",
	            "points": 80,
	            "position": 1,
	            "previousPosition": 2,

	        },
	        2: {
	            "name": "Whane Prendergast",
	            "avatar": "avatar.png",
	            "points": 80,
	            "position": 1,
	            "previousPosition": 2,

	        },
	        3: {
	            "name": "Brain Prendergast",
	            "avatar": "avatar.png",
	            "points": 80,
	            "position": 1,
	            "previousPosition": 2,

	        }
		}
		
		return {
			get: function () {
				return players;
			}
		}
	})
