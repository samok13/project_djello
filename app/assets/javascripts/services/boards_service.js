djello.factory('BoardsService', ['Restangular', 'Auth', function(Restangular, Auth) {


  var getBoardsForUser = function(user) {
    console.log('boards for user');
    return Restangular.one('users', user.id).get();
  };

  var getBoard = function(boardId){
    return Restangular.one('boards', boardId).get();
  };


  var createBoard = function(boardObj) {
    return Restangular.all('boards').post(boardObj);
  };

  // var updateBoard = function(id) {
  //   return Restangular.one('boards', id).get();
  // }

  var deleteBoard = function(board){
    return Restangular.one('boards', board.id).remove();
  }



  return {
    getBoardsForUser: getBoardsForUser,
    createBoard: createBoard,
    deleteBoard: deleteBoard,
    getBoard: getBoard
    // updateBoard: updateBoard
  }




}]);