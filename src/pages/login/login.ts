import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { NavController } from 'ionic-angular/navigation/nav-controller';
import {TabsPage} from "../tabs/tabs";

@Component({
  templateUrl: 'login.html',
})
export class LoginPage {
  form;

  constructor(public navControl: NavController, private storage: Storage, public alertCtrl: AlertController) {
    this.storage.get("user").then((user) => {
      if (user != null) {
        this.irParaHome();
      }
    });
    this.form = new FormGroup({
      cpf: new FormControl("", Validators.required)
    });
  }

  logar() {
    let alert = this.alertCtrl.create({
      title: "Logado",
      message: "Login com sucesso " + this.form.value.cpf,
      buttons: [{
        text: 'Ok',
        handler: () => { this.irParaHome(); }
      }]
    });

    if (this.form.status === 'VALID') {
      this.storage.set("user", {cpf: this.form.value.cpf, nome: "João da Silva"})
      alert.present()
    }
  }

  irParaHome() {
    this.navControl.setRoot(TabsPage);
  }
}
