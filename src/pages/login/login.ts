import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { NavController } from 'ionic-angular/navigation/nav-controller';
import {TabsPage} from "../tabs/tabs";
import {Usuario} from "../../model/usuario";

@Component({
  templateUrl: 'login.html',
})

export class LoginPage {
  form;

  constructor(public navControl: NavController, private storage: Storage, public alertCtrl: AlertController, private localNotifications: LocalNotifications) {
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
    if (this.form.status === 'VALID') {
      this.storage.set("user", new Usuario("João da Silva", this.form.value.cpf));
      this.irParaHome();
    }
  }

  irParaHome() {
    this.localNotifications.schedule({
      text: 'Você tem uma conta para vencer semana que vem!',
      at: new Date(new Date().getTime() + 3600 * 10)
    });
    this.navControl.setRoot(TabsPage);
  }
}




