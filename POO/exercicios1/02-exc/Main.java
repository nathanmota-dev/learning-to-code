public class Main(){
    public static void main(String[] args){
       Banco banco1 = new Banco("Itau", "2324", 231.47F);
       banco1.depositarDinheiro(200);
       banco1.sacarDinheiro(100);
       banco1.exibirSaldo();
    }
}