import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Servico} from "../../model/servico";

@Component({
  templateUrl: 'servicos.html'
})
export class ServicosPage {

  servicosDisponiveis = [
    new Servico("Energiza", "https://robohash.org/energiza?size=64x64"),
    new Servico("Águas Guariroba", "https://robohash.org/aguas?size=64x64"),
    new Servico("Prefeitura", "https://robohash.org/prefeitura?size=64x64"),
    new Servico("Estado de MS", "https://robohash.org/estadoms?size=64x64"),
  ];

  constructor(public navCtrl: NavController) {
  }

}