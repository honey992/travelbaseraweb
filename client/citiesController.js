'use Strict';

app.controller('citiesController', function($scope, $http,constant, $location){
  function splitByName(str){
  if(str){
    return str.split('-')[1]
  }
 }
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
     
     $location.path('/cities/'+name).replace();
  }

$scope.queryString = $location.search();
$scope.getAllCity = function(){
	
	 $http.get(constant.BASE_URL+constant.CITYBySTATES+"/"+$scope.queryString.id).then(function success(res){
               $scope.citiesList = res.data.data; 
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  
}
$scope.getAllCity();

$scope.redirectToPackageView = function(val){  
$location.url('/holidays/'+splitByName(val.c_id)+'/'+splitByName(val.s_id)+'/'+val.ci_code+'-'+val.ci_name).replace();

}



   
})