djello.factory('MembersService', ['Restangular', function(Restangular) {

  var getAllMembers = function(){
    return Restangular.all('members').getList();
  };

  var addMemberToCard = function(member, card){
    console.log("member to card");
    return Restangular.all('members').post({members: {user_id: member.id, card_id: card.id}});
  };

return{
  addMemberToCard: addMemberToCard,
  getAllMembers: getAllMembers
}

}]);