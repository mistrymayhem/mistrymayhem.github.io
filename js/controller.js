angular.module('mySite')

.controller('homeController', function() {
})


.directive('work', function() {
    var Controller;
    Controller = function() {
      console.log(this.date);
    };

    return {
        restrict: "E",
        controller: Controller,
        controllerAs: 'work',
        scope: true,
        bindToController: {
          title: "@workTitle",
          pic: "@workPic",
          date: "@workDate"
        },
        templateUrl: "partials/work.html"
    }
});
