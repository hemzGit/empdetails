(function(){
   app.controller('HomeController', function($scope, $rootScope, $stateParams, $state, HomeService) {
    $rootScope.title = "AngularJS Login Sample";
    $scope.userId = sessionStorage.getItem("ID");
    //debugger;
    var userifo = HomeService.getUserInfo($scope.userId);
    if(userifo) {
      userifo.then(function(reply) {
          $scope.username = reply.data.name;
          $scope.role = reply.data.role;
      });
    }
  });
})();