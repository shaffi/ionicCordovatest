angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends',['$http', function( $http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'tamil lite', rUrl:'http://streaming.radionomy.com/Tlr-radio' },
    { id: 1, name: 'G.I. Joe', rUrl:'http://streaming.radionomy.com/Tlr-radio'},
    { id: 2, name: 'Miss Frizzle', rUrl:'http://streaming.radionomy.com/Tlr-radio' },
    { id: 3, name: 'Ash Ketchum', rUrl:'http://streaming.radionomy.com/Tlr-radio' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
}])

.factory('testdata',['$http', function( $http) {

  var awesomeThings = [];

    $http.get('http://pokkisham-letz.rhcloud.com/api/things').success(function(awesomeThings) {
      awesomeThings = awesomeThings;
    });

      return {
    all: function() {
      return awesomeThings;
    },
    get: function(thingId) {
      // Simple index lookup
      return awesomeThings[thingId];
    }
  }
}]);
