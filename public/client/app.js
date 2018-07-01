"use strict";

var app = angular.module('travelBasera', ["ngRoute",'angular-jwt']);

 

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider.when("/", {
            templateUrl: "/pages/home.html",
            controller: "homeController"
        }).when("/about-us", {
            templateUrl: "/pages/about-us.html",
            controller: "homeController"
        }).when("/contact-us", {
            templateUrl: "/pages/contact-us-page.html",
            controller: "otherController"
        }).when("/holidays/:country/:state/:cityId", {
            templateUrl: "/pages/package-view.html",
            controller: "packageController"
        }).when("/holiday-details/:packageTitle", {
            templateUrl: "/pages/package-details.html",
            controller: "packageDetailController"
        }).when("/register", {
            templateUrl: "/pages/register.html",
            controller: "homeController"
        }).when("/login", {
            templateUrl: "/pages/login.html",
            controller: "homeController"
        }).when("/holidays/:country/cities", {
            templateUrl: "/pages/cities.html",
            controller: "citiesController"
        }).when("/package-category/:catId", {
            templateUrl: "/pages/packageByCategory.html",
            controller: "packByCategoryController"
        }).when("/career", {
            templateUrl: "/pages/careers.html",
            controller: "otherController"
        }).when("/faq", {
            templateUrl: "/pages/faq.html",
            controller: "otherController"
        }).when("/search", {
            templateUrl: "/pages/search.html",
            controller: "searchController"
        }).when("/terms-and-condition", {
            templateUrl: "/pages/termCondition.html",
            controller: "otherController"
        }).when("/book-now", {
            templateUrl: "/pages/book-now.html",
            controller: "otherController"
        })
        .otherwise({
            redirectTo: "/"
        });

        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: false
        // });
    }]);

app.directive("owlCarousel", function() {
    return {
        restrict: 'E',
        transclude: false,
        link: function(scope) {
            scope.initCarousel = function(element) {
                console.log('initCarousel');

                // provide any default options you want
                var defaultOptions = {};
                var customOptions = scope.$eval($(element).attr('data-options'));
                // combine the two options objects
                for (var key in customOptions) {
                    defaultOptions[key] = customOptions[key];
                }
                // init carousel
                var curOwl = $(element).data('owlCarousel');
                if (!angular.isDefined(curOwl)) {
                    $(element).owlCarousel(defaultOptions);
                }
                scope.cnt++;
            };
        }
    };
}).directive('owlCarouselItem', [
    function() {
        return {
            restrict: 'A',
            transclude: false,
            link: function(scope, element) {
                // wait for the last item in the ng-repeat then call init
                if (scope.$last) {
                    console.log('lst element');
                    scope.initCarousel(element.parent());
                }
            }
        };
    }
]);

app.filter('splitByName', function(){ 
  return function(str){
    if(str){
    return str.split('-')[1];
}
  }
})
// app.run(function ($rootScope, $location, $route,$document,jwtHelper) {
//   $rootScope.$on('$routeChangeStart',
//     function (event, next, current) { 
//         var userToken = sessionStorage.getItem('token');
//         if(next.$$route.originalPath == "/") $rootScope.hideOnLogin = true;
//         else $rootScope.hideOnLogin = false;

//         if(userToken){
//              $rootScope.loggedInUser = jwtHelper.decodeToken(userToken);
//              console.log( $rootScope.loggedInUser) 
//         }else{
//             $location.path('/');
//         }
//   });
// });