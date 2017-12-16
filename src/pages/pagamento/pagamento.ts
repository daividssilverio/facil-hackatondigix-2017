import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {Conta} from "../../model/conta";


@Component({
  selector: 'page-pagamento',
  templateUrl: 'pagamento.html'
})
export class PagamentoPage {
  conta : Conta;
  user = {cpf: "", nome: ""};
  nomeDaEmpresa;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.conta = navParams.get('conta');
    this.nomeDaEmpresa = navParams.get('nomeDaEmpresa');
  }

}
