var djello = angular.module('djello', ['ui.router', 'restangular', 'Devise'])

//think about doing one api call per resource
//look at the lists in boards convection
//for doing cards in lists

djello.config(['RestangularProvider', function(RestangularProvider) {

  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');
  RestangularProvider.setDefaultHttpFields({
    "content-type": "application/json"
  });
}]);


djello.config(function(AuthProvider){
  //AuthProvider.baseUrl('http://localhost:3000/api/v1');
});


djello.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('boards');

  $stateProvider
    .state("boards", {
      url: "/boards",
      templateUrl: "templates/boards_index.html",
      controller: "BoardsCtrl",
      resolve: {
        currentUser: ['Auth', function(Auth) {
          return Auth.currentUser();
        }]
      }
    })
    .state("boards.new", {
      url: "/new",
      templateUrl: "templates/new_board.html"
    })
    .state("boards.show", {
      url: "/:id",
      templateUrl: "templates/show_board.html",
      controller: "BoardsCtrl"
    })
    



}]);