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
  .controller('PromiceCtrl',function(){
    $scope.PromiceExample=function(){
      let cleanroom =function(){
        return new Promise (function(resolve,reject){
            resolve("Clean the Room");
        })
    }
    let reomvegarbedge=function(){
        return new Promise (function(resolve,reject){
            resolve("Remove Garbedge");
        })
    }
    let winicecream=function(){
        return new Promise(function(resolve,reject){
            resolve("Finally Win IceCream");
        })
    }
    cleanroom.then(function(result){
        return reomvegarbedge(result);
    }).then(function(result){
        return winicecream(result);
    }).then(function(result){
        console.log("Finally Done"+result);
    })
    }

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
            setTimeout(function(){
              jsondata.async().then(function(responce){
                $scope.mydata=responce.data[0].memberList;
              })
            },3000)
           
            console.log("Wait for a While");
            //$http.get('http://api.jsonbin.io/b/5bd0494dadf9f5652a645c8d').then(function(responce){
              // $scope.mydata=responce.data[0].memberList;
          //  })
              //console.log($scope.mydata);
             /*jsondata.async().then(function(responce) {
              $scope.mydata = responce.data[0].memberList;
            });  
            */
          }
  })
.controller('DisplayList',function($scope){
  $scope.displayangular=function(){
    $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isCustomHeaderOpen: false,
    isFirstOpen: true,
    isFirstDisabled: false
  };
}
 
})
.controller('WebPage',function($scope){

})
.controller('DatepickerPopupDemoCtrl', function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
    dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
});

  
 