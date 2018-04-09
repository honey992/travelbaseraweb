"use strict";

var app = angular.module('travelBasera', ["ngRoute",'angular-jwt']);

 

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider.when("/", {
            templateUrl: "/pages/home.html"
        })
        .otherwise({
            redirectTo: "/"
        });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }]);

 

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