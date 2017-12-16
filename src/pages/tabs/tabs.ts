import { Component } from '@angular/core';

import { ServicosPage } from '../servicos/servicos';
import { PendenciasPage } from '../pendencias/pendencias';
import { ContaPage } from '../conta/conta';
import {Storage} from "@ionic/storage";
import {Usuario} from "../../model/usuario";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  public user: Usuario = new Usuario("", "");
  tab1Root = PendenciasPage;
  tab2Root = ServicosPage;
  tabConta = ContaPage;

  constructor(private storage: Storage) {
    this.storage.get("user").then((user) => {
      if (user != null) {
        this.user = user;
      }
    })
  }
}
