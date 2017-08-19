function ProductOverviewCtrl($scope) {

    console.log("Inside product overview controller");

    $scope.products = [
        {
            'title' : 'MI',
            'description' : 'Famous for its features !!!',
            'class' : 'panel-info',
            'image' : 'asset/img/xiomi-redmi-note4.jpeg',
            'comments' : [
                { user : 'Harsh Patel', comment : 'Nice Phone', date : new Date() }
            ]
        },
        {
            'title' : 'iPhone',
            'description' : 'Famous for its design and security !!!',
            'class' : 'panel-success',
            'image' : 'asset/img/apple-iphone-6.jpg',
            'comments' : [
                { user : 'Harsh Patel', comment : 'Nice Phone', date : new Date() },
                { user : 'Mahesh Tolani', comment : 'Amazing Phone', date : new Date() },
                { user : 'Ravi Nirmal', comment : 'Best Phone on Earth', date : new Date() },
                { user : 'Kush Gajjar', comment : 'Still wondering about its features, its reduce my efferts, SIRI is Amazing, Love you SIRI', date : new Date() },
                { user : 'Chirag Mojidra', comment : 'Amazed by SIRI', date : new Date() },
                { user : 'Neha Jain', comment : 'What else do you need ??', date : new Date() },
                { user : 'Neha Jain', comment : 'Best Phone Ever', date : new Date() },
                { user : 'Kishan Dubey', comment : 'Adding this in wishlist', date : new Date() },
                { user : 'Sana Kazi', comment : 'Somebody, please gift it to me !!', date : new Date() },
                { user : 'Raj Soni', comment : 'Great Phone', date : new Date() }
            ]
        },
        {
            'title' : 'Nokia',
            'description' : 'Famous for its robustness !!!',
            'class' : 'panel-warning',
            'image' : 'asset/img/nokia-6-5.jpg',
            'comments' : [
                { user : 'Harsh Patel', comment : 'Nice Phone', date : new Date() }
            ]
        },
        {
            'title' : 'Blackberry',
            'description' : 'What is this ???',
            'class' : 'panel-danger',
            'image' : 'asset/img/blackberry-z10.jpg',
            'comments' : [
                { user : 'Harsh Patel', comment : 'Nice Phone', date : new Date() }
            ]
        }
    ]; 

    $scope.selectedProduct = $scope.products[0];  

    //Just for the purpose of analysis, remove in future  
    $scope.$watch('selectedProduct', function () {
        console.log("main compioennt selected prodcut changed");        
    });    
}

myAppComponents.component('productOverview', {        
    // template : function () {
    //     return '<div> this is product template </div>'
    // },
    templateUrl : 'partials/productOverview.html',
    controller : ProductOverviewCtrl  
});