app.service('serverDataModel', function serverDataModel(){
  var service = this;
  
  this.taskTypes = [
    {
      type: 'Firewall',
      taskStates: ['Pending','Running','Accepted', 'Complete','Rejected'],
      taskId: 1234
    },
    {
      type: 'Build',
      taskStates: ['Pending','Running','Succeed', 'Complete','Fail'],
      taskId: 432459,
      owners: ["jtuck", "samy"]
    }
  ];
  
  var dateTime = function(end){
  var d = new Date();
  var minutes = Math.floor(Math.random() * (end ? 1000 : 2000)) + 5000;
  d.setMinutes(d.getMinutes() - minutes);
  d.getDate(); 
  return d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate() + (end ? " - " : " ") + d.getHours() + ":" + d.getMinutes();
  };
  
  var Metric = function(){
    var self = this;
    self.test = Math.floor(Math.random() * 51) + 30;
    self.maintainability = Math.floor(Math.random() * 51) + 30;
    self.security = Math.floor(Math.random() * 51) + 30;
    self.workmanship = Math.floor(Math.random() * 51) + 30;
    var average = ((self.test + self.maintainability + self.security + self.workmanship) / 4);
    self.worked = (average > 45 ? true : false);
  };
  
  var Build = function(){
    var self = this;
    self.timeEnded = dateTime(true);
    self.worked = true;
  };
  
  var Tests = function(){
    var self = this;
    self.testsPassed = Math.floor(Math.random() * 51) + 30;
    self.testsFail = Math.floor(Math.random() * 51) + 30;
    self.codeCovered = Math.floor(Math.random() * 41) + 50;
    self.percentPassed = (Math.round(((self.testsPassed + self.codeCovered)/2) * 100) / 100).toFixed(0);
    var average = ((self.testsPassed + self.testsFail) / 2);
    self.worked = (average > 45 ? true : false);
  };
  
  var Task = function(taskId){
    var self = this;
    var type = Math.round(Math.random());
    var taskState = Math.floor(Math.random() * 4);
    var owner = Math.round(Math.random());
    
    self.taskId = (type == 0 ? "Tenrox-R1_" : "") + service.taskTypes[type].taskId + taskId;
    self.owner = (service.taskTypes[type].owners ? service.taskTypes[type].owners[owner] : "");
    self.type = service.taskTypes[type].type;
    self.timeStarted = dateTime();
    self.state = service.taskTypes[type].taskStates[taskState];
    self.open = false;
    self.click = false;
    if(taskState > 1){
      self.click = true;
      self.metrics = new Metric();
      self.build = new Build();
      self.unitTest = new Tests();
      self.functionalTest = new Tests();
      
      if(!self.metrics.worked || !self.build.worked || !self.unitTest.worked || !self.functionalTest.worked){
        self.state = service.taskTypes[type].taskStates[4];
      }
      
      self.result = "";
    }
  };
  
  this.tasks = [];
  
  for(var t = 0; t < (Math.floor(Math.random() * 4) + 4); t++){
    this.tasks.push(new Task(t));
  }
  
  this.getTasks = function(){
    return this.tasks;
  };
});
