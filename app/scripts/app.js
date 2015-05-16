'use strict';

/**
 * @ngdoc overview
 * @name personalApp
 * @description
 * # personalApp
 *
 * Main module of the application.
 */
angular
  .module('personalApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
