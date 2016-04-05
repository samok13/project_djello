djello.controller('CardsCtrl', ['$scope','close','MembersService',function($scope, close, MembersService ) {

  //have access to $scope.card here
  //to do build out html of show card
  //have members controller (rails side)
  //same way I get list for board, I get members for card

  //I need access to all users as members
 MembersService.getAllMembers().then(function(response){
  $scope.allMembers = response;}, function(error){
    console.log(error);
  })
  

  $scope.addMemberForm = false;

  $scope.addMemberToCard = function(member){
    console.log("cards contoller");
    MembersService.addMemberToCard(member).then(function(response){
      $scope.card.members.push(response);
      $state.go("card.show")
    })
  }

  $scope.closeModal = function(){
    close("Success!");
  }


}]);