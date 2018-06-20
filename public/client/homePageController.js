'use Strict';

app.controller('homeController', function($scope, $http,constant){
 

  $scope.banners = function(){
    $http.get(constant.BASE_URL+constant.BANNAR_URL).then(function success(res){
               $scope.bannersList = res.data.data;
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
  $scope.banners();
  
$scope.bannerImages = [
                        {imageUrl:"https://newevolutiondesigns.com/images/freebies/city-wallpaper-5.jpg"},
                        {imageUrl:"https://newevolutiondesigns.com/images/freebies/city-wallpaper-preview-1.jpg"},
                        {imageUrl:"dist/images/hero-image.jpg"}
                      ];
 
 $scope.popularData = [];
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

$scope.testimonials = function(){
    $http.get(constant.BASE_URL+constant.TESTIMONIALS).then(function success(res){
               $scope.testimonialsData = res.data.data;
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
  $scope.testimonials();
// $scope.testimonialsData = [{
// 	image:"dist/images/testimonial-2.jpg",
// 	reviewer_name:'Kathy R. Burroughs',
// 	title:'Had an amazing time and very good !!',
// 	content:'“Elementum naon tellus sit amet ultricies. In nec elit velit. Nullam luctus efficitur urna, a accumsan nunc varius nec.”'
// },{
// 	image:"dist/images/testimonial-1.jpg",
// 	reviewer_name:'Kathy R. Burroughs',
// 	title:'Had an amazing time and very good !!',
// 	content:'“Elementum naon tellus sit amet ultricies. In nec elit velit. Nullam luctus efficitur urna, a accumsan nunc varius nec.”'
// }];

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
})