
class Pizza{
    constructor(id, nombre, ingredientes, precio){
        this.id=id;
        this.nombre=nombre;
        this.ingredientes=ingredientes;
        this.precio=precio;
    }
};

let pizza1 = new Pizza(1, 'Fugazzeta', ['Masa', 'Muzzarella', 'Cebolla', 'Oregano'], 590);
let pizza2 = new Pizza(2, 'Palmitos', ['Masa', 'Muzzarella', 'Palmitos', 'Salsa de tomate', 'Salsa Golf', 'Oregano'], 1200);
let pizza3 = new Pizza(3, 'Napolitana', ['Masa', 'Muzzarella', 'Cebolla', 'Tomate', 'Oregano'], 1050);
let pizza4 = new Pizza(4, 'Calabresa', ['Masa', 'Muzzarella', 'Salame', 'Oregano', 'Salsa de tomate'], 1100);
let pizza5 = new Pizza(5, 'Hawaiana', ['Masa', 'Muzzarella', 'Ananá', 'Salsa de tomate'], 1200);
let pizza6 = new Pizza(6, 'Uruguaya', ['Masa', , 'Salsa de tomate', 'Cebolla', 'Oregano'], 550);

const pizzas = [pizza1, pizza3, pizza2, pizza4, pizza5, pizza6];


function esImpar(element){
    if (
        (element.id %2) !=0
    )
    console.log("La pizza " + element.nombre + " tiene el siguiente ID impar: " + element.id)
}
function esBarata(element){
    if (
        (element.precio < 600)
    )
    console.log("La pizza " + element.nombre + " tiene tiene un valor de: $" + element.precio)
}
function mostrarCarta(element){
    console.log("La pizza " + element.nombre + " tiene un valor de: $" + element.precio)
}
function mostrarIngredientes(element){
    console.log("La pizza " + element.nombre + " tiene los siguientes ingredientes: " + element.ingredientes)
}

console.log("a)")
console.log(pizzas.forEach(esImpar))
console.log("b)")
console.log(pizzas.forEach(esBarata))
console.log("c)")
console.log(pizzas.forEach(mostrarCarta))
console.log("d)")
console.log(pizzas.forEach(mostrarIngredientes))


