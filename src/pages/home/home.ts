import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Storage} from "@ionic/storage";
import {Pendencia} from "../../model/pendencia";
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

  constructor(public navCtrl: NavController, private storage: Storage) {

    this.storage.get("user").then((user) => {
      if (user != null) {
        this.user = user;
      }
    })
  }

  direcionarPagamento(pendencia){
    console.log(pendencia)
    this.navCtrl.push(PagamentoPage, {pendencia :pendencia});
  }

}
