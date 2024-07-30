"use strict";
// Ejemplo de TypeScript con buenas prácticas
function sumar(a, b) {
    return a + b; // El compilador de TypeScript verificará que a y b sean números
}
let edad = 30; // El tipo de dato es consistente, evitando errores en cálculos posteriores
console.log(sumar(10, 20)); // Resultado esperado: 30
// console.log(add(10, "20")); // Error de compilación: Argumento de tipo 'string' no es asignable a parámetro de tipo 'number'
// console.log(add("10", "20")); // Error de compilación: Argumento de tipo 'string' no es asignable a parámetro de tipo 'number'
let age = 30;
const nombre = "Alice";
console.log(nombre);
let persona = { id: 1, hora: 12, nombre: nombre };
console.log(persona.hora);
let fruits = ["banana", "manzana", "pera"];
console.log(fruits);
let numeros = [1, 2, 3, 4, 5, 6, 7];
console.log(numeros.reduce(sumar, 0));
console.log(fruits.join(""));
function encontrarMayorValor(numeros) {
    return Math.max(...numeros);
}
// Ejemplo de uso
const arrayDeNumeros = [10, 5, 8, 21, 3];
const mayorValor = encontrarMayorValor(arrayDeNumeros);
console.log(mayorValor); // Salida: 21
const carro = { marca: "toyota", modelo: 1999 };
console.log(`marca ${carro.marca} modelo ${carro.modelo}`);
