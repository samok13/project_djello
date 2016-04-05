djello.controller('CardsCtrl', ['$scope','close', function($scope, close ) {

  //have access to $scope.card here
  //to do build out html of show card
  //have members controller (rails side)
  //same way I get list for board, I get members for card

  $scope.closeModal = function(){
    close("Success!");
  }


}]);