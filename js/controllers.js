var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('ListController', ['$scope', '$http','$routeParams','$location', function($scope, $http, $routeParams ,  $location) {

  $http.get('https://staging.investo2o.com/assetmanager-ws/api/v1/assets/getassets?query=aa&assetType=STK',
  {
    headers: {
      'access-token': 'eWEyOS5HbHNwQkRCVUJPX2d0UUNGUVR4Z1NKRTgzUkdCWHB2V1NCbWwtckNHWW5iS05NSjJLY0J5YU5CeU5QWFhTU3R5N1phdTctd250aW15dk5ZUFcySEt3ckpxNUdCNFhwQzYyNGVQcnlKSWlYa21Fa0xvQ0hIZ1kxZVRjaU0wJVVTRVIlMzc5',
       'agent':'agent',
       'cache-control':'no-cache',
       'user-id':'379',
       'user-ip':'0.0.0.0'
  }
}).success(function(data) {
  $scope.List = data;
});

$scope.value = function(e)
  {
    var key = $(e.target).text();
    $location.path('/details');
  }

}]);


artistControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('https://staging.investo2o.com/assetmanager-ws/api/v3/getassetdetails?asset=28433&type=STK&isCustom=false',
  {
    headers: {
      'access-token': 'eWEyOS5HbHNwQkRCVUJPX2d0UUNGUVR4Z1NKRTgzUkdCWHB2V1NCbWwtckNHWW5iS05NSjJLY0J5YU5CeU5QWFhTU3R5N1phdTctd250aW15dk5ZUFcySEt3ckpxNUdCNFhwQzYyNGVQcnlKSWlYa21Fa0xvQ0hIZ1kxZVRjaU0wJVVTRVIlMzc5',
       'agent':'agent',
       'cache-control':'no-cache',
       'user-id':'379',
       'user-ip':'0.0.0.0'
  }
  }).success(function(data) {
    $scope.details = data;

  });
}]);
