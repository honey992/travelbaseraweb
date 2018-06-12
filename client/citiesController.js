'use Strict';

app.controller('citiesController', function($scope, $http,constant, $location){
 
  $scope.getCountryStates = function(){
    $http.get(constant.BASE_URL+constant.STATESBYCOUNTRY).then(function success(res){
               $scope.destinations_Menu = res.data.data; 
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
  $scope.getCountryStates();

  $scope.redirectToCities = function(name, code){
     
     $location.path('/cities/'+name);
  }
  
var queryString = $location.search();
$scope.getAllCity = function(){
	
  
}

   
})