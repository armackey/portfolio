angular.module('app')
  .controller('gallaryCtrl', ['$scope', '$http', '$interval', '$timeout', '$anchorScroll',
    function ($scope, $http, $interval, $timeout, $anchorScroll) {

      // loop through photo collection
      // randomly select a photo to be flipped
      // set flipped to true
      // if flipped is true don't flip
      // 

      
      
      $scope.scrollTo = function(id){
        $location.hash(id);
        $anchorScroll();
      };

      $scope.instagram = [];

      $scope.imgur = [];
      $scope.loading = false;
      $scope.counter = 10;

      var countDown = function() {
        $scope.counter--;
        $timeout(countDown, 1000);
      };

      $timeout(countDown, 1000);

      // $interval(function() {
        $scope.counter = 11;
        var mytimeout = $timeout($scope.onTimeout, 1000);

        while ($scope.instagram.length !== 0 && $scope.imgur !== 0) {
          $scope.instagram.pop();
          $scope.imgur.pop();
        }

        $http.get('/imgur').success(function (data) {
          for (var j = 0; j < 1; j+=1) {
            $scope.imgur.push({url: data.data[j].link, flipped: false});
          }
          console.log($scope.imgur);
        });

        $http.get('/instagram').success(function (data) {
          for (var i = 0; i < 9; i+=1) {
            var randomNum = Math.floor(Math.random()* 10 + 1);
            $scope.instagram.push({username: data.data[i].user.username, flipped: false, url: data.data[i].images.low_resolution.url});
              // selects random photo
              if (i === randomNum) {
                console.log(i, 'i am i');
                (function (index) {
                  $timeout(function() {
                    $scope.instagram[index].flipped = true;
                    $scope.instagram[index + 4].flipped = true;
                    $scope.instagram[index - 2].flipped = true;  
                  }, 2000);
                })(i);
               
              }
              
          }
          console.log($scope.instagram);
        });


        $scope.loading = true;
    // }, 6000);
        
        // while ($scope.instagram.length !==0) {
        //   console.log('hello');
        //   for (var i = 0; i < $scope.instagram.length; i+=1) {
            
        //     var randomInstaPhoto = $scope.instagram[randomNum];
        //     console.log(randomInstaPhoto);
        //   }
        // }

        

}]);