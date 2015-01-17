angular.module('listing.filters', [])
  .filter('newsFilter', function() {
    return function(items, filters) {
      angular.forEach(items, function(item) {
        console.log(item);
      });
      return items;
    };
  });