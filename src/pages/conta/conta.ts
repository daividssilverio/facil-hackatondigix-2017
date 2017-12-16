import {Component} from "@angular/core";
import {Storage} from "@ionic/storage";
import {AlertController, NavParams} from "ionic-angular";
import { App } from 'ionic-angular/components/app/app';
import {Conta} from "../../model/conta";
import {PagamentoPage} from "../pagamento/pagamento";

@Component({
  templateUrl: 'conta.html',
})

export class ContaPage {
  user;
  public servicoSelecionado;

  constructor(public appCtrl: App, private navParams: NavParams, private storage: Storage, public alertCtrl: AlertController) {
    this.servicoSelecionado = navParams.get('servico');
    this.storage.get("user").then((user) => {
      if (user != null) {
        this.user = user;
      }
    })

  }

  selecionarConta(conta: Conta) {
    this.appCtrl.getRootNav().push(PagamentoPage, {conta: conta, nomeDaEmpresa: this.servicoSelecionado.nomeDaEmpresa});
  }


}
