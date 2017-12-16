import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Servico} from "../../model/servico";
import {Conta} from "../../model/conta";
import { ContaPage } from '../conta/conta';

@Component({
  templateUrl: 'servicos.html'
})
export class ServicosPage {

  servicosDisponiveis = [
    [new Servico("Energiza", "assets/imgs/luz.png", [new Conta(145.8, "Dezembro/2018", "nao-pago", false),
      new Conta(145.8, "Novembro/2018", "pago"),
      new Conta(156.8, "Outubro/2018", "pago"),
      new Conta(195.71, "Setembro/2018", "pago")]),
      new Servico("Águas Guariroba", "assets/imgs/agua.png", [new Conta(145.8, "Dezembro/2018", "nao-pago", false),
        new Conta(145.8, "Novembro/2018", "pago"),
        new Conta(156.8, "Outubro/2018", "pago"),
        new Conta(195.71, "Setembro/2018", "pago")])],
    [new Servico("IPTU", "assets/imgs/iptu.png", [new Conta(145.8, "Dezembro/2018", "nao-pago", false),
      new Conta(145.8, "Novembro/2018", "pago"),
      new Conta(156.8, "Outubro/2018", "pago"),
      new Conta(195.71, "Setembro/2018", "pago")]),
      new Servico("IPVA", "assets/imgs/ipva.png", [new Conta(145.8, "Dezembro/2018", "nao-pago", false),
        new Conta(145.8, "Novembro/2018", "pago"),
        new Conta(156.8, "Outubro/2018", "pago"),
        new Conta(195.71, "Setembro/2018", "pago")])]
  ];

  constructor(public navCtrl: NavController) {
  }

  servicoSelecionado(servico: Servico) {
    this.navCtrl.push(ContaPage, { servico: servico });
  }
}
