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