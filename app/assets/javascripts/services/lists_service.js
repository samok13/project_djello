djello.factory('ListsService', ['Restangular', function(Restangular) {

  var getListsForBoard = function(board) {
      return Restangular.all('lists').getList({board_id: board.id});
    };


  var createListOnBoard = function(listObj){
    return Restangular.all('lists').post(listObj);
  };

  var updateList = function(list){
    return Restangular.one('lists', list.id).patch();
  }


return{
  getListsForBoard: getListsForBoard,
  createListOnBoard: createListOnBoard,
  updateList: updateList
}

}]);