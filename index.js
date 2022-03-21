import {Cliente} from "./Cliente.js";
import { ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Carlos", 123456789);

const cliente2 = new Cliente("Natalia", 987654321);

const conta1 = new ContaCorrente(1001, cliente1,);
conta1.depositar(500);

const conta2 = new ContaCorrente(1002, cliente2);
conta2.depositar(150);

let valor = 200;
conta1.tranferir(valor, conta2);

console.log(conta1);
console.log(conta2);
console.log(ContaCorrente.numeroDeContas);
