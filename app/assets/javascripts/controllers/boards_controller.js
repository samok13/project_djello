djello.controller('BoardsCtrl', ['$scope', '$state', 'BoardsService', 'currentUser', '$stateParams', 'ListsService', 'CardsService', 'ModalService', function($scope, $state, BoardsService, currentUser, $stateParams, ListsService, CardsService, ModalService ) {


  $scope.formData = {};
  $scope.listFormData = {};
  $scope.allLists = [];
  $scope.newBoardForm = false;


  BoardsService.getBoardsForUser(currentUser).then(
    function(data) {
      console.log("boards for user");
      $scope.boards = data.boards;
    });

  //Only when user is on show page, get the current board, then get the lists for board
  if($stateParams.id){
    BoardsService.getBoard($stateParams.id)
    .then(function(board){
      console.log("get currentboard");
      $scope.currentBoard = board;

      ListsService.getListsForBoard($scope.currentBoard).then(function(lists){
        console.log("get lists for board");
        $scope.lists = lists;

        for(var i=0; i < $scope.lists.length; i++){
          CardsService.getCardsForList($scope.lists[i]);
        };
      });
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

  $scope.createListOnBoard = function(formIsValid, state){
    if(formIsValid){
      $scope.listFormData["board_id"] = $scope.currentBoard.id
      ListsService.createListOnBoard($scope.listFormData).then(function(list){
        $scope.lists.unshift(list);
        $state.go("boards.show", {id: $scope.currentBoard.id})
         $scope.listFormData = {};
      });
      state.newBoardForm = false;
    }
  }

  $scope.updateAndHideList = function(formIsValid, list, state){
    if(formIsValid){
      list.save();
      state.showListEdit = false;
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

  $scope.deleteList = function(listToDelete){
    listToDelete.remove();
    
    $scope.lists = _.reject($scope.lists, function(list){ return listToDelete.id === list.id});
  }

  $scope.showCard = function(card){
    ModalService.showModal({
      templateUrl: "templates/show_card.html",
      controller: "CardsCtrl"
    }).then(function(modal){
        modal.scope.card = card;
        modal.element.modal();
        modal.close.then(function(result) {
          $('.modal-backdrop').remove();
          console.log(result);
      });
    });
  }



}]);
