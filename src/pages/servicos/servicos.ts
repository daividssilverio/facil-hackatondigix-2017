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

  contas : Conta[]   = [new Conta(145.84, "Dezembro/2018", false, false),
  new Conta(145.89, "Novembro/2018", false, true),
  new Conta(156.80, "Outubro/2018", true, false),
  new Conta(195.71, "Setembro/2018", true, false)];


  servicosDisponiveis : any[] = [
    [new Servico("Energisa S/A", "assets/imgs/light-bulb.svg", this.contas),
      new Servico("Águas guariroba", "assets/imgs/drop.svg", this.contas)],
    [new Servico("IPTU", "assets/imgs/house.svg", this.contas),
      new Servico("IPVA", "assets/imgs/sedan.svg", this.contas)]
  ];

  constructor(public navCtrl: NavController, public appCtrl: App) {
  }

  servicoSelecionado(servico: Servico) {
    this.appCtrl.getRootNav().push(ContaPage, { servico: servico })
  }
}
