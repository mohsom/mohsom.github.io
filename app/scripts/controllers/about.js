'use strict';

/**
 * @ngdoc function
 * @name personalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the personalApp
 */
angular.module('personalApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.init = function(){
      $('title').html('About');
    };
    $scope.init();
  });
