// initialize the app(creating the module)
var app = angular.module('Todo', []);

// Empy Array is used to declaring what other modules the app will be using(Aids
//     in Dependancy Injection in Angular)

app.controller('TodoCtrl', function($scope) {
    $scope.newTodo = '';
    $scope.todos = [
    'Learn Sketch',
    'Look at Dribbble and feel inferior',
    'Actually learn how to use the Pen tool'
  ];

  $scope.done = function(todo) {
    var indexOf = $scope.todos.indexOf(todo);
    if (indexOf !== -1) {
      $scope.todos.splice(indexOf, 1);
    }
  };

  $scope.add = function(e) {
    if (e.which && e.which === 13) {
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = '';
    }
  };
});
// Controller is set to define state and behaviour of the view
