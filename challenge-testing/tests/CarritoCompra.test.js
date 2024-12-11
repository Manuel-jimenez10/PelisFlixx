const { experiments } = require("webpack");
const CarritoCompra = require("./index");

describe("Clase de CarritoCompra", () => {
    const carrito = new CarritoCompra();
    expect(carrito.productos).toEqual([]);
});

it("Recibe un objeto representando un producto y lo agrega al carrito", () => {
const carrito = new CarritoCompra();

expect(carrito.agregarProducto).toBeDefined();
carrito.agregarProducto({nombre: "durazno", precio: 20});
expect(carrito.productos.length).toBe(1);
carrito.agregarProducto({nombre:"melon", precio: 20});
carrito.agregarProducto({nombre:"tomate", precio: 20});
expect(carrito.productos.length).toBe(3);
});

it("Calcula el total de la compra sumando los precios de todos los productos en el carrito", () => {
    const carrito = new CarritoCompra();

    expect(carrito.calcularTotal).toBeDefined();
    carrito.agregarProducto({nombre:"durazno", precio: 20});
    carrito.agregarProducto({nombre:"melon", precio:20});
    carrito.agregarProducto({nombre:"tomate", precio: 20});
    expect(carrito.calcularTotal()).toBe(60);
});

it("Aplica un descuento al totalde la compra segun el porcentaje especificado", () => {
    const carrito = new CarritoCompra();

    expect(carrito.aplicarDescuento).toBeDefined();
    carrito.agregarProducto({nombre:"durazno", precio: 10});
    carrito.agregarProducto({nombre:"melon", precio: 10});
    carrito.agregarProducto({nombre:"tomate", precio: 10});
    expect(carrito.aplicarDescuento(10)).toBe(27);
});