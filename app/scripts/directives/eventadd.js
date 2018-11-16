var app=angular.module('angularnewApp');
app.directive('eventAdd',function($compile,listService){
    return{
            restrict:'CAE',
            templateUrl:'views/eventadd.html',
            replace:true,
            controller:function($scope,$rootScope){
                $scope.addToList=function(){
                    $scope.result=listService.addToListservice($scope.eventname,$scope.time,$scope.location);
                    console.log($scope.result);
            }
            }
    }
});

app.service('listService',function()
 {       this.list="DisplayList";
        //console.log(list);
        var temarry=[];
        this.addToListservice=function(a,b,c)
        {
            console.log(this.list);
              var ListArray={
                eventname:[],
                eventdate:[],
                location:[]
              };
            ListArray.eventname.push(a);
            ListArray.eventdate.push(b);
            ListArray.location.push(c);
            temarry.push(ListArray);
            return ListArray;
        }
        this.displayList=function()
        {
                return temarry;
        }
})
app.controller('DisplayList',function($scope,listService){
    $scope.resultList=listService.displayList();
    console.log( $scope.resultList);
})