'use Strict';

app.controller('homeController', function($scope, $http,constant,$location, $sce,$filter){
 
  $scope.banners = function(){
    $http.get(constant.BASE_URL+constant.BANNAR_URL).then(function success(res){
               $scope.bannerImages = res.data.data;
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
  $scope.banners();
   
 $scope.popularPackages = function(){
    $http.get(constant.BASE_URL+constant.POPULAR_PACKAGES).then(function success(res){
               $scope.popular = res.data.data;
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
  $scope.popularPackages(); 
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

   function createArray(num){
    var ar  = [];
    for(var i = 0;i<num;i++){
      ar.push(i);
    }
    return ar;; 
  }
$scope.testimonials = function(){
    $http.get(constant.BASE_URL+constant.TESTIMONIALS).then(function success(res){
               $scope.testimonialsData = res.data.data;
               $scope.testimonialsData.forEach(function(o){
                  o.ratingArray =  createArray(o.reviewer_rating);
               });  
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
  $scope.testimonials();

  $scope.redirectToPackageDetails = function(titleName, id){
    var title = titleName.split(' ').join('-');
  $location.path('/holiday-details/'+title)

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

 $scope.getDiscountPackages = function(){
    $http.get(constant.BASE_URL+constant.DISCOUNTED_URL).then(function success(res){
               $scope.discountPackages = res.data.data;
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
  $scope.getDiscountPackages();

$scope.searchPackage  = function(search){ 
  var date = $filter('date')(search.date, 'dd-MM-yyyy');
  alert(date)
  var searchUrl = decodeURIComponent('/search?source='+search.source+'&destination='+search.destination+'&date='+date);
  $location.url(searchUrl);
}

	    $scope.bannerOptions = {
            stopOnHover: true,
            paginationSpeed: 600,
            items: 1,
            loop:true,
		    margin:0,
		    autoplay:true,
		    autoplayTimeout:3000,
		    Item_Width : 100,
		    nav:true,
		    navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        };
          $scope.popularOptions  = {
            stopOnHover: true, 
            items: 3,
            loop:true,
		    margin:0,
		    autoplay:true,
		    autoplayTimeout:2500,
		    Item_Width : 100,
		    nav:true,
		    navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        };
       $scope.testimonialsOptions  = {
            stopOnHover: true, 
            items: 2,
            loop:true,
		    margin:0,
		    autoplay:true,
		    autoplayTimeout:3000,
		    Item_Width : 100,
		    nav:true,
		    navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        };

        $scope.discountSection = {
            stopOnHover: true, 
            items: 2,
            loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:5000,
        Item_Width : 100,
        nav:true,
        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        };

   
})