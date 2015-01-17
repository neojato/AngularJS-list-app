angular.module('listing.module', ['listing.services'])
  .controller('listingCtrl', ['$scope', 'data', function($scope, data) {
    'use strict';
    $scope.title = 'Technology News';
    $scope.setData = function(data) {
      $scope.articles = data.articles;
      console.log($scope.articles);
    };
    data.get('scripts/data/articles.json', $scope.setData);
    $scope.viewLimit = 4;
  }]);