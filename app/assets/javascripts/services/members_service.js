djello.factory('MembersService', ['Restangular', function(Restangular) {

  var getAllMembers = function(){
    return Restangular.all('members').getList();
  };

  var addMemberToCard = function(memberObj){
    console.log("member to card");
    return Restangular.all('members').post(memberObj);
    console.log(members);
  };

return{
  addMemberToCard: addMemberToCard,
  getAllMembers: getAllMembers
}

}]);