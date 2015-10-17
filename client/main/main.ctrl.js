angular.module('app')
  .controller('mainCtrl', ['$scope', '$location', '$anchorScroll', '$timeout', function($scope, $location, $anchorScroll, $timeout) {

    $scope.isActive = function (route) { 
        return route === $location.path();
    };

    $scope.scrollTo = function(id){
      $location.hash(id);
      $anchorScroll();
    };
    // $scope.clickMe = function() {
    //   $location.url('https://medium.com/@ARMackey');
    // };

    $scope.isPopped = false;

    $scope.openPop = function () {
      $scope.isPopped = true;
    };

    $scope.closePop = function () {
      $scope.isPopped = false;
    };

    $scope.skills = [{type:'Javascript', num:80, color:'#FFA25E'}, {type:'jQuery', num:80, color:'#5FFFAD'}, 
                    {type:'CSS3/HTLM5', num:95, color:'#BD73FF'}, {type:'Node/Express', num:75, color:'#FF4A00'},
                    {type:'SQL/NoSQL', num:75, color:'#007D5B'}, {type:'Awesome', num:99, color:'#A11000' }];

  }]);