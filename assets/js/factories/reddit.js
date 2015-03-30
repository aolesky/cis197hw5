// CIS 197 - Angular HW
// Author : Pranav Vishnu Ramabhadran
// Factory for the Reddit API request
/* global myApp */

/* Creating a Factory to handle making API calls to the Reddit server
   This is done by returning a function that creates an instance of
   the Factory.
*/
myApp.factory('Reddit', ['$http', function($http) {
  // Creates an instance of the Reddit Service
  // @params: String - query
  var Reddit = function (query) {
    // Instantiate all our variables
    // HINT: While there are other ways to do this, adding in 5
    // more variables might be a good idea.
    this.items = [];
  };

  // Function to be called to fetch more results
  Reddit.prototype.nextPage = function () {
    // Pulls in more results from the Reddit API (r/all subreddit) and updates variables correctly
    // Please ensure that your query to the Reddit API uses querystrings in the following order:
    // query, after, limit
    // HINT: Keep in mind that `this` will let you access the variables from above
  };

  return Reddit;
}]);
