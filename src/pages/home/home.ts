import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Pendencia } from '../../model/pendencia';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pendencia : Pendencia;
  cpf:String;
  pendencias = [new Pendencia("AGEHAB",500,false)]


  constructor(public navCtrl: NavController ,private storage: Storage) {
    this.storage.get("user").then((user) => {
      if (user != null) {
        
      }
    });

  }

}
