myAppComponents.component('productDetail', {        
    // template : function () {
    //     return '<div> this is product template </div>'
    // },
    templateUrl : 'partials/products.html',
    controller : ProductCtrl,
    bindings : {
        products: '='
    }    
});