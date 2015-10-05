angular.module('app')
  .controller('gallaryCtrl', ['$scope', '$http', '$interval', '$timeout',
    function ($scope, $http, $interval, $timeout) {

      $scope.instagram = [];
      $scope.imgur = [];
      $scope.loading = false;
      $scope.counter = 10;

      var countDown = function() {
        $scope.counter--;
        $timeout(countDown, 1000);
      };

      $timeout(countDown, 1000);

      $interval(function() {

        var mytimeout = $timeout($scope.onTimeout,1000);

        $http.get('/imgur').success(function (data) {
          for (var j = 0; j < 3; j+=1) {
            $scope.imgur.push({url:data.data[j].link});
          }
          console.log($scope.imgur);
        });

        while ($scope.instagram.length !== 0 && $scope.imgur !== 0) {
          $scope.instagram.pop();
          $scope.imgur.pop();
        }

        $http.get('/instagram').success(function (data) {
          
          for (var i = 0; i < 6; i+=1) {
            $scope.instagram.push(data.data[i].user);
            $scope.instagram.push(data.data[i].images.low_resolution);
          }
          $scope.counter = 10;
          $scope.loading = true;
        });

    }, 10000);

}]);