// Ejemplo de TypeScript con buenas prácticas

function sumar(a: number, b: number): number {
  return a + b; // El compilador de TypeScript verificará que a y b sean números
}

let edad: number = 30; // El tipo de dato es consistente, evitando errores en cálculos posteriores

console.log(sumar(10, 20)); // Resultado esperado: 30
// console.log(add(10, "20")); // Error de compilación: Argumento de tipo 'string' no es asignable a parámetro de tipo 'number'
// console.log(add("10", "20")); // Error de compilación: Argumento de tipo 'string' no es asignable a parámetro de tipo 'number'

let age: number = 30;
const nombre: string = "Alice";
type User = {
  id: number;
  username: string;
};
console.log(nombre);

interface Persona {
  id: number;
  hora: number;
  nombre: string;
}
let persona: Persona = { id: 1, hora: 12, nombre: nombre };

console.log(persona.hora);

let fruits: string[] = ["banana", "manzana", "pera"];
console.log(fruits);

let numeros: number[] = [1, 2, 3, 4, 5, 6, 7];

console.log(numeros.reduce(sumar, 0));

console.log(fruits.join(""));

function encontrarMayorValor(numeros: number[]) {
  return Math.max(...numeros);
}

// Ejemplo de uso
const arrayDeNumeros: number[] = [10, 5, 8, 21, 3];
const mayorValor: number = encontrarMayorValor(arrayDeNumeros);
console.log(mayorValor); // Salida: 21

interface Carro {
  marca: string;
  modelo: number;
}
const carro: Carro = { marca: "toyota", modelo: 1999 };

console.log(`marca ${carro.marca} modelo ${carro.modelo}`);

const value: number = 6

function isPar(v: number): boolean {
  // if(v % 2 === 0){
  //     return true
  // }else{
  //     return false
  // }
  const res = v % 2 === 0 ? true : false;
  return res;
}

console.log(isPar(value));


type Product ={
    id:number
    nombre: string
    precio: number
    available?: boolean
}

const newProduct: Product ={
    id:5,
    nombre: "cristhian",
    precio:12
}

console.log(newProduct);

const str :string[] = ["hola", "mundo"]

const newStr:string = str.reduce((acum, value)=> acum +value)

console.log(newStr);

