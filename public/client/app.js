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
        }).when("/states/:country", {
            templateUrl: "/pages/viewStates.html",
            controller: "otherController"
        }).when("/themes", {
            templateUrl: "/pages/themes.html",
            controller: "otherController"
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

app.directive("owlCarousel", function($timeout) {
    return {
        restrict: 'E',
        transclude: false,
        link: function (scope) {
            scope.initCarousel = function(element) {
                 $timeout(function () {
              // provide any default options you want
                var defaultOptions = {
                     
                };
                var customOptions = scope.$eval($(element).attr('data-options'));
                // combine the two options objects
                for(var key in customOptions) {
                    defaultOptions[key] = customOptions[key];
                }
                // init carousel
                $(element).owlCarousel(defaultOptions);
            },50);
            };
        }
    };
})
.directive('owlCarouselItem', [function() {
    return {
        restrict: 'A',
        transclude: false,
        link: function(scope, element) {
          // wait for the last item in the ng-repeat then call init
            if(scope.$last) {
                scope.initCarousel(element.parent());
            }
        }
    };
}]);
app.directive( 'accordion', function ()
{
    return {
        restrict  : 'EA',
        replace   : true,
        transclude: true,
        template  : '<div data-ng-transclude=""></div>',
        controller: function ()
        {
            var expanders = [];
            this.gotOpened = function ( selected_expander )
            {
                angular.forEach( expanders, function ( expander )
                {
                    if ( selected_expander != expander )
                        expander.showMe = false;
                } );
            };
            this.addExpander = function ( expander )
            {
                expanders.push( expander );
            };
        }
    };
} )
.directive( 'expander', function ()
{
    return {
        restrict  : 'EA',
        replace   : true,
        transclude: true,
        require   : '^accordion',
        scope     : {title: '@expanderTitle'},
        template  : '<div>' +
                    '<div class="title" data-ng-click="toggle()">{{title}}</div>' +
                    '<div class="body" data-ng-show="showMe" data-ng-transclude=""></div>' +
                    '</div>',
        link      : function ( scope, element, attrs, accordionController )
        {
            scope.showMe = false;
            accordionController.addExpander( scope );
            scope.toggle = function ()
            {
                scope.showMe = !scope.showMe;
                accordionController.gotOpened( scope );
            };
        }
    }
} )
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

app.factory('commonFactory', function() {
    
    var factory = {}; 

    factory.setStates = function(obj) {
          this.states = obj;
        }

    factory.getStates = function() {
            return this.states;
        }

    return factory;
});