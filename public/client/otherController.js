'use Strict';

app.controller('otherController', function($scope, $http,constant,$location, $sce,$anchorScroll,$routeParams){
 $anchorScroll();
 showLoader();
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

  $scope.redirectToBookNow = function(){ 
    $location.path('/book-now')
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

    $scope.getFaqs = function(){
    $http.get(constant.BASE_URL+constant.FAQ_URL).then(function success(res){
               $scope.faqList = res.data.data; 
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
   $scope.getFaqs();

    $scope.getTermCondition = function(){
    $http.get(constant.BASE_URL+constant.TERMCONDITION_URL).then(function success(res){
               $scope.termCondList = res.data.data;
              $scope.data = $sce.trustAsHtml($scope.termCondList.description); 
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
   $scope.getTermCondition();

   $scope.getContactDetails = function(){
    $http.get(constant.BASE_URL+constant.CONTACT_DETAILS).then(function success(res){  
               $scope.contactsDetails = res.data.data;  
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
  $scope.getContactDetails();  
  $scope.getPackageByCategories = function(){
    $http.get(constant.BASE_URL+constant.PACKAGE_CATEGORIES_URL+'/'+$routeParams.id).then(function success(res){  
               $scope.packByCatdata = res.data.data;  
                hideLoader();
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
  $scope.getPackageByCategories();  

  

   
})