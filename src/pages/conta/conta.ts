import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { Conta } from '../../model/conta';
import { NavController } from 'ionic-angular/navigation/nav-controller';

@Component({
  templateUrl: 'conta.html',
})
export class ContaPage {
  user;
  contas : Conta[] = [
    new Conta(240, "Dezembro/2018", "nao-pago"),
    new Conta(189, "Novembro/2018", "pago"),
    new Conta(256.6, "Outubro/2018", "pago"),
    new Conta(189.09, "Setembro/2018", "pago")
  ];


  constructor(public navControl: NavController, private storage: Storage, public alertCtrl: AlertController) {

    this.storage.get("user").then((user) => {
      if (user != null) {
        this.user = user;
      }
    })

  }


}
