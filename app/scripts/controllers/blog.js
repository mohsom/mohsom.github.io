'use strict';

/**
 * @ngdoc function
 * @name personalApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the personalApp
 */
angular.module('personalApp')
  .controller('BlogCtrl', function ($scope,$http) {
    $scope.posts=[];
    $scope.init = function(){
      $('title').html('Blog');
      $scope.getPosts();
    };
    $scope.getPosts=function(){
      $http.get('json/posts.json').success(function(data){
        $scope.posts=data;
        $scope.posts.posts.reverse();
      });
    };
    $scope.init();
  });
