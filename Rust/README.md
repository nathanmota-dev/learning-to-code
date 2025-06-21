## 1. Cargo — o gerenciador de pacotes do Rust

O `cargo` é tipo o `npm`, `pip`, ou `maven` do Rust. Ele cuida de:

* Compilar o projeto
* Baixar dependências (crates)
* Rodar o código
* Rodar testes

### Comandos principais:

```bash
cargo new nome_projeto     # cria um novo projeto
cargo build                # compila
cargo run                  # compila e roda
cargo check                # verifica erros sem compilar
cargo test                 # executa testes
cargo add nomedocrate      # adiciona uma crate (precisa do cargo-edit)
```

---

## 2. Crates — pacotes/bibliotecas

* Um **crate** é qualquer pacote Rust (lib ou binário).
* O site [https://crates.io](https://crates.io) é o repositório oficial.

### Exemplo de uso:

```toml
# Cargo.toml
[dependencies]
rand = "0.8"
```

Depois, no código:

```rust
use rand::Rng;

fn main() {
    let num = rand::thread_rng().gen_range(1..=10);
    println!("Número aleatório: {}", num);
}
```

---

## 3. Módulos (mod)

Rust organiza código com **módulos (`mod`)** e **arquivos separados**.
Exemplo simples:

### Estrutura:

```
src/
  main.rs
  calculo.rs
```

### `main.rs`:

```rust
mod calculo;

fn main() {
    calculo::soma(2, 3);
}
```

### `calculo.rs`:

```rust
pub fn soma(a: i32, b: i32) {
    println!("Resultado = {}", a + b);
}
```

* `mod nome;` importa o arquivo `nome.rs`
* `pub` torna a função pública (visível fora do módulo)

---

## 4. Outros arquivos:

* Todo projeto tem um `Cargo.toml` com nome, versão, dependências etc.
* `src/main.rs` → ponto de entrada de um binário
* `src/lib.rs` → ponto de entrada se for biblioteca
* `cargo run` → compila e roda o `main.rs`
* Crates são como bibliotecas externas (npm packages)

## 5. Característicias do Rust:

### ##  Aqui estão algumas particularidades e boas práticas:
- Usa snake_case para funções, etc.
- Tudo é imutável por padrão.
- match é obrigatório.
- Não tem null.
- Possui pattern matching.
- Sem Garbage Collector.

Exemplo:

```rust
fn calcular_total() {} 
struct Pessoa {}           
const MAX_VALOR: u32 = 100;  
```

### ## Tudo é `immutable` por padrão

```rust
let x = 5;        // não pode mudar
let mut y = 10;   // pode mudar
```

* Isso evita bugs acidentais.
* Para alterar, use `mut`.

---

`match` é poderoso e obrigatório em muitos casos

### ## Ao contrário de `switch`, o `match`:

* Exige que **todos os casos sejam cobertos**
* Pode **desestruturar enums**, `Option`, `Result`, structs, tuplas...

```rust
match opcao {
    Some(valor) => println!("Tem valor: {}", valor),
    None => println!("Nada"),
}
```

---

### ## Não tem `null`

* Usa `Option` para representar ausência de valor.
* Te obriga a lidar com os dois casos (`Some` ou `None`).

---

### ## Possui `pattern matching` e `destructuring`

Você pode extrair valores direto de structs, tuplas ou enums:

```rust
let (a, b) = (1, 2);

let Pessoa { nome, idade } = pessoa;
```

---

### ## Sem coleta de lixo

* Gerencia memória via **ownership e borrow checker**
* Elimina custos em tempo de execução
* Zero-cost abstraction

---

O código está em: [main.rs)](./src/main.rs)