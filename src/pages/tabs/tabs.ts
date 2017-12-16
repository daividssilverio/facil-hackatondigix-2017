import { Component } from '@angular/core';

import { ServicosPage } from '../servicos/servicos';
import { PendenciasPage } from '../pendencias/pendencias';
import {Storage} from "@ionic/storage";
import {Usuario} from "../../model/usuario";
import {PerfilPage} from "../perfil/perfil";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  public user: Usuario = new Usuario("", "");
  tab1Root = PendenciasPage;
  tab2Root = ServicosPage;
  tab3Root= PerfilPage;

  constructor(private storage: Storage) {
    this.storage.get("user").then((user) => {
      if (user != null) {
        this.user = user;
      }
    })
  }
}
