import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Storage} from "@ionic/storage";
import {Pendencia} from "../../model/pendencia";
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-pagamento',
  templateUrl: 'pagamento.html'
})
export class PagamentoPage {
  pendencia : Pendencia
  user = {cpf: "", nome: ""};
 
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.pendencia = navParams.get('pendencia');
  }

}
