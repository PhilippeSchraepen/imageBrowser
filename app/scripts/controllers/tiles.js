'use strict';

/**
 * @ngdoc function
 * @name imageBrowserApp.controller:TilesCtrl
 * @description
 * # TilesCtrl
 * Controller of the imageBrowserApp
 */
angular.module('imageBrowserApp')
  .controller('TilesCtrl', function ($scope) {
	$scope.visibleTiles = [];

	$scope.$on('switchFolder', function(event, folder) {
		$scope.visibleTiles = folder.tiles;
	});

  });
