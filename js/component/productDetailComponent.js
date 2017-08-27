function PrdouctDetailCtrl($scope, $log) {
    var ctrl = this;

    $log.log("Inside product detail controller, products length : " + ctrl.products.length);
    $log.log("Inside product detail controller, selected product is : " + ctrl.selectedProduct);

    
}

myAppComponents.component('productDetail', {
    templateUrl : 'partials/productDetail.html',
    controller : PrdouctDetailCtrl,
    bindings : {
        products : '=',
        selectedProduct : '='
    }
})