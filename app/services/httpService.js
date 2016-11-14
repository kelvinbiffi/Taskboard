app.factory('HttpService', function($http) {
    var service = {
        query: function() {
            return $http.get('/tasks');
        }
    };
    
    return service;    
})
