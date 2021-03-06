import {Component} from "@angular/core";
import {AlertController, NavController} from "ionic-angular";
import {Storage} from "@ionic/storage";
import {Usuario} from "../../model/usuario";
import {LoginPage} from "../login/login";
import {App} from "ionic-angular/components/app/app";

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})

export class PerfilPage {
  user: Usuario = new Usuario('', '');

  constructor(public appCtrl: App, private storage: Storage, private alertCtrl: AlertController) {
    this.storage.get("user").then((user) => {
      if (user != null) {
        this.user = user;
      }
    })
  }

  public logout() {
    this.alertCtrl.create({
      title: 'Sair',
      message: 'Deseja realmente sair da aplicação?',
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.executarLogout()
          }
        },
        {
          text: 'Não'
        }
      ]
    }).present()
  }

  private executarLogout() {
    this.storage.clear();
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }
}
