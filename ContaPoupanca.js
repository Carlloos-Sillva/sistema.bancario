import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoPoupanca, cliente, agencia){
        super(saldoPoupanca, cliente, agencia);
    }
}