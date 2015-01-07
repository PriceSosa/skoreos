'use strict';

/**
 * @ngdoc overview
 * @name skoreosApp
 * @description
 * # skoreosApp
 *
 * Main module of the application.
 */
angular
  .module('skoreosApp', [
    'ngResource',
    'ngRoute',
    'ngTouch'
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
