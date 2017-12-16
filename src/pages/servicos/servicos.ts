import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Servico} from "../../model/servico";
import { ContaPage } from '../conta/conta';

@Component({
  templateUrl: 'servicos.html'
})
export class ServicosPage {

  servicosDisponiveis = [
    [new Servico("Energiza", "assets/imgs/luz.png", null),
      new Servico("Águas Guariroba", "assets/imgs/agua.png", null)],
    [new Servico("IPTU", "assets/imgs/iptu.png", null),
      new Servico("IPVA", "assets/imgs/ipva.png", null)]
  ];

  constructor(public navCtrl: NavController) {
  }

  servicoSelecionado(servico: Servico) {
    this.navCtrl.push(ContaPage, { servico: servico });
  }
}
