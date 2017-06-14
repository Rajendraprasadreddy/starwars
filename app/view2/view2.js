'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope,$filter,$location) {
    $scope.goBack = function(){
        $location.path('/view1');
    }
    $scope.key = '';
$scope.items =  [
            {
              "name":"Ahch-To",
              "population":"1000000",
                color:"red"
            },{
              "name":"Alderaan",
              "population":"2000000",
                color:"blue"
            },{
              "name":"Bespin",
              "population":"3000000",
                color:"green"
            },{
              "name":"Cato Neimoidia",
              "population":"4000000",
                color:"yellow"
            },{
              "name":"Christophsis",
              "population":"6000000",
                color:"orange"
            },{
              "name":"Dagobah",
              "population":"5000000",
                color:"white"
            },{
              "name":"Endor",
              "population":"4000000",
                color:"rosybrown"
            },{
              "name":"Hoth",
              "population":"3000000",
                color:"green"
            },{
              "name":"Iego",
              "population":"2000000",
                color:"salmon"
            },{
              "name":"Jakku",
              "population":"1000000",
                color:"red"
            },{
              "name":"Kashyyyk",
              "population":"2000000",
                color:"whitw"
            }
        ];
    $scope.planets = $scope.items;
    $scope.doThis = function(){
        $scope.planets = $filter('filter')($scope.items,$scope.key);
    }
}).directive('testdir',function(){
    return{
        restrict:'E',
        scope:{
           'twoWay': '=' 
        },
        template: '<div ng-repeat="i in twoWay" class="planetDiv"><div style="height:{{i.population/10000}}px;border:1px solid black;background-color:{{i.color}}"><h1>{{i.name}}</h1></div></div>',
    link: function(scope,iElement,iAttribute) {
    }
    }
    
}).component('test', {
    bindings: {
    'twoWay': '='
  },
    template: '<div ng-repeat="i in $ctrl.twoWay" class="planetDiv"><div style="height:{{i.population/10000}}px;border:1px solid black;background-color:{{i.color}}"><h1>{{i.name}}</h1></div></div>',
    controller: function() {
    }
  });