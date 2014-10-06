'use strict';

/**
 * @ngdoc function
 * @name imageBrowserApp.controller:SidebarCtrl
 * @description
 * # SidebarCtrl
 * Controller of the imageBrowserApp
 */
angular.module('imageBrowserApp')
  .controller('SidebarCtrl', function ($scope) {
  	$scope.activeIndex = 0;
	$scope.folders = [
		{'name': 'Cats', 'description': 'Pictures of cats', 'tiles': ['grumpy cat', 'funny cat', 'long cat', 'short cat']},
		{'name': 'Dogs', 'description': 'Pictures of dogs', 'tiles': ['funny dog', 'sad dog', 'big dog']},
		{'name': 'Birds', 'description': 'Pictures of birds', 'tiles': ['funny bird', 'small bird', 'big bird', 'funky bird', 'ugly bird', 'momma bird']},
		{'name': 'Hybrids', 'description': 'Pictures of hybrid animals', 'tiles': ['birddog', 'catdog', 'catbird']},
	];

	$scope.switchFolder = function(index){
		if(!isNaN(index)){
			var activeFolder = $scope.folders[index];
			$scope.activeIndex = index;
			$scope.$broadcast('switchFolder', activeFolder);
		} else {
			$scope.activeIndex = index;
		}
	}

	$scope.addFolder = function(){
		$scope.folders.push({'name': $scope.folderName, 'description': $scope.folderDescription, 'tiles': []});
	}

	$scope.showAll = function(){
		$scope.switchFolder('A');
	}

  });
