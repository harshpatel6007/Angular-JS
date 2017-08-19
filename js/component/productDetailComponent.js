function PrdouctDetailCtrl($scope) {
    var ctrl = this;

    console.log("Inside product detail controller, products length : " + ctrl.products.length);
    console.log("Inside product detail controller, selected product is : " + ctrl.selectedProduct);

    
}

myAppComponents.component('productDetail', {
    templateUrl : 'partials/productDetail.html',
    controller : PrdouctDetailCtrl,
    bindings : {
        products : '=',
        selectedProduct : '='
    }
})