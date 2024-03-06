# TypeScript

### Tipagem 

O TypeScript é uma linguagem de Tipagem Estática, ou seja, o seu tipo tem que ser definido na declaração da variável

```bash
let age: number;
```

Em linguagens de tipagem estática o tipo não precisaria ser informado na declaração da variável como no Javascript onde bastaria escrever:

```bash
let age
age = 21;
typeof age // number
```

Além disso no Typescript os tipos precisam ser respeitados não podendo alterar o tipo de uma variável de int pra string por exemplo, onde no JavaScript é possível.

Todo código Typescript que não contém erros é convertido de forma automática por seu compilador para JavaScript porque os navegadores não entendem TypeScript. 

O objetivo dessa linguagem é assegurar uma proteção de camadas e evitar eventuais erros que acontecem no Javascript.

Exemplo:

```bash
const sum = (num1, num2) => {
    return num1 + num2;
}

sum("2", "3"); // retorna 23
```

Nesse caso a funcão irá retornar 23 e não é isso que queremos, para isso seria importante informar que só aceitamos numeros fazendo com que a funcao fique assim:

```bash
const sum = (num1:number, num2:number) => {
    return num1 + num2;
}

sum("2", "3"); // irá gerar erro
sum(2,3) // returna 5
```

Adiciona também import/export.

### Vantagens

- Recursos avançados do JS
- Prevenção de erros de tipagem
- Mais fácil de identificar bugs
- Código mais legível
- Extremamente popular

### Desvantagens

- Escrita de mais código
- Há uma curva de aprendizado
- Requer uma compilação para JS

# Inicialização

```bash
npm init -y
npm install --save-dev typescript
tsc --init //iniciar
tsc index.ts // rodar aplicação
```

### Tipos básicos

```bash
let isDone: boolean = false;

let decimal: number = 6.5;
let integer: number = 6;
let float: number = 6.5;

let color: string = "blue";
```

Há também o tipo any, que aceita qualquer tipo como se fosse o tipo do JavaScript

```bash
let idk: any = "idk";
```

Porém esse tipo não é ideal de ser utilizado, porque o TypeScript foi feito pela necessicidade em "Tipar" variáveis

### Listas

```bash
const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false];
const colors: string[] = ["blue", "red", "green"];
```

### Tuplas 

Uma Tupla é uma forma de conseguir armazenar uma coleção de dados de tipos diferentes

```bash
const person: [string, number] = ["Nathan", 23];
```

### Lista de Tuplas 

```bash
const people: [string, number][] = [
    ["Nathan", 23],
    ["Maria", 27],
    ["Ana", 32],
];
```

### Intersection

```bash
const productId: string | number = "123";
```

### Enum

```bash
enum Direction {
    Up = 1,
    Down = 2,
    Left = 'Esquerda',
    Right = 'Direita',
}

const direction = Direction.Up; // Associa o valor 1 a variável 
```

### Type Assertion

O type assertion é uma forma de dizer ao TypeScript que você tem certeza que o tipo de uma variável é de um tipo específico.

```bash
const productName: any = "Camiseta";

// Forma 1
let itemId1 = productName as string;

// Forma 2
let itemId2 = <string>productName; 
```

## Funções

Quando não especificado o tipo de retorno, o TypeScript assume que é o padrão passado como retorno

```bash
const sum = (x: number, y: number) => {
    return x + y;
}
const value1 = sum(2, 3);
```

Nesse exemplo como x e y são number, o TypeScript assume que o retorno é number.

Porem é possível especificar o tipo de retorno:

```bash
const sum2 = (x: number, y: number): string => {
    return (x + y).toString();
}
const value2 = sum2(2, 3);
```

É possível também especificar mais de um tipo de retorno:

```bash
const sum3 = (x: number, y: number): string | number => {
    return (x + y).toString();
}
```

Nesse exemplo acima, a função pode retornar tanto string quanto number

### Variáveis opcionais

Existe também variáveis opcionais em funções, para isso é necessário adicionar o ? após o nome da variável

```bash
const sum4 = (x: number, y: number, z?: number) => {
    return (x + y + (z || 0)); //caso z não seja passado, assume 0
} 
const values = sum4(2, 3, 5);
```
Retornar apenas x+y+z pode causar erro, pois z pode ser undefined

### Funções com callback

É possível também criar uma função void que não retorna nada assim como no  c

```bash
const log = (message: string): void => {
    console.log(message);    
}
```

Usar return em uma função void o TypeScript acusa erro

### Interface com funções

```bash
interface MathFunc {
    (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number) => {
    return x + y;
}

const subtract: MathFunc = (x: number, y: number) => {
    return x - y;
}
```

## Objetos

```bash
const user: { name: string, age: number } = {
    name: "Nathan",
    age: 23
};
```

### Type

O type é uma forma de criar um tipo personalizado

```bash
type Order = {
    idOrder: number;
    product: string
}
```

É possível usar types com vetores e funções em types

```bash
type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string;
    orders: Order[] 
    register(): string; 
}

const user1: User = {
    firstName: "Nathan",
    age: 23,
    email: "nathansmota@gmail.com",
    password: "123456",
    orders: [{ idOrder: 1, product: "Camiseta" }, { idOrder: 2, product: "Calça" }],
    register() {
        return this.firstName + " está registrado";
    }
}
```

### Type Assertion

```bash
const printLog = (message: string) => { }
printLog(user1.password!)
```
Sem o ! o TypeScript acusa erro, pois password é opcional. Já quando é passado o ! eu estou dizendo ao TypeScript que eu tenho certeza que a variável existe

### Unios

Basicamente o Unions serve para unir dois types

```bash
type Author = {
    books: string[];
}

const author: Author & User = { //quando é feito a uniao é necessário passar todos os campos dos 2 types
    age: 23,
    email: "nathasmota",
    firstName: "Nathan",
    orders: [{ idOrder: 1, product: "Camiseta" }, { idOrder: 2, product: "Calça" }],
    password: "123456",
    books: ["Livro 1", "Livro 2"],
    register() {
        return "a";
    }
}
```

### Interfaces 

A diferença entre interface e type é que a interface é mais utilizada para objetos e o type para tipos primitivos

```bash
interface Animal {
    readonly name: string;
    age: number;
}

const nameUser: Animal = {
    name: "Zebra",
    age: 2,
};
```

### Interfaces com união:

```bash
interface AuthorInterface {
    books: string[];
}

const newAuthor: AuthorInterface & User = {
    age: 23,
    email: "nathasmota",
    firstName: "Nathan",
    orders: [{ idOrder: 1, product: "Camiseta" }, { idOrder: 2, product: "Calça" }],
    password: "123456",
    books: ["Livro 1", "Livro 2"],
    register() {
        return "a";
    }
}
```

Porém há uma coisa que Types podem fazer e interfaces não:

```bash
type Grade = number | string;
const grade: Grade = 1;
```

## Classes

```bash
class Person {
    readonly id: number;
    protected name: string;
    private age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string {
        return this.name;
    }
}
```

Em classes assim como em Java, é possível utilizar os modificadores de acesso como: public, readonly, private e protected

- public: é um modificador de acesso que permite que a variável seja acessada por qualquer classe
- readonly: é um modificador de acesso que impede que o valor seja alterado
- protected: é um modificador de acesso que permite que a variável seja acessada apenas pela classe e suas subclasses
- private: é um modificador de acesso que impede que a variável seja acessada por fora da classe

O construtor funciona da mesma forma que em Java, onde é possível passar os valores para as variáveis da classe e ele serve para inicializar as variáveis da classe

Uma classe além de conter variáveis, construtores e métodos, ela também pode conter interfaces e types.

Instanciando a classe:

```bash
const person = new Person(1, "Nathan", 23);
```

É possivel também criar uma classe com interface:

- É uma boa prática começar com I a interface com classes

```bash
interface IPerson {
    id: number;
    name: string;
    age: number;
    sayMyname(): string;
}

class Person2 implements IPerson {
    id: number;
    name: string;
    age: number;

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyname(): string {
        return this.name;
    }
}
```

Como visto no exemplo acima para usar classes e interfaces usamos o implements, porém para usar classes e types usamos o extends.

- implements: é um modificador de acesso que permite que a classe implemente as propriedades e métodos da interface
- extends: é um modificador de acesso que permite que a classe filha herde as propriedades e métodos da classe pai

Um exemplo de extends:

```bash
type Animal = {
    name: string;
    age: number;
}

class Dog extends Animal {
    bark(): string {
        return "Au Au";
    }
}
```

## Generics

Generics é uma forma de criar um tipo que pode ser reutilizado em várias partes do código.

É possível passar tipos como parâmetros no Generics:

```bash
const returnValue = <T>(value: T): T => value;

const message = returnValue<string>("test");

const count = returnValue<number>(2);

function getFirstValueFromArray<T>(array: T[]): T {
    return array[0];
}

const firstValueString = getFirstValueFromArray<string>(["1", "2", "3"]);
const firstValueNumber = getFirstValueFromArray<number>([1, 2, 3]);
```

### Promises

Promises são uma forma de trabalhar com assincronismo no JavaScript, onde é possível fazer uma requisição e esperar a resposta. É muito usado no consumo de API's.

```bash
const returnPromise = async (): Promise<string> => {
    return "it's the promise";
}
```

É possível criar Generic com Classes:

```bash
class List<T> {
    private list: T[] = [];

    add(value: T): void {
        this.list.push(value);
    }

    get(): T[] {
        return this.list;
    }
}
```

### Shorthand para construtores de Classes

Shorthand é uma forma de criar um construtor de forma mais rápida e limpa

```bash
class List2<T> {
    constructor(private list: T[] = []) { }

    add(value: T): void {
        this.list.push(value);
    }

    get(): T[] {
        return this.list;
    }
}
```