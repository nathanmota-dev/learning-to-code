//é possível passar tipos como parâmetros no Generics
const returnValue = <T>(value: T): T => value;

const message = returnValue<string>("test");

const count = returnValue<number>(2);

function getFirstValueFromArray<T>(array: T[]): T {
    return array[0];
}

const firstValueString = getFirstValueFromArray<string>(["1", "2", "3"]);
const firstValueNumber = getFirstValueFromArray<number>([1, 2, 3]);

//Promises
const returnPromise = async (): Promise<string> => {
    return "it's the promise";
}

//é possível criar Generic com Classes
class List<T> {
    private list: T[] = [];

    add(value: T): void {
        this.list.push(value);
    }

    get(): T[] {
        return this.list;
    }
}

//Shorthand para construtores de Classes
class List2<T> {
    constructor(private list: T[] = []) { }

    add(value: T): void {
        this.list.push(value);
    }

    get(): T[] {
        return this.list;
    }
}