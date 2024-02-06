### Variáveis

- inteiros = byte, short, int, log
- float, boolean
- String

única diferença pra outras linguagens é que na declaração do float precisa colocar um F no final porque se não o java entende que é um boolean. ex:

```bash
float preco = 45.50F;
```

### Condicionais

Se mantém iguais a outras linguages

### Vetores

```bash
int[] idades = new int[10];
```
ou

```bash
int[] idades = {1,2,3,4}
```

da segunda forma caso queire adicionar mais um número ao array não é possível porque o java já entende que o tamanho do array é igual a 4.

```bash
String[] nomes = new String[7];
boolean[] saoBrasileiros = {true, false, true, true};
```

Assim como em outras linguagens os arrays tem métodos auxiliares, um exemplo é:

- para conseguir o tamanho de um array podemos fazer da seguinte forma:   

```bash
String[] animais = new String[3];
animais.length; // retorna tamanho do array = 3
```

### Vetores Dinâmicos

Um array dinâmico é muito vantajoso quando a gente não sabe quantos elementos vão ser adicionados naquela lista, então caso precise adiconar mais um é adicionado dinâmicamente alocando mais um espaço de memória de forma automática. O Java lida com isso com ArrayList.

```bash
import java.util.ArrayList;
ArrayList<Integer> idades = new ArrayList<Integer>();
```

Para adicionar/remover um valor é usado:

```bash
idades.add(5);
idades.add(7)
idades.remove(0); // é removido pelo index, no caso removendo o index 0 é removido 5 (primeiro valor)
```

outros métodos são:

```bash
idades.get(1) // retorna o valor armazenado no indice 1 = 7
idades.size(); // retorna o tamanho do array
```

Além disso contém muitos outros métodos auxiliares como forEach, clear, clone, contains, addAll, etc. 

### Loops

- for
- while
- do while

se mantém da mesma forma a outras linguagens.

### Casting - transformar variáveis

Transforma uma variável de um tipo pro outro, ex: int para boolean.

Dentro do Casting a transformação pode ser automática ou manual, o que vai depender é do tipo da transformação.
Ex:

```bash
int idade1 = 23;
double idade2 = idade1;
```

essa conversão é feita de forma automática pelo java, mas se você fazer o inverso não é possível porque um double é maior que um int, então pra isso é necessário fazer um Casting implícito, ex:

```bash
idade1 = (int) idade2;
```

outro exemplo:

```bash
char letra = 'a';
String nome = String.valueOf(letra);

letra = nome.charAt(0);
```

### Classes

Uma classe serve como um modelo para objetos poderem ser criados. Ela proporciona uma maneira de organizar e estruturar o código de forma modular e reutilizável.

```bash
public class Carro {
}
```

Uma classe pode conter:

- Atributos

Variáveis.

```bash
private String modelo;
private int ano;
```

- Métodos

São associados as classes e representam as ações que os objetos das classes vão realizar.

```bash
public void ligar() {
    System.out.println("O carro está ligado.");
}

public void desligar() {
    System.out.println("O carro está desligado.");
}
```

- Construtores

São métodos especiais chamados durante a criação de um objeto. Servem pra inicializar os atributos das classes.

```bash
public Carro(String modelo, int ano) {
        this.modelo = modelo;
        this.ano = ano;
    }
```

- Modificadores de acesso (gets e sets)

Basicamente são utilizados para que a classe não acesse diretamente os atributos. 

Ou seja = controlam o nível de visibilidade dos membros da classe. 

Por exemplo, o modificador "public" permite que os membros sejam acessados por qualquer parte do código, enquanto o "private" restringe o acesso apenas à própria classe. Além disso tem o protected que podem acessar apenas classes que estão no mesmo pacote.

```bash
public String getModelo() {
    return modelo;
}

public int getAno() {
    return ano;
}

public void setAno(int ano) {
    this.ano = ano;
}
```

