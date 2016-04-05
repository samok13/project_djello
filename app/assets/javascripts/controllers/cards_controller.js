djello.controller('CardsCtrl', ['$scope','close','MembersService', '$state', 'CardsService', function($scope, close, MembersService, $state, CardsService ) {

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

  //need access to currentcards

  $scope.addMemberToCard = function(member, card){
    MembersService.addMemberToCard(member, card).then(function(response){
      console.log("promise complete");
      card.members.push(response);
      //$state.go("card.show")
    })
  }
 

  $scope.createCardOnList = function(formIsValid, list){
    if(formIsValid){
      $scope.newCardData["list_id"] = list.id;
      CardsService.createCardOnList($scope.newCardData).then(function(card){
        $scope.list.cards.unshift(card);
        $scope.cardFormData = {};
        $scope.closeModal();
      });
    }
  };

  $scope.closeModal = function(){
    close("Success!");
  }


}]);