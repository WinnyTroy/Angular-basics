// initialize the app(creating the module)
var app = angular.module('Todo', []);

// Empy Array is used to declaring what other modules the app will be using(Aids
//     in Dependancy Injection in Angular)

app.controller('TodoCtrl', function($scope) {
    $scope.todos = [
    'Learn Sketch',
    'Look at Dribbble and feel inferior',
    'Actually learn how to use the Pen tool'
  ];
});
// Controller is set to define state and behaviour of the view
