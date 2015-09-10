angular.module('championdrafter')
	.controller('redbanscontroller', ['$scope', function($scope) {
		$scope.picknumber = 0;

		$scope.bans = [ { imageurl: "http://ddragon.leagueoflegends.com/cdn/5.16.1/img/champion/Annie.png", name: "Ban Champion!"},
							{ imageurl: "http://ddragon.leagueoflegends.com/cdn/5.16.1/img/champion/Annie.png", name: "Ban Champion!" },
							{ imageurl: "http://ddragon.leagueoflegends.com/cdn/5.16.1/img/champion/Annie.png", name: "Ban Champion!" }];

		$scope.$on('redban', function(event, data) {
			$scope.bans[$scope.picknumber].name = data.name;
			$scope.bans[$scope.picknumber].imageurl = data.imageurl;
			$scope.picknumber++;
		});
	}]);