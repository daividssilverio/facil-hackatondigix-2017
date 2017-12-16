import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Servico} from "../../model/servico";
import {Conta} from "../../model/conta";
import { ContaPage } from '../conta/conta';
import { App } from 'ionic-angular/components/app/app';

@Component({
  templateUrl: 'servicos.html'
})
export class ServicosPage {
  
  contas : Conta[]   = [new Conta(145.8, "Dezembro/2018", "nao-pago"),
  new Conta(145.8, "Novembro/2018", "pago"),
  new Conta(156.8, "Outubro/2018", "pago"),
  new Conta(195.71, "Setembro/2018", "pago")];

  servicosDisponiveis : any[] = [
    [new Servico("Energiza", "assets/imgs/luz.png", this.contas),
      new Servico("Águas Guariroba", "assets/imgs/agua.png", this.contas)],
    [new Servico("IPTU", "assets/imgs/iptu.png", this.contas),
      new Servico("IPVA", "assets/imgs/ipva.png", this.contas)]
  ];

  constructor(public navCtrl: NavController, public appCtrl: App) {
  }

  servicoSelecionado(servico: Servico) {
    this.appCtrl.getRootNav().push(ContaPage, { servico: servico })
  }
}
