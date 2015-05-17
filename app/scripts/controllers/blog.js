'use strict';

/**
 * @ngdoc function
 * @name personalApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the personalApp
 */
angular.module('personalApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
