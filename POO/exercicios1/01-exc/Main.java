//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
            Carro carro1 = new Carro("Toyota", "Corolla", 2015, "preto");

        System.out.println("Informações:");

        System.out.println("Marca: " + carro1.getMarca());
        System.out.println("Modelo: " + carro1.getModelo());
        System.out.println("Ano de Fabricação: " + carro1.getAnoFabricacao());
        System.out.println("Cor: " + carro1.getCor());

        //Mudando dados

        carro1.setMarca("Volkswagen");
        carro1.setModelo("Gol");
        carro1.setAnoFabricacao(2019);
        carro1.setCor("Azul");

        System.out.println("Informações atualizadas:");

        carro1.exibirInformacoes();

        }
    }
