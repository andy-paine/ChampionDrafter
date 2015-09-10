angular.module('championdrafter')
	.factory('championlist', function($http) {
		/* get the champion list from Riot */
		return $http.get("https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=info&api_key=d6f62ab9-2199-4ac2-8a71-e164017a0c74");
	})

	.controller('championcontroller', ['$scope', '$rootScope', 'championlist', function($scope, $rootScope, championlist) {
		championlist.then(function(data) {
			$scope.championlist = toArray(data.data.data);
		}, function(response) {
			console.log("Error occurred getting champion list from Riot");
		});
		
		$scope.selectedchamp = { imageurl: "http://ddragon.leagueoflegends.com/cdn/5.16.1/img/champion/Viktor.png"};
		$scope.selectChampion = function(champ) {
			$scope.selectedchamp = champ;
		};

		$scope.lockIn = function() {
			$scope.championlist[$scope.championlist.indexOf($scope.selectedchamp)].imagetype = "grayedout";
			$rootScope.$broadcast('lockIn', $scope.selectedchamp);
		};
	}]);

function toArray(list) {
	var ret = [];
	for (item in list) {
		list[item].imageurl = "http://ddragon.leagueoflegends.com/cdn/5.16.1/img/champion/"+list[item].key+".png";
		list[item].imagetype = "championportrait";
		list[item].selectable = true;
		ret.push(list[item]);
	}
	return ret;
}