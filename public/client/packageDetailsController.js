'use Strict';

app.controller('packageDetailController', function($scope, $http,constant, $location,$routeParams, $sce,$anchorScroll){
 	
 	$scope.tab = 1;
  $anchorScroll();
  showLoader();
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
               hideLoader();
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
		    autoplayTimeout:4000,
		    Item_Width : 100,
		    nav:true,
		    navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        };

    $scope.redirectToBookNow = function(){
      $location.path('/book-now')
    }

     $scope.submitForm  = function(form){ 
    if($scope.availForm.$valid){
        showLoader();
         
         var len = $scope.data._id.length;
        var id = $scope.data._id.substr(len-6, len);
            var obj =  {
                        to: "travelbaseraholidays@gmail.com", 
                        //to: "sharmasaurabh450@gmail.com", 
                        subject: 'New Enquiry:BaseraHolidays.com', 
                        text: '<b>Name:</b> '+form.name+ "<br />"+
                        " <b>Email: </b>"+form.email+"<br />"+
                        "<b>Mobile: </b>"+form.mobile+" <br />"+
                        "<b>Date: </b>"+form.from+ "-"+form.to+" <br />"+
                        "<b>Country: </b>"+form.country+" <br />"+
                        "<b>No. of Travellers: </b>"+form.travellers+" <br />"+
                        "<b>Package Id :</b>"+id+" <br />"+
                        "<b>Package Title: </b>"+$scope.data.title+" <br />"+
                        "<b>Query: </b>"+form.query
                       };
          $http.post(constant.BASE_URL+constant.SENDEMAIL_URL, obj).then(function success(res){ 
            $scope.errorPop = false;
                      $scope.successPop = true;
                      $scope.successMsg = res.data.message;
                      $scope.enquiry = {};
                      hideLoader();        
                  }, function errorCallback(err){
                      $scope.errorPop = true;
                      $scope.successPop = false;
                     $scope.errorMsg = err.data.message;

                  }); 
  } else{
      alert('Required fields are mandatory')
     }
}
})