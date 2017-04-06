'use strict';
var sdpNok360 = angular.module('sdpNok360', ['ngRoute']);

sdpNok360.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when("/login", {
            templateUrl: "views/login.html",
            controller: "authController"
        })
        .when("/users", {
            templateUrl: "views/users.html",
            controller: "userController"
        })
        .when("/stats", {
            templateUrl: "views/graph.html"
        })
        .when("/contentMan", {
            templateUrl: "views/contentMan.html",
            controller: "contentController"
        })

        .otherwise({redirectTo: "/login"});
});

sdpNok360.config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix('');
}]);