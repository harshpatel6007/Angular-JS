function ProductCtrl($scope) {
    console.log("inside product controller ");
    console.log("$ctrl.products" + this.products[0].title)

    this.deleteProduct = function (product) {        
        var index = this.products.indexOf(product);
        console.log("remove product on index : " + index);
        this.products.splice(index, 1);
    }
}

myAppComponents.component('productDetail', {        
    // template : function () {
    //     return '<div> this is product template </div>'
    // },
    templateUrl : 'partials/products.html',
    controller : ProductCtrl,
    bindings : {
        products : '='
    }    
});



// myAppControllers.controller('ProductCtrl', ProductCtrl());