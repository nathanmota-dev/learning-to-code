//quando não especificado o tipo de retorno, o TypeScript assume que é o padrão passado como retorno
const sum = (x: number, y: number) => {
    return x + y;
}

const value1 = sum(2, 3);

//porem é possível especificar o tipo de retorno
const sum2 = (x: number, y: number): string => {
    return (x + y).toString();
}

const value2 = sum2(2, 3);

//é possível também especificar mais de um tipo de retorno
const sum3 = (x: number, y: number): string | number => {
    return (x + y).toString();
}

//existe também variáveis opcionais em funções
const sum4 = (x: number, y: number, z?: number) => {
    return (x + y + (z || 0)); //caso z não seja passado, assume 0
} //retornar apenas x+y+z pode causar erro, pois z pode ser undefined

const values = sum4(2, 3, 5);

//é possível também criar uma função void que não retorna nada assim como no  c
const log = (message: string): void => {
    console.log(message);
    //usandor return em uma função void o TypeScript acusa erro
}

// Como usar interface com funções
interface MathFunc {
    (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number) => {
    return x + y;
}

const subtract: MathFunc = (x: number, y: number) => {
    return x - y;
}