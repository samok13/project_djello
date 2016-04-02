djello.controller('BoardsCtrl', ['$scope', '$state', 'BoardsService', 'currentUser', '$stateParams', 'ListsService',function($scope, $state, BoardsService, currentUser, $stateParams, ListsService ) {

  $scope.formData = {};
  $scope.allLists = [];

  BoardsService.getBoardsForUser(currentUser).then(
    function(data) {
      $scope.boards = data.boards;
    });

  //Only when user is on show page, get the current board, then get the lists for board
  if($stateParams.id){
    BoardsService.getBoard($stateParams.id)
    .then(function(board){

      $scope.currentBoard = board;
    })
    .then(function(){
      return ListsService.getListsForBoard($scope.currentBoard)
    })
    .then(function(lists){
      $scope.lists = lists;
    });
  }
  

  $scope.changeState = function(board) {
    if(board){
      $state.go('boards.show', { id: board.id })
    } 
  }

  $scope.createBoard = function(formIsValid) {
    if (formIsValid) {
      $scope.formData["user_id"] = currentUser.id;
      BoardsService.createBoard($scope.formData).then(function(board){
        $scope.boards.unshift(board);
        $state.go("boards.show", {id: board.id})
        $scope.formData = {};
      });
      
    }
  }

  $scope.deleteBoard = function(board){
    
   BoardsService.deleteBoard(board)
    .then(function(deletedBoard){
      for(var i = 0; i < $scope.boards.length; i++){
        if (deletedBoard.id === $scope.boards[i].id){
          $scope.boards.splice(i,1);
        }
      }
      $state.go("boards");
    })
  }



}]);