Os métodos gets são usados para obter o valor dos atributos, enquanto os métodos sets são usados para definir o valor dos atributos.

* Só é possível ter uma classe publica dentro de um arquivo .java, que é a classe que contém o nome do arquivo, caso tentar colocar outra classe como pública que não tem o mesmo nome do arquivo irá dar erro -> ex: arquivo chamado Main: Public class Main {} é a classe principal e contém o nome do arquivo.

- Instâncias

Os objetos criados a partir de uma classe são chamados de instâncias.

```bash
public class Carro{
    public static void main(String[] args) {
        // Criando instâncias da classe Carro
        Carro carro1 = new Carro("Sedan", 2022);
        Carro carro2 = new Carro("Hatchback", 2021);

        // Acessando atributos e métodos das instâncias
        System.out.println("Modelo do Carro 1: " + carro1.getModelo());
        System.out.println("Ano do Carro 2: " + carro2.getAno());

        carro1.ligar();
        carro2.desligar();
    }
}
```

### Herança

Uma classe herda da outra, a classe vai conter todos os atributos e métodos da outra classe.

A SubClasse herda da SuperClasse.

Ou seja: A herança em Java é a capacidade de uma classe derivar de outra classe, adquirindo automaticamente todos os atributos e métodos públicos e protegidos da classe base. Isso permite que as classes compartilhem código e comportamento comuns, reduzindo a complexidade e aumentando a reutilização do código.

### Polimorfismo

Polimorfismo permite que uma única referência de uma classe base possa se referir a uma instância de uma classe derivada, permitindo que o código seja escrito de maneira genérica e flexível. Há dois tipos de polimorfismo: polimorfismo de sobrecarga e polimorfismo de sobreposição.

### Encapsulamento

O encapsulamento é o processo de esconder a implementação de um objeto ou classe, expondo apenas a sua interface pública. Isso permite que você altere a implementação de uma classe sem afetar os usuários dessa classe e protege o objeto ou classe de modificações indevidas.

### Abstração

Em resumo, a abstração é a capacidade de representar os aspectos essenciais de um objeto ou sistema, ignorando detalhes irrelevantes. Em Java, a abstração é implementada através de classes abstratas e interfaces. Classes abstratas são classes que não podem ser instanciadas, enquanto interfaces são conjuntos de assinaturas de métodos.

### Coleta de lixo
A coleta de lixo é um mecanismo utilizado pelo Java para identificar e remover objetos que não são mais utilizados na aplicação. Isso é feito automaticamente pelo Java Virtual Machine (JVM) sem a necessidade de intervenção do programador. A coleta de lixo é importante porque ajuda a evitar problemas de memória, como vazamento de memória e estouro de pilha, que podem causar problemas de desempenho e até mesmo travar a aplicação.

### Static 

Static é uma palavra-chave em Java que indica que um membro (método ou variável) pertence à classe e não à instância de um objeto. Isso significa que esses membros podem ser acessados diretamente pelo nome da classe, sem a necessidade de uma instância. Por exemplo, suponha que você tenha uma classe chamada Contador, que tem uma variável static chamada "contagem". Você pode acessar essa variável diretamente pela classe, sem precisar criar uma instância da classe: Contador.contagem++;

### Tratamento de Exceção:

O tratamento de exceções em Java é um mecanismo que permite que as aplicações lidem com situações inesperadas, como erros de entrada/saída, divisão por zero e violações de acesso à memória. As exceções são representadas por objetos da classe Exception e suas subclasses.

Existem dois tipos de construções que permitem tratar exceções em Java: try-catch e try-finally.

### Serialização

A serialização em Java é o processo de transformar um objeto em um fluxo de bytes para que possa ser armazenado em um arquivo ou transmitido através de uma rede. Isso permite que os objetos sejam reconstruídos em outros programas ou em outras máquinas.

Para que um objeto possa ser serializado, a classe desse objeto deve implementar a interface java.io.Serializable. Esse interface não possui métodos, apenas indica que a classe é serializável.