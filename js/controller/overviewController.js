myAppControllers.controller('overviewCtrl', function ($scope) {
    $scope.message = "Welcome to Overview Page";

    $scope.products = [
        {
            'title' : 'MI',
            'description' : 'Famous for its features !!!',
            'class' : 'panel-info'
        },
        {
            'title' : 'iPhone',
            'description' : 'Famous for its design and security !!!',
            'class' : 'panel-success'
        },
        {
            'title' : 'Nokia',
            'description' : 'Famous for its robustness !!!',
            'class' : 'panel-warning'
        },
        {
            'title' : 'Blackberry',
            'description' : 'What is this ???',
            'class' : 'panel-danger'
        }
    ];
});