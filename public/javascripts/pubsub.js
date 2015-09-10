angular.module('championdrafter')
	.service('Selector', [ '$rootScope' , function($rootScope) {
		var service = {
			select: function(champ, picknumber) {
				if (picknumber < 7) {
					/* banning */
					if (picknumber % 2 === 1) {
						/* blue banning */
						$rootScope.$broadcast('blueban', champ);
					} else {
						/* red banning */
						$rootScope.$broadcast('redban', champ);
					}
				} else {
					/* picking */
					if (picknumber % 4 === 2 || picknumber % 4 === 3) {
						/* blue picking */
						$rootScope.$broadcast('bluepick', champ);
					} else {
						/* red picking */
						$rootScope.$broadcast('redpick', champ);
					}
				}
			}
		};

		return service;
	}])

	.controller('pubsub', ['$scope', 'Selector', function($scope, Selector) {
		$scope.picknumber = 1;
		$scope.$on('lockIn', function(event, data) {
			Selector.select(data, $scope.picknumber);
			$scope.picknumber++;
		});
	}]);