'use Strict';

app.controller('packageController', function($scope, $http,constant, $location,$routeParams){
 $scope.cityC = $routeParams.cityId
  $scope.getCountryStates = function(){
    $http.get(constant.BASE_URL+constant.PACKAGESBYCITY+'/'+$routeParams.cityId).then(function success(res){
               $scope.data = res.data.data; 
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
  $scope.getCountryStates();

  $scope.redirectToPackageDetails = function(titleName, id){
    var title = titleName.split(' ').join('-');
  $location.path('/holiday-details/'+title).replace()

  }
   
   
})