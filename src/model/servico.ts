import { Conta } from './conta';

export class Servico {
  constructor (public nomeDaEmpresa: string, public iconUrl: string, public contas: Conta[]) {}
}
