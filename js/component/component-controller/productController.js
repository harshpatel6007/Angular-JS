function ProductCtrl() {
    console.log("inside product controller ");
    console.log("$ctrl.products" + this.products[0].title)

    var ctrl = this;

    ctrl.deleteProduct = function (product) {        
        var index = this.products.indexOf(product);
        console.log("remove product on index : " + index);
        this.products.splice(index, 1);
    }
}