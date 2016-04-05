djello.factory('CardsService', ['Restangular', function(Restangular) {

  var getCardsForList = function(list) {
      return Restangular.all('cards').getList({list_id: list.id}).then(function(cards){
        list.cards = cards;
      })
    };

  var createCardOnList = function(cardObj){
    return Restangular.all('cards').post(cardObj);
  };


return{
  getCardsForList: getCardsForList, 
  createCardOnList: createCardOnList
}

}]);