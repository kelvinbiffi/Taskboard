angular.module('taskBoard').service('serverDataModel',function serverDataModel(){
  
  this.taskTypes = ['Firewall','Build'];
  
  this.taskStates = ['Pending','Running','Accepted','Rejected','Succeed','Fail'];
  
  this.tasks = [
    {
      taskId: '9h9tgdhJU998',
      type: 0,
      timeStarted: new Date(2016, 5, 3),
      state: 0,
      metrics: '',
      build: '',
      unitTest: '',
      functionalTest: ''
    },
    {
      taskId: '789yhiutJGG',
      type: 1,
      timeStarted: new Date(2016, 9, 7),
      state: 0,
      metrics: '',
      build: '',
      unitTest: '',
      functionalTest: ''
    },
    {
      taskId: '9768yg8JHGhbu',
      type: 0,
      timeStarted: new Date(2016, 1, 7),
      state: 2,
      metrics: '',
      build: '',
      unitTest: '',
      functionalTest: ''
    }
  ];
  
  this.getTasks = function(){
    return this.tasks;
  };
});
