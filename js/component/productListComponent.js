function ProductListCtrl($scope, $log) {
    $log.log("inside product controller ");
    $log.log("$ctrl.products" + this.products[0].title)

    var ctrl = this;

    function changeSelectedProductAfterDelete() {
        if(ctrl.products.length > 0) {
            ctrl.changeSelectedProduct(ctrl.products[0]);
        } else {
            ctrl.changeSelectedProduct(null);
        }        
    }

    ctrl.deleteProduct = function (product) {        
        var index = ctrl.products.indexOf(product);
        $log.log("remove product on index : " + index);
        ctrl.products.splice(index, 1);   
        changeSelectedProductAfterDelete();     
    }

    ctrl.changeSelectedProduct = function (product) {
        ctrl.selectedProduct = product;
    }
}

myAppComponents.component('productList', {        
    // template : function () {
    //     return '<div> this is product template </div>'
    // },
    templateUrl : 'partials/productList.html',
    controller : ProductListCtrl,
    bindings : {
        products : '=',
        selectedProduct : '='
    }    
});



// myAppControllers.controller('ProductCtrl', ProductCtrl());