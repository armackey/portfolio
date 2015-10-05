angular.module('app')
  .controller('mainCtrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {

    $scope.isActive = function (route) { 
        return route === $location.path();
    };
    $scope.scrollTo = function(id){
      $location.hash(id);
      $anchorScroll();
    };
  }]);