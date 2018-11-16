'use strict';

/**
 * @ngdoc function
 * @name angularnewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularnewApp
 */
var app=angular.module('angularnewApp')
    /*app.factory('eventData',function(){
      return{
          event : {
              name : 'Align',
              city : 'AMT'
          }
      }
    })*/
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('AboutController',function(){

  })
  .controller('EventCtrl',function($scope,eventData,$http,jsondata){
          
        /*  console.log(eventData);
          console.log( $scope.event1 = eventData.event);
          console.log();
          $scope.show =[
            'This is First Message',
            'This is second Message'
          ]
          console.log("Plant maize");

            setTimeout(function() {
            console.log("Water plant")
          },3000);

          console.log("Add fertilizer");
          const weather = true
          const date    = new Promise(function(resolve, reject) {
            if (weather) {
              const dateDetails = {
                name:     'Cubana Restaurant',
                location: '55th Street',
                table:    5
              };
          
              resolve(dateDetails)
            } else {
              reject(new Error('Bad weather, so no Date'))
            }
          });
          const myDate = function() {
            date
              .then(function(done) {
                console.log('We are going on a date!')
                console.log(done)
              })
              .catch(function(error) {
                  console.log(error.message)
              })
          }
          myDate();*/
          $scope.displayJSonData=function()   
          {
            /*jsondata.async().then(function(responce){
              $scope.mydata=responce.data[0].memberList;
            })*/
            $http.get('http://api.jsonbin.io/b/5bd0494dadf9f5652a645c8d').then(function(responce){
              $scope.mydata=responce.data[0].memberList;
           })
              //console.log($scope.mydata);
             /*jsondata.async().then(function(responce) {
              $scope.mydata = responce.data[0].memberList;
            });  
            */
          }
  })
  

  
 