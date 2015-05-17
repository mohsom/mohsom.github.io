'use strict';

/**
 * @ngdoc function
 * @name personalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the personalApp
 */
angular.module('personalApp')
  .controller('MainCtrl', function ($scope) {
    $scope.init = function(){
      $('title').html('Volodya Skalskyi');
    };
    $scope.init();
  });
