var sevenhills = angular.module('sevenhills', ['ngMessages', 'ngRoute', 'ngAnimate', 'ngSanitize']);

sevenhills.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
    })
    .when('/aboutus', {
        templateUrl: 'pages/aboutus.html',
    })
    .when('/people', {
        templateUrl: 'pages/people.html',
    })
    .when('/showreel', {
        templateUrl: 'pages/showreel.html',
    })
    .when('/services', {
        templateUrl: 'pages/services.html',
    })
    .when('/contact', {
        templateUrl: 'pages/contact.html',
        controller: 'contactController'
    })
});

//CONTROLLERS

sevenhills.controller('contactController', ['$scope', function($scope) {
  $scope.openLink = function(url) {
    window.open(url);
  };

  $scope.messages = {
    name:"",
    message:"",
    email:""
  };
  $scope.messagesArray = [];
  $scope.addMessage = function(messages){
        console.log(messages);
       $scope.messagesArray.push(messages);
       console.log($scope.messagesArray);
       $scope.messages = {}; // empties form after submit
    };
}]);
