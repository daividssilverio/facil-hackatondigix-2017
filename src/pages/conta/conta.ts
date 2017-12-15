import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

import { NavController } from 'ionic-angular/navigation/nav-controller';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'conta.html',
})
export class ContaPage {
  form;
  user;


  constructor(public navControl: NavController, private storage: Storage, public alertCtrl: AlertController) {

    this.storage.get("user").then((user) => {
      if (user != null) {
        this.user = user;
      }
    })

  }


}
