/// <reference path="angular.min.js" />
/// <reference path="angular-route.min.js" />


//Module
var myApp = angular
            .module("myModule", [])
            .config(function ($routeProvider) {
                $routeProvider
                    .when("/home",{
                        templateUrl: "Templates/Home.html",
                        controller:  "homeController"
                    })
                    .when("/about",{
                        templateUrl: "Templates/About.html",
                        controller:  "aboutController"
                    })
                    .when("/resume",{
                        templateUrl: "Templates/Resume.html",
                        controller:  "resumeController"
                    })
            })
            .controller("homeController",function($scope, $location,$anchorScroll){
                var currentVariable = this;
                currentVariable.message = "Hello world";
            })
            
            