// CIS 197 - Angular HW
// Author : Pranav Vishnu Ramabhadran
// Controller file for the Reddit Search Tool
/* global myApp */

myApp.controller('redditController', ['$scope', 'Reddit', function($scope, Reddit) {
	// Create our Reddit Service
	$scope.reddit = new Reddit('');

	// Take the input from the searchbox and use as query.
	// You'll find the $watch service and ng-models from the DOM useful here
}]);
