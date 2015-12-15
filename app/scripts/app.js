'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myAppCtrl',
  'myAppServices',
  'myAppAnimate',
  'myAppDirect',
  'ngCookies'

]);
myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/eGiftCard', {
        controller: 'coverCtrl',
        templateUrl: 'views/coverpage/coverpage.html'
      }).
     when('/homepage',{
     	controller: 'homeCtrl',
     	templateUrl: 'views/homepage/homepage.html'
     }).
     when('/cardDetails',{
      controller: 'cardDetailsCtrl',
      templateUrl: 'views/display/display.html'
     }).
     when('/deals',{
      controller: 'cardCtrl',
      templateUrl:'views/template.html'
     }).
     when('/dashboard',{
      controller: 'dashboardCtrl',
      templateUrl: 'views/dashboard/dashboard.html'
     }).
     when('/aboutus',{
      controller: 'cardCtrl',
      templateUrl: 'views/aboutus/aboutus.html'
     }).
     when('/payment',{
       controller: 'paymentCtrl',
      templateUrl: 'views/payment/payment.html' 
     }).
     when('/redemption/:token',{
      controller: 'redeemCtrl',
       templateUrl: 'views/redemption/redeemption.html'
     }).
     when('/confirmation',{
      controller: 'cardCtrl',
        templateUrl: 'views/payment/confirmation.html'
     }).
      when('/confirmDetails', {
        controller: 'redeemCardCtrl',
        templateUrl: 'views/redemption/cardDetails.html'
      }).
      otherwise({
        redirectTo: '/homepage'
      });
  }]);

