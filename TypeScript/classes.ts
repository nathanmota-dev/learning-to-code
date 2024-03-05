class Person {
    readonly id: number; //readonly é um modificador de acesso que impede que o valor seja alterado
    protected name: string; //protected é um modificador de acesso que permite que a variável seja acessada apenas pela classe e suas subclasses
    private age: number; //private é um modificador de acesso que impede que a variável seja acessada por fora da classe

    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }

    sayMyName(): string {
        return this.name;
    }
}

const person = new Person(1, "Nathan", 23);

//É possivel também criar uma classe com interface
interface IPerson { //é uma boa prática começar com I a interface com classes
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