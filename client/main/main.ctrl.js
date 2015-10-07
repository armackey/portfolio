angular.module('app')
  .controller('mainCtrl', ['$scope', '$location', '$anchorScroll', '$timeout', function($scope, $location, $anchorScroll, $timeout) {

    $scope.isActive = function (route) { 
        return route === $location.path();
    };

    $scope.scrollTo = function(id){
      $location.hash(id);
      $anchorScroll();
    };

    $scope.skills = [{type:'Javascript', num:80, color:'#FFA25E'}, {type:'CSS3', num:80, color:'#5FFFAD'}, 
                    {type:'HTM5', num:95, color:'#BD73FF'}, {type:'Node', num:75, color:'#FF4A00'},
                    {type:'Database', num:75, color:'#007D5B'}, {type:'Cool-ness', num:99, color:'#A11000' }];

  }]);