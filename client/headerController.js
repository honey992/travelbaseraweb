'use Strict';

app.controller('headerController', function($scope, $http,constant, $location){
 function splitByName(str){
  if(str){
    return str.split('-')[1]
  }
 };
 var pathName = (window.location.pathname || '').split('/')[1];
  $scope.showHeader = false;
 if(pathName.toLowerCase() == 'holiday-details') $scope.showHeader = true;
 
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
  
  $scope.redirectToCities = function(country,name, code){ 
    var country = splitByName(country); 
    $location.path('/holidays/'+country.toLowerCase()+'/cities').search({id: code+'-'+name}).replace()
  }
   
})