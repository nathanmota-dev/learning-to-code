<?php 

//Variáveis

$num1 = 3;
$num2 = 4;

$resultadoFinal = $num1+$num2;

echo $resultadoFinal; //7

$resultadoFinal = '<br>teste';

echo $resultadoFinal; //teste

// Concatenação de variáveis

$nome = "Nathan";
echo "<br>Meu nome é: $nome";

echo "<br>Meu nome é: " . $nome;

//Operadores Aritméticos

$a = 6;
$b = 3;

echo "<br>" . $a+$b;
echo "<br>" . $a-$b;
echo "<br>" . $a*$b;
echo "<br>" . $a/$b;

// Estruturas de Repetição

for($i = 0; $i<10; $i++){
    echo "<br>" . $i;
}

$j = 1;
while($j < 10){
    echo "<br>". $j++;
}

include ("page2.php");
require ("page2.php");

// Manipulação de String

$frase = "o meu cachorro foi pra norte";

echo "<br>". strlen($frase); //retorna tamanho da string

echo "<br>". str_replace("cachorro", "gato", $frase); // o meu gato foi pra norte

echo "<br>" . strtoupper($frase); // Caixa alta

$array_string = str_split($frase); // transforma a string em um array onde cada letra e uma posicao

print_r($array_string);

// Funções

function somaDoisNumeros($num1, $num2): float{ //a tipagem do retorno é opcional
    return $num1 + $num2;
}

$resultado = somaDoisNumeros(2, 5);
echo "<br>" . $resultado;

?>