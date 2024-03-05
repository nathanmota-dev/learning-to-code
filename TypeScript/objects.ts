type Order = {
    idOrder: number;
    product: string
}

type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string;
    orders: Order[] // é possível usar types em conjunto como se fosse uma struct
    register(): string; // é possível criar funções dentro de um type
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

const printLog = (message: string) => { }

printLog(user1.password!) // sem o ! o TypeScript acusa erro, pois password é opcional
// quando é passado o ! eu estou dizendo ao TypeScript que eu tenho certeza que a variável existe

//Unios - une dois types
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

//Interfaces - a diferença entre interface e type é que a interface é mais utilizada para objetos
// e o type para tipos primitivos
interface Animal {
    readonly name: string;
    age: number;
}

const nameUser: Animal = {
    name: "Zebra",
    age: 2,
};

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

//Porém há uma coisa que Types podem fazer e interfaces não:
type Grade = number | string;
const grade: Grade = 1;