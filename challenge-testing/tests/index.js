class CarritoCompra {
    constructor () {
     this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    calcularTotal(){
        return this.productos.reduce((acc, producto) => acc + producto.precio, 0);
    }
    aplicarDescuento(descuento){
        const total = this.calcularTotal();
        return total - (total * descuento) / 100;
    }
}

module.exports = CarritoCompra;