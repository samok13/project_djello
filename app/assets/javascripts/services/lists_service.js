djello.factory('ListsService', ['Restangular', function(Restangular) {

  var getListsForBoard = function(board) {
      return Restangular.all('lists').getList({board_id: board.id});
    };

    //firstAccount.getList("users", {query: params}).then(function(users) {


return{
  getListsForBoard: getListsForBoard
}

}]);