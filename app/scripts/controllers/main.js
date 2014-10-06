'use strict';

/**
 * @ngdoc function
 * @name imageBrowserApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the imageBrowserApp
 */
angular.module('imageBrowserApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
