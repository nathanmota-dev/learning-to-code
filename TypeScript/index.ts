// Tipos básicos em TypeScript

let isDone: boolean = false;

let decimal: number = 6.5;
let integer: number = 6;
let float: number = 6.5;

let color: string = "blue";

// Tipo any aceita qualquer tipo, é como se fosse o tipo do JavaScript
let idk: any = "idk";

// Listas
const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false];
const colors: string[] = ["blue", "red", "green"];

// Tuplas
const person: [string, number] = ["Nathan", 23];

//Lista de Tuplas

const people: [string, number][] = [
    ["Nathan", 23],
    ["Maria", 27],
    ["Ana", 32],
];

// Intersection
const productId: string | number = "123";

// Enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = 'Esquerda',
    Right = 'Direita',
}

const direction = Direction.Up; // Associa o valor 1 a variável 

// Type Assertion - Forma de dizer ao TypeScript que você quer mudar o tipo de uma variável
const productName: any = "Camiseta";

let itemId1 = productName as string; // Forma 1
let itemId2 = <string>productName; // Forma 2

// Objeto
const user: { name: string, age: number } = {
    name: "Nathan",
    age: 23
};