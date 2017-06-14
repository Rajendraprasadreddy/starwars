'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope,$http,$location) {
$scope.logInToPlanet = function(frm){
    if(frm.$valid == true){
    $http.get('users.JSON').success(function(data){
        $scope.users = data.data;
        var valid = false;
        angular.forEach($scope.users,function(v,i){
            if((frm.username.$viewValue.toLowerCase() === v.username.toLowerCase())&&(frm.pwd.$viewValue.toLowerCase() ===v.password.toLowerCase())){
                valid = true;
            }
        })
        if(valid == true){
            $location.path("/view2" );
        }else{
            alert("please enter valid credentials");
        }
    });
}else{
    alert("please enter valid credentials");
}
}
});