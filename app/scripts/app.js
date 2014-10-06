'use strict';

/**
 * @ngdoc overview
 * @name imageBrowserApp
 * @description
 * # imageBrowserApp
 *
 * Main module of the application.
 */
angular
  .module('imageBrowserApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
