(function(){
  app.service('LoginService', function($q, $http) {
    var isAuthenticated = false;
    var isAuthenticate = function(username,pass) {
      //debugger;
            var deferred = $q.defer();
            var serviceUrl = {
                method : 'GET',
                url: "./data/userAuthentication.json"
            };

            $http(serviceUrl)
                .then(function successCallback(response) {
                    userInfo = response.data;
                    console.log(username+response.data.ID)
                    console.log(pass+response.data.pass)
                    isAuthenticated = username === response.data.ID && pass === response.data.pass;
                    console.log(isAuthenticated);
                    if(isAuthenticated){
                      console.log("trueee");
                      sessionStorage.setItem("ID",username);
                      deferred.resolve(isAuthenticated);
                    }else{
                      console.log("falseee");
                      deferred.reject(isAuthenticated);
                    }
                }, function errorCallback(response) {
                    deferred.reject(isAuthenticated);
                });
            return deferred.promise;
    };
    return {
      isAuthenticated : isAuthenticate
    }
    
  });
})()