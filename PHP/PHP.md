# PHP 

### 1. Declaração e Manipulação de Variáveis
O código cria duas variáveis, realiza operações matemáticas e exibe os resultados usando a função `echo`.

```php
$num1 = 3;
$num2 = 4;

$resultadoFinal = $num1 + $num2;
echo $resultadoFinal; // Exibe: 7

$resultadoFinal = '<br>teste';
echo $resultadoFinal; // Exibe: teste
```

### 2. Concatenação de Strings
Demonstra como concatenar e exibir strings com variáveis.

```php
$nome = "Nathan";
echo "<br>Meu nome é: $nome"; // Exibe: Meu nome é: Nathan
echo "<br>Meu nome é: " . $nome; // Exibe: Meu nome é: Nathan
```

### 3. Operadores Aritméticos
Realiza operações matemáticas básicas (soma, subtração, multiplicação, divisão).

```php
$a = 6;
$b = 3;

echo "<br>" . $a + $b; // Exibe: 9
echo "<br>" . $a - $b; // Exibe: 3
echo "<br>" . $a * $b; // Exibe: 18
echo "<br>" . $a / $b; // Exibe: 2
```

### 4. Estruturas de Repetição
Demonstra o uso de `for` e `while` para repetir ações.

#### Uso do `for`
```php
for($i = 0; $i < 10; $i++) {
    echo "<br>" . $i; // Exibe números de 0 a 9
}
```

#### Uso do `while`
```php
$j = 1;
while($j < 10) {
    echo "<br>" . $j++; // Exibe números de 1 a 9
}
```

### 5. Inclusão de Arquivos
Inclui o arquivo `page2.php` no código utilizando as funções `include` e `require`. 
- `include`: Não interrompe o script se o arquivo não for encontrado.
- `require`: Interrompe o script se o arquivo não for encontrado.

```php
include("page2.php");
require("page2.php");
```
### 6. Manipulação de String

Para fazer a manipulação de string vamos declarar uma variável para isso: 

```php
$frase = "o meu cachorro foi pra norte";
```

Retornar tamanho da String:

```php
echo "<br>". strlen($frase);
```

Fazer a troca de uma palavra

```php
echo "<br>". str_replace("cachorro", "gato", $frase);
```

Colocar toda frase em Caixa alta

```php
echo "<br>" . strtoupper($frase);
```

Transformar a string em um array onde cada letra e uma posicão

```php
$array_string = str_split($frase);

print_r($array_string);
```

### 7. Funções

A declaração de funcões é igual no JS, onde utilizamos o function:
```php
function somaDoisNumeros($num1, $num2): float{ //a tipagem do retorno é opcional
    return $num1 + $num2;
}

$resultado = somaDoisNumeros(2, 5);
echo "<br>" . $resultado;

?>
```