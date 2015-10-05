angular.module('app')
  .controller('gallaryCtrl', ['$scope', '$http', '$interval',
    function ($scope, $http, $interval) {
      
      $scope.photos = [];
      $scope.loading = false;

      $interval(function() {

        while ($scope.photos.length !== 0) {
          $scope.photos.pop();
        }

        $http.get('/instagram').success(function (data) {
          
          for (var i = 0; i < 5; i+=1) {
            $scope.photos.push(data.data[i].user);
            $scope.photos.push(data.data[i].images.low_resolution);
          }
          $scope.loading = true;
        });

        $http.get('/imgur').success(function (data) {
          for (var j = 0; j < 3; j+=1) {
            $scope.photos.push({url:data.data[j].link});
          }
          console.log($scope.photos);
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