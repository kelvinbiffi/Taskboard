app.controller('taskController', function($scope) {
  
  $scope.chartColors = ['#72AC4D', '#EB7D3B'];
  
  $scope.openTask = function(tasks){
    if(this.click){
      angular.forEach(tasks, function(task, key){
        task.open = false;
      });
      $scope.labelsUnit = ["Passed", "Fail"];
      $scope.dataUnit = [this.unitTest.testsPassed, this.unitTest.testsFail];
      
      $scope.labelsFunctional = ["Passed", "Fail"];
      $scope.dataFunctional = [this.functionalTest.testsPassed, this.functionalTest.testsFail];
      this.open = true;
    }
  }
  
  $scope.getArrow = function(metric){
    if(metric < 50){
      return "red";
    }else if(metric < 65){
      return "yellow";
    }else{
      return "green";
    }
  }
  
  
  
});
