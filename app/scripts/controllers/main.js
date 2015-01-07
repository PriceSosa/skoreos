'use strict';

/**
 * @ngdoc function
 * @name skoreosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the skoreosApp
 */
angular.module('skoreosApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ] 
    
  }]);
