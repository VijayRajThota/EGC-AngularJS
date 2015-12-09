'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myAppCtrl',
  'myAppServices',
  'myAppAnimate',
  'myAppDirect'

]);
myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/eGiftCard', {
        controller: 'cardCtrl',
        templateUrl: 'views/coverpage/coverpage.html'
      }).
     when('/homepage',{
     	controller: 'cardCtrl',
     	templateUrl: 'views/homepage/homepage.html'
     }).
     when('/event',{
     	controller: 'cardCtrl',
     	templateUrl: 'views/event/event.html'
     }).
     when('/homepage/:theme',{
      controller: 'cardCtrl',
      templateUrl: 'views/event/event.html'
     }).
     when('/cardDetails',{
      controller: 'cardCtrl',
      templateUrl: 'views/display/display.html'
     }).
     when('/signup',{
      controller: 'cardCtrl',
      templateUrl: 'views/userinformation/signup.html'
     }).
     when('/deals',{
      controller: 'cardCtrl',
      templateUrl:'views/template.html'
     }).
     when('/dashboard',{
      controller: 'cardCtrl',
      templateUrl: 'views/dashboard/dashboard.html'
     }).
     when('/aboutus',{
      controller: 'cardCtrl',
      templateUrl: 'views/aboutus/aboutus.html'
     }).
     when('/payment',{
       controller: 'cardCtrl',
      templateUrl: 'views/payment/payment.html' 
     }).
     when('/suning',{
      controller: 'cardCtrl',
      templateUrl: 'views/test.html'
     }).
     when('/personalize',{
       controller: 'cardCtrl',
       templateUrl: 'views/template.html'
     }).
     when('/customize',{
       controller: 'cardCtrl',
       templateUrl: 'views/hello.html'
     }).
     when('/redemption',{
      controller: 'cardCtrl',
       templateUrl: 'views/redemption/redeemption.html'
     }).
     when('/coverpage',{
       controller: 'cardCtrl',
        templateUrl: 'views/coverpage/coverpage1.html'
     }).
     when('/confirmation',{
      controller: 'cardCtrl',
        templateUrl: 'views/payment/confirmation.html'
     }).
      when('/confirmDetails', {
        controller: 'cardCtrl',
        templateUrl: 'views/redemption/cardDetails.html'
      }).
      otherwise({
        redirectTo: '/homepage'
      });
  }]);



/*var myApp = angular.module('myApp', [
  'ngRoute',
  'myAppCtrl',
  'myAppServices',
  'myAppAnimate',
  'myAppDirect'

]);

myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/test', {
        controller: 'cardCtrl',
        templateUrl: 'views/coverpage/coverpage.html'
      }).
      otherwise({
        redirectTo: '/homepage'
      });
  }]);
  */