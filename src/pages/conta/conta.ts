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
    new Conta("IPTU", 500, "20/12/2018"),
    new Conta("IPVA", 500, "20/12/2018"),
    new Conta("AGEHAB", 500, "20/12/2018"),
    new Conta("AGEHAB", 500, "20/12/2018")
  ];


  constructor(public navControl: NavController, private storage: Storage, public alertCtrl: AlertController) {

    this.storage.get("user").then((user) => {
      if (user != null) {
        this.user = user;
      }
    })

  }


}
