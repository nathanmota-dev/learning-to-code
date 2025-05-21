fn main() {
    hello_word();
    variables_dif();
    operacao_mat(2, 5, "soma");
    escolha_cor("azul");
    outros_loops();
    ownership();
    clone();
    borrowing();
    seta_pessoa();
    mover(Direcao::Norte);
    mover(Direcao::Sul);
    mover(Direcao::Leste);
    mover(Direcao::Oeste);
    item();
    res();
    resultado();

    match exemplo() {
        Ok(_) => (),
        Err(e) => println!("Erro em exemplo: {}", e),
    }
    //Ou ignorar o erro pode chamar assim: let _ = exemplo(); mas nao é recomendado
    
}

fn hello_word() {
    println!("Hello, word!");
}

fn variables_dif() {
    let a = 10; //valor mútavel
    let mut b = 20; //valor imutável

    println!("a = {}, b = {}", a, b);

    //Alterando valor da variável de 20 para 40
    b = b + b;
    println!("b = {}", b);

    //Soma
    let res = a + b;
    println!("res = {}", res); //Retorna 50

    //Outras varíaveis
    let idade = 25; // i32
    println!("idade = {}", idade);

    let pi = 3.14; // f64
    println!("pi = {}", pi);

    let nome = "Rust"; // string imutável (&str)
    println!("nome = {}", nome);

    let cidade = String::from("Uberlandia"); // String mutável
    println!("cidade = {}", cidade);

    let letra = 'a'; // char
    println!("letra = {}", letra);

    let positivo = true; // bool
    println!("positivo = {}", positivo);
}

//if
fn operacao_mat(num1: i32, num2: i32, opc: &str) {
    if opc == "soma" {
        let res = num1 + num2;
        println!("Resultado = {}", res);
    } else if opc == "subtracao" {
        let res = num1 - num2;
        println!("Resultado = {}", res);
    } else if opc == "multiplicacao" {
        let res = num1 * num2;
        println!("Resultado = {}", res);
    } else if opc == "divisao" {
        let res = num1 / num2;
        println!("Resultado = {}", res);
    }
}

//match
fn escolha_cor(color: &str) {
    match color { //o match funciona como um switch
        "vermelho" => println!("A cor é vermelho"),
        "azul" => println!("A cor é azul"),
        "amarelo" => println!("A cor é amarelo"),
        _ => println!("A cor não é primaria"),
    }
}

fn outros_loops(){
    //Loop infinito
    let mut contador = 0;
    loop {
        println!("contador = {}", contador);
        contador += 1;
        if contador == 3 {
            break;
        }
    }

    //while
    let mut n = 0;
    while n < 5 {
        println!("n = {}", n);
        n += 1;
    }

    //for
    for i in 0..5 { //conta de 0 a 4, para ir até 5 tem que usar: 0..=5
        println!("i = {}", i);
    }
}

// Ownership

fn ownership(){
    let nome = String::from("Rust");
    let outro = nome; // nome é movido para 'outro'

    // println!("{}", nome); // erro: 'nome' não é mais válido
    println!("{}", outro); // ok
}

//dessa forma a gente move o dono daquele valor, e só pode haver um dono por vez, é parecido com o endereço de memória/ponteiros do mas não é igual porque o rust faz tudo automaticamente e deixa a logica por debaixo dos panos enquanto no c o proprio usuário tem que alocar e desalocar memória e cuida dessa questão de passar ponteiros por exemplo

//caso a gente não querer mover o dono e sim o valor usamos clone

fn clone(){
    let nome = String::from("Rust");
    let outro = nome.clone();

    println!("nome: {}, clone: {}", nome, outro)
}

// Borrowing

fn imprime_nome(nome: &String) {
    println!("Olá, {}", nome);
}

fn borrowing() {
    let nome = String::from("Rust");
    imprime_nome(&nome); // emprestando
    println!("Ainda posso usar: {}", nome);
}
//ou seja, nenhuma propriedade foi movida, a função só olhou o valor

//Struct
struct Pessoa {
    nome: String,
    idade: u32,
}

fn seta_pessoa() {
    let p = Pessoa {
        nome: String::from("João"),
        idade: 30,
    };

    println!("{} tem {} anos", p.nome, p.idade);
}


//Enum

enum Direcao {
    Norte,
    Sul,
    Leste,
    Oeste,
}

fn mover(d: Direcao) {
    match d {
        Direcao::Norte => println!("Indo para o norte"),
        Direcao::Sul => println!("Indo para o sul"),
        _ => println!("Outra direção"),
    }
}

//No Rust utilizamos Option para substituir um valor null
fn achar_item(indice: usize) -> Option<String> {
    let itens = vec!["Maçã", "Banana", "Pêra"];
    itens.get(indice).map(|s| s.to_string())
}

fn item() {
    match achar_item(1) {
        Some(item) => println!("Achei: {}", item),
        None => println!("Índice inválido"),
    }
}

//Rust não tem try/catch pra tratar execções, nos usando Result
fn dividir(a: f64, b: f64) -> Result<f64, String> {
    if b == 0.0 {
        Err("Divisão por zero".to_string())
    } else {
        Ok(a / b)
    }
}

fn res() {
    match dividir(10.0, 0.0) {
        Ok(resultado) => println!("Resultado = {}", resultado),
        Err(erro) => println!("Erro: {}", erro),
    }
}

// O tratamento de erros é feito com match e ?   
fn resultado(){
    let resultado = dividir(10.0, 0.0);

    match resultado {
        Ok(valor) => println!("Ok: {}", valor),
        Err(e) => println!("Erro: {}", e),
    }
}

//Propagar o erro com ?
fn exemplo() -> Result<(), String> {
    let valor = dividir(10.0, 0.0)?; // se der Err, sai da função
    println!("Valor = {}", valor);
    Ok(())
}