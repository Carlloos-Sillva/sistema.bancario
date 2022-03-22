import { Cliente } from "./Cliente.js";

import { ContaCorrente} from "./conta/ContaCorrente.js";
import { ContaPoupanca } from "./conta/ContaPoupanca.js";
import { ContaSalario } from "./conta/ContaSalario.js"

import { Diretor } from "./funcionario/Diretor.js";
import { Gerente } from "./funcionario/gerente.js";

import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Carlos", 123456789, 3255);
const conta1 = new ContaCorrente(1001, cliente1,);
conta1.depositar(500);
conta1.sacar(150);

const contaPoupanca = new ContaPoupanca (0, cliente1, 1001);
contaPoupanca.depositar(100);

const diretor = new Diretor("Natalia", 789456123, 10000);
diretor.cadastrarSenha("1234");;

const logadoDiretor = SistemaAutenticacao.login(diretor, "1234");

//console.log(logadoDiretor);
console.log(diretor);
//console.log(logado);
console.log(cliente1);
//console.log(contaPoupanca);
