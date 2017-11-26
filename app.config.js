(function(){
    app.run(function($rootScope, $location, $state, LoginService) {
      $rootScope.$on('$stateChangeStart', 
        function(event, toState, toParams, fromState, fromParams){ 
            console.log('Changed state to: ' + toState);
        });
      
        if(!LoginService.isAuthenticated()) {
          $state.transitionTo('login');
        }
    });
    
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/login');
      
      $stateProvider
        .state('login', {
          url : '/login',
          templateUrl : 'login.html',
          controller : 'LoginController'
        })
        .state('home', {
          url : '/home',
          templateUrl : 'home.html',
          controller : 'HomeController'
        });
    }]);
})();