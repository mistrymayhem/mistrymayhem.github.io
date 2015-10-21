angular.module('mySite', [
	'ui.router',
])


angular.module("mySite").config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      controller: "homeController as home",
      templateUrl: "index.html"
    })
}]);
