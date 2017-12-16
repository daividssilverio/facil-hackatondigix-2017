import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Storage} from "@ionic/storage";
import { App } from 'ionic-angular/components/app/app';
import {Pendencia} from "../../model/pendencia";
import {Conta} from "../../model/conta";
import {PagamentoPage} from "../pagamento/pagamento"


@Component({
  selector: 'page-home',
  templateUrl: 'pendencias.html'
})
export class PendenciasPage {
  user = {cpf: "", nome: ""};
  pendencia: Pendencia;
  cpf: String;
  pendencias: Pendencia[] = [
    new Pendencia("AGEHAB", 500.50, false, "Dezembro/2017"),
    new Pendencia("AGEHAB", 200.25, true, "Novembro/2017"),
    new Pendencia("ENERGISA", 150.98, false, "Dezembro/2017"),
    new Pendencia("ENERGISA", 64.15, true, "Novembro/2017"),
    new Pendencia("ÁGUAS", 35.25, true, "Outubro/2017"),
  ];

  constructor(public navCtrl: NavController, private storage: Storage, public appCtrl: App) {

    this.storage.get("user").then((user) => {
      if (user != null) {
        this.user = user;
      }
    })
  }

  direcionarPagamento(pendencia){
    this.appCtrl.getRootNav().push(PagamentoPage, { conta: new Conta(pendencia.valor, pendencia.mesDeVencimento, false, true),
      nomeDaEmpresa: pendencia.nomeDaEmpresa });
  }

}
