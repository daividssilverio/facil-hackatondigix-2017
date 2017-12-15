import { Component } from '@angular/core';

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

  constructor(public alertCtrl: AlertController) {
    this.form = new FormGroup({
      cpf: new FormControl("", Validators.required)
      
    });
  }

  processForm() {
    let alert = this.alertCtrl.create({
      title: "Logado",
      message: "Login com sucesso " + this.form.value.cpf,
      buttons: [{
        text: 'Ok',
      }]
    });

    if (this.form.status === 'VALID') {
      alert.present()
    }
  }

}
