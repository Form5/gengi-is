(function() {
  define(['app','controllers/listCtrl', 'controllers/aboutCtrl', 'controllers/calcCtrl'], function(app) {
    app.config(function($routeProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $routeProvider.when('/', {
        controller: 'listCtrl',
        templateUrl: 'list.html'
      }).
      when('/about', {
        controller: 'aboutCtrl',
        templateUrl: 'about.html'
      }).
      when('/:currName', {
        controller: 'calcCtrl',
        templateUrl: 'calc.html'
      });
    });
  });
}).call(this);
