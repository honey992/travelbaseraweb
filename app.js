"use strict";

var app = angular.module('travelBasera', ["ngRoute",'angular-jwt']);
var abc = 1;

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

 
 