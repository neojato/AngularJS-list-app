angular.module('listing.filters', [])
  .filter('newsFilter', function() {
    return function(items, filters) {
      var filtered = [];
      angular.forEach(items, function(item) {
        var matchText = filters.query == "" || item.title.indexOf(filters.query) > -1 || item.description.indexOf(filters.query) > -1;
        if(matchText) {
          filtered.push(item);
        }
      });
      return filtered;
    };
  });