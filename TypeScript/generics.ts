//é possível passar tipos como parâmetros no Generics
const returnValue = <T>(value: T): T => value;

const message = returnValue<string>("test");

const count = returnValue<number>(2);

function getFirstValueFromArray<T>(array: T[]): T {
    return array[0];
}

const firstValueString = getFirstValueFromArray<string>(["1", "2", "3"]);
const firstValueNumber = getFirstValueFromArray<number>([1, 2, 3]);