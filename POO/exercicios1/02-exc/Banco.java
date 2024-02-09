public class Banco{
    private String nomeBanco;
    private String agencia;
    private float saldo;

    public Banco(String nomeBanco, String agencia, float saldo){
        this.nomeBanco = nomeBanco;
        this.agencia = agencia;
        this.saldo = saldo;
    }

    public String getNomeBanco(){
        return nomeBanco;
    }

    public void setNomeBanco(String nomeBanco){
        this.nomeBanco = nomeBanco;
    }

    public String getAgencia(){
        return agencia;
    }

    public void setAgencia(String agencia){
        this.agencia = agencia;
    }

    public float getSaldo(){
        return saldo;
    }

    public void setSaldo(float saldo){
        this.saldo = saldo;
    }

    public void sacarDinheiro(float valor){
        if (valor <= saldo) {
            saldo -= valor;
            System.out.println("Saque de R$" + valor + " realizado com sucesso.");
        } else {
            System.out.println("Saldo insuficiente para saque.");
        }
    }

    public void depositarDinheiro(float valor){
        saldo += valor;
        System.out.println("Depósito de R$" + valor + " realizado com sucesso.");
    }


    public void exibirSaldo(){
        System.out.println("Saldo: " + saldo);
    }
}