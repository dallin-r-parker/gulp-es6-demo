angular.module('devmtnTravel')
.directive('adventurerCard', function() {

      var arr1 = [1, 2];
      var arr2 = [3, 4];
      var arr3 = [...arr1, ...arr2];

  return {
    restrict: 'A',
    templateUrl: '../views/adventureCard.html',
    scope: {
      img: '@',
      title: '@',
      summary: '@'
    }
  }
})
