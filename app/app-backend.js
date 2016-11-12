angular.module('taskBoard').run(function($httpBackend, serverDataModel){
  
  $httpBackend.whenGET('/tasks').respond(function(method, url, data) {
    var tasks = serverDataModel.getTasks();
    return [200, tasks, {}];
  });
  
});
