import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Servico} from "../../model/servico";

@Component({
  templateUrl: 'servicos.html'
})
export class ServicosPage {

  servicosDisponiveis = [
    [new Servico("Energiza", "assets/imgs/luz.png"),
      new Servico("Águas Guariroba", "assets/imgs/agua.png")],
    [new Servico("IPTU", "assets/imgs/iptu.png"),
      new Servico("IPVA", "assets/imgs/ipva.png")]
  ];

  constructor(public navCtrl: NavController) {
  }

}
