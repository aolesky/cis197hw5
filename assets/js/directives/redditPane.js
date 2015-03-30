// CIS 197 - Angular HW
// Author : Pranav Vishnu Ramabhadran
// Directive File to specify how a <reddit-pane> should behave
/* global myApp */

myApp.directive('redditPane', function() {
	return {
    // Fill out the appropriate properties for the object
    // You need to add in properties for controller, template and replace
    // Looking at the Angular Docs will prove useful here, especially
    // to understand what transclude does.
      restrict: 'E',
      transclude: true,
      scope: myApp.$scope,
    };
});
