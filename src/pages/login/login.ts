import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  templateUrl: 'login.html',
})
export class LoginPage {
  form;

  constructor(private storage: Storage, public alertCtrl: AlertController) {
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
      }]
    });

    if (this.form.status === 'VALID') {
      alert.present()
      this.storage.set("user", this.form.value.cpf)
    }

    this.storage.get('user').then((val) => {
      //todo: usar cpf depois para alguma coisa
      console.log('Alow ', val);
    });
  }

}
