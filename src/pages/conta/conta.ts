import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { Conta } from '../../model/conta';
import { Servico } from '../../model/servico';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'conta.html',
})

export class ContaPage {
  user;
  public servicoSelecionado;

  constructor(public navControl: NavController, private navParams: NavParams, private storage: Storage, public alertCtrl: AlertController) {
    this.servicoSelecionado = navParams.get('servico');
    this.storage.get("user").then((user) => {
      if (user != null) {
        this.user = user;
      }
    })

  }


}
