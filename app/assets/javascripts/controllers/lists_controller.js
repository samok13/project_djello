djello.controller('ListsCtrl', ['$scope', '$state', 'BoardsService', 'currentUser', '$stateParams', 'ListsService', 'CardsService',function($scope, $state, BoardsService, currentUser, $stateParams, ListsService, CardsService ) {


  $scope.currentBoardId = BoardsService.currentBoardId;
  $scope.currentLists = ListsService.currentLists;

   $scope.updateList = function(list) {
    ListsService.updateList(list);
  }


}]);