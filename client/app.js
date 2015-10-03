angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'homeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'partials/about.html'
      })
      .state('gallary', {
        url: '/gallary',
        templateUrl: 'partials/gallary.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'partials/contact.html'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: 'partials/blog.html'
      })
      .state('404', {
        url: '/404',
        templateUrl: 'partials/404.html'
      });

      $urlRouterProvider.otherwise('/');
  });