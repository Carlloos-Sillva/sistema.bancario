class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }   
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Carlos";
cliente1.cpf = 123456789;

const cliente2 = new Cliente();
cliente2.nome = "Natalia"
cliente2.cpf = 987654321;

const contaCorrenteCarlos = new ContaCorrente();
contaCorrenteCarlos.agencia = 1001;

contaCorrenteCarlos.depositar(100);
contaCorrenteCarlos.depositar(100);

const valorSacado = contaCorrenteCarlos.sacar(50);


const contaCorrenteNatalia = new ContaCorrente();
contaCorrenteNatalia.agencia = 1001;
contaCorrenteNatalia.saldo = 0;

console.log(valorSacado);

console.log(contaCorrenteCarlos._saldo);
