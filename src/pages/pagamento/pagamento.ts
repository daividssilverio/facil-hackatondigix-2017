import {Component} from "@angular/core";
import {NavController, NavParams, ToastController} from "ionic-angular";
import {Conta} from "../../model/conta";

@Component({
  selector: 'page-pagamento',
  templateUrl: 'pagamento.html'
})
export class PagamentoPage {
  conta : Conta;
  user = {cpf: "", nome: ""};
  nomeDaEmpresa;

  constructor(public navCtrl: NavController, private navParams: NavParams, private toastCtrl: ToastController) {
    this.conta = navParams.get('conta');
    this.nomeDaEmpresa = navParams.get('nomeDaEmpresa');
  }

  public copiarParaClipboard() {
    this.toast("Código de barras foi copiado com sucesso!")
  }

  public enviarPorEmail() {
    this.toast("O Boleto chegará no seu e-mail em breve!")
  }

  private toast(mensagem: string) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 1500,
      position: 'bottom'
    });

    toast.present();
  }
}
