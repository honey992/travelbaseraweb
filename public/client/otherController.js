'use Strict';

app.controller('otherController', function($scope, $http,constant,$location, $sce,$anchorScroll,$routeParams,commonFactory){
 $anchorScroll();
 showLoader();
 function splitByName(str){
  if(str){
    return str.split('-')[1]
  }
 };   
  var _params = $location.path(); 
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
    var _url = '';
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

  if(_params.indexOf('/states/') != -1){
    var statesList = localStorage.getItem('listOfStates')? JSON.parse(localStorage.getItem('listOfStates')): null;
    if(statesList){
      $scope.stateListdata = statesList
    } 
  }

   $scope.redirectToCities = function(country,name, code){ 
    var country = splitByName(country); 
    $location.path('/holidays/'+country.toLowerCase()+'/cities').search({id: code+'-'+name})
  };

  $scope.getThemes = function(){
    $http.get(constant.BASE_URL+constant.CATEGORIES).then(function success(res){
               $scope.themesList = res.data.data;
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
  if(_params.indexOf('/themes') != -1){
   $scope.getThemes(); 
 };
 $scope.redirectToPackages = function(name, code){
    $location.path('/package-category/'+code+'-'+name)
  };
  $scope.sendQueryInitiated = false;
  $scope.submitContactForm  = function(form){ 
    if($scope.contactForm.$valid){
      $scope.sendQueryInitiated = true;
        showLoader();
            var obj =  {
                        //to: "travelbaseraholidays@gmail.com", 
                        to: "surbhisingh612@gmail.com", 
                        subject: 'New Contact Query:BaseraHolidays.com', 
                        text: '<b>Name:</b> '+form.fname+ ' '+form.lname+ "<br /> <b>Email: </b>"+form.email+"<br /><b>Mobile: </b>"+form.mobile+" <br /><b>Query: </b>"+form.query
                       };
                       console.log("****surbhi singh",obj,constant.BASE_URL+constant.SENDEMAIL_URL);
          $http.post(constant.BASE_URL+constant.SENDEMAIL_URL, obj).then(function success(res){ 
            console.log(res,"result****")
                      $scope.errorPop = false;
                      $scope.successPop = true;
                      $scope.successMsg = res.data.message;
                      $scope.contact = {};
                      hideLoader();        
                  }, function errorCallback(err){
                    console.log(err,"error****")
                      $scope.errorPop = true;
                      $scope.successPop = false;
                     $scope.errorMsg = err.data.message;

                  }); 
  } else{
      alert('Fields are mandatory')
     }
} 

/**Get Job Openeing List  **/
$scope.getJobOpenings = function(){
    $http.get(constant.BASE_URL+constant.CAREER_URL).then(function success(res){
               $scope.careerList = res.data.data; 
               $scope.dd =  $sce.trustAsHtml($scope.careerList[0].job_description);
            //    $scope.careerList.forEach(function(o){
            //     o.job_details = $sce.trustAsHtml(o.job_description);
            //    });
            $scope.careerList.map(function(o){
                o.job_details =  $sce.trustAsHtml(o.job_description);
            })
            }, function errorCallback(err){
                $scope.errorPop = true;
                $scope.successPop = false;
                $scope.errorMsg = err.data.message;
      });
  };
  if(_params.indexOf('/career') != -1) $scope.getJobOpenings();   
   
})