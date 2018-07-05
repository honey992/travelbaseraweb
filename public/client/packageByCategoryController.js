'use Strict';

app.controller('packByCategoryController', function($scope, $http,constant, $location,$routeParams, $anchorScroll){
  $anchorScroll();
  showLoader();
 $scope.category = $routeParams.catId;
  $scope.getPackageByCategory= function(){ 
    $http.get(constant.BASE_URL+constant.BY_CATEGORY+'/'+$scope.category).then(function success(res){
               $scope.data = res.data.data; 
                hideLoader();
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
  $scope.getPackageByCategory();

  $scope.redirectToPackageDetails = function(titleName, id){
    var title = titleName.split(' ').join('-');
  $location.path('/holiday-details/'+title)

  }
 
   
   
})