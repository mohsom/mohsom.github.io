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
    $scope.init = function(){
      $('title').html('Blog');
    };
    $scope.init();
  });
