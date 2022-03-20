import {Cliente} from "./Cliente.js";
import { ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Carlos";
cliente1.cpf = 123456789;

const cliente2 = new Cliente();
cliente2.nome = "Natalia"
cliente2.cpf = 987654321;

const contaCorrenteCarlos = new ContaCorrente();
contaCorrenteCarlos.agencia = 1001;

contaCorrenteCarlos.depositar(100);
contaCorrenteCarlos.depositar(300);
contaCorrenteCarlos.depositar(-100);

const valorSacado = contaCorrenteCarlos.sacar(50);

console.log(valorSacado);

console.log(contaCorrenteCarlos);


 // Futuro teste para varias conta e cliente.
const contaCorrenteNatalia = new ContaCorrente();
contaCorrenteNatalia.agencia = 1001;
contaCorrenteNatalia.saldo = 0;
