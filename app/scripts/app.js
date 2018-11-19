'use strict';

/**
 * @ngdoc overview
 * @name angularnewApp
 * @description
 * # angularnewApp
 *
 * Main module of the application.
 */
//angular.module('angularnewApp', ['ui.bootstrap']);
angular
  .module('angularnewApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngAnimate',
    'ngSanitize',
    'ui.bootstrap',
    
   
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'EventCtrl',
        controllerAs: 'contact'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController',
        controllerAs: 'c'
      })
      .when('/displaylist', {
        templateUrl: 'views/diplayeventlist.html',
        controller: 'DisplayList',
        controllerAs: 'c'
      })
      .when('/webpage', {
        templateUrl: 'views/first.html',
        controller: 'WebPage',
        controllerAs: 'w'
      })
      
      .otherwise({
        redirectTo: '/'
      });
  });
  
  