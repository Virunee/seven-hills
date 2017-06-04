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
    })
});
