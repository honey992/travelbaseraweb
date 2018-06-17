'use Strict';

app.controller('packageDetailController', function($scope, $http,constant, $location,$routeParams, $sce){
 	
 	$scope.tab = 1;

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };
     $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };

    var titleName = ($routeParams.packageTitle || '').split('-').join(' ');
$scope.bannerImages = [];
    $scope.getPackageDetails = function(){
    $http.get(constant.BASE_URL+constant.PACKAGE_DETAILS+'/'+decodeURIComponent(titleName)).then(function success(res){
               $scope.data = res.data.data[0];  
               $scope.bannerImages =  $scope.data.images[0].package_images;
               $scope.packDescription = $sce.trustAsHtml($scope.data.description[0].package_description);
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
  $scope.getPackageDetails(); 
   $scope.bannerOptions = {
            stopOnHover: true,
            paginationSpeed: 600,
            items: 1,
            loop:true,
		    margin:0,
		    autoplay:true,
		    autoplayTimeout:3500,
		    Item_Width : 100,
		    nav:true,
		    navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        };
})