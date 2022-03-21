import { Cliente } from "./Cliente.js";
import { ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Carlos", 123456789);

//const cliente2 = new Cliente("Natalia", 987654321);

const conta1 = new ContaCorrente(1001, cliente1,);
conta1.depositar(500);
conta1.sacar(150);

//const conta2 = new ContaCorrente(1002, cliente2);
//conta2.depositar(150);

const contaPoupanca = new ContaPoupanca (0, cliente1, 1001);
contaPoupanca.depositar(100);

console.log(contaPoupanca);
console.log(conta1);