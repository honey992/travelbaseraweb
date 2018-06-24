'use Strict';

app.controller('searchController', function($scope, $http,constant, $location,$routeParams){
 $scope.searchQuery = $routeParams;  
var query = $scope.searchQuery;
  $scope.getPackageBySearch= function(){ 
    $http.get(constant.BASE_URL+constant.SEARCH_PACKAGE+'?source='+query.source+'&destination='+query.destination+'&category='+query.category).then(function success(res){
               $scope.data = res.data.data; 
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
  $scope.getPackageBySearch();

   $scope.redirectToPackageDetails = function(titleName, id){
    var title = titleName.split(' ').join('-');
    $location.path('/holiday-details/'+title);

  }
 
   
   
})