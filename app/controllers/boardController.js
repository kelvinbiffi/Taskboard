app.controller('boardController', function($scope, HttpService, serverDataModel) {
  $scope.tasks = [];
  
  $scope.getTasks = function(){
    HttpService.query().then(function(response) {
      $scope.tasks = response.data;
    });
  };
  
  $scope.getTasks();
  
});
