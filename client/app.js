angular.module('app', ['ui.router', 'ui.bootstrap', 'angular-circular-progress'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'main/main.html',
        controller: 'mainCtrl'
      })
      .state('gallary', {
        url: '/gallary',
        templateUrl: 'gallary/gallary.html',
        controller: 'gallaryCtrl'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'partials/404.html'
      });
      
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
  });