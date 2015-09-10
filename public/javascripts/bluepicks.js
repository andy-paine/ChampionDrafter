angular.module('championdrafter')
	.controller('bluepickscontroller', ['$scope', function($scope) {
		$scope.picknumber = 0;

		$scope.picks = [ { imageurl: "http://ddragon.leagueoflegends.com/cdn/5.16.1/img/champion/Zac.png", name: "Select Champion!"},
							{ imageurl: "http://ddragon.leagueoflegends.com/cdn/5.16.1/img/champion/Zac.png", name: "Select Champion!", name: "Select Champion!"},
							{ imageurl: "http://ddragon.leagueoflegends.com/cdn/5.16.1/img/champion/Zac.png", name: "Select Champion!", name: "Select Champion!"},
							{ imageurl: "http://ddragon.leagueoflegends.com/cdn/5.16.1/img/champion/Zac.png", name: "Select Champion!", name: "Select Champion!"},
							{ imageurl: "http://ddragon.leagueoflegends.com/cdn/5.16.1/img/champion/Zac.png", name: "Select Champion!", name: "Select Champion!"}];

		$scope.$on('bluepick', function(event, data) {
			$scope.picks[$scope.picknumber].name = data.name;
			$scope.picks[$scope.picknumber].imageurl = data.imageurl;
			$scope.picknumber++;
		});
	}]);
