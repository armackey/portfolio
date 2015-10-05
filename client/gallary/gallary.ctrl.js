angular.module('app')
  .controller('gallaryCtrl', ['$scope', '$http', '$interval',
    function ($scope, $http, $interval) {

      $scope.name ='allen';
      var self = this;
      self.hi = "bye";
      $scope.photos = [];

      if ($scope.photos.length === 0) {
        $scope.loading = 'loading... Some photos may NOT be safe for work!';
      }

      $interval(function() { 
        $http.get('/instagram').success(function (data) {
          
          while ($scope.photos.length !== 0) {
            $scope.photos.pop();
          }
          for (var i = 0; i < 5; i+=1) {
            $scope.photos.push(data.data[i].user);
            $scope.photos.push(data.data[i].images.low_resolution);
          }
          $scope.loading = '';
        });
    }, 5000);

    //   $interval(function() { 
    //     $http.get('/instagram').success(function (data) {
    //       for (var i = 0; i < 5; i+=1) {
    //         $scope.photos.push(data.data[i].user);
    //         $scope.photos.push(data.data[i].images.low_resolution);
    //       }
    //     });
    // }, 5000);
}]);