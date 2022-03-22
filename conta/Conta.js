export class Conta{
    constructor(saldoPoupanca, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Não deveram instanciar tipo Conta Diretamente"); //Classe abstrata
        }
        
        this._saldo = saldoPoupanca;
        this._cliente = cliente;
        this._agencia = agencia;

        if(this.constructor == Conta){
            console.log("Não pode iniciar")
        }
    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //Método abstrato
    sacar(valor){
        throw new Error("O método Sacar da conta é abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){ 
        this._saldo += valor;
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}