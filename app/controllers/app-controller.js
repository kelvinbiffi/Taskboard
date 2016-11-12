angular.module('taskBoard').controller('boardController', function($scope, HttpService, serverDataModel) {
  $scope.tasks = [];
  
  $scope.getTasks = function(){
    HttpService.query().then(function(response) {
      $scope.tasks = response.data;
      console.log($scope.tasks,"$scope.tasks");
    });
  };
  
  $scope.getTasks();
  
});
