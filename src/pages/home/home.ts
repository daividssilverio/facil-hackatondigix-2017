import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Storage} from "@ionic/storage";
import { App } from 'ionic-angular/components/app/app';
import {Pendencia} from "../../model/pendencia";
import {Conta} from "../../model/conta";
import {PagamentoPage} from "../pagamento/pagamento"


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {cpf: "", nome: ""};
  pendencia: Pendencia;
  cpf: String;
  pendencias: Pendencia[] = [
    new Pendencia("AGEHAB","R$ 500,00", true, "Dezembro/2017"),
    new Pendencia("AGEHAB", "R$ 200,00", true, "Novembro/2017"),
    new Pendencia("ENERGISA", "R$ 500,00", true, "Dezembro/2017"),
    new Pendencia("ENERGISA", "R$ 150,00", true, "Novembro/2017"),
    new Pendencia("ÁGUAS", "R$ 190,00", true, "Outubro/2017"),
  ];

  constructor(public navCtrl: NavController, private storage: Storage, public appCtrl: App) {

    this.storage.get("user").then((user) => {
      if (user != null) {
        this.user = user;
      }
    })
  }

  direcionarPagamento(pendencia){
    this.appCtrl.getRootNav().push(PagamentoPage, { conta: new Conta(pendencia.valor, pendencia.mesDeVencimento, "nao-pago", true),
      nomeDaEmpresa: pendencia.nomeDaEmpresa });
  }

}
