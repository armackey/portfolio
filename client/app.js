angular.module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'main/main.html',
        controller: 'mainCtrl'
      })
      // .state('about', {
      //   url: '/about',
      //   templateUrl: 'partials/about.html'
      // })
      // .state('contact', {
      //   url: '/contact',
      //   templateUrl: 'partials/contact.html'
      // })
      // .state('blog', {
      //   url: '/blog',
      //   templateUrl: 'partials/blog.html'
      // })
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