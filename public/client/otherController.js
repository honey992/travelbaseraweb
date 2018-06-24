'use Strict';

app.controller('otherController', function($scope, $http,constant,$location, $sce,$anchorScroll){
 $anchorScroll();
 
 $scope.categories = function(){
    $http.get(constant.BASE_URL+constant.CATEGORIES).then(function success(res){
               $scope.categories = res.data.data;
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
  $scope.categories();  
  $scope.redirectToPackageDetails = function(titleName, id){
    var title = titleName.split(' ').join('-');
  $location.path('/holiday-details/'+title).replace()

  }

  $scope.redirectToPackages = function(name, code){
   $location.path('/package-category/'+code+'-'+name)
  }
 
 $scope.aboutus = function(){
    $http.get(constant.BASE_URL+constant.ABOUT_US).then(function success(res){
               $scope.aboutuse = res.data.data;
               $scope.about_data = $sce.trustAsHtml(res.data.data.description);
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
   $scope.aboutus(); 

   
})