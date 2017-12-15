import { Component } from '@angular/core';

import { ServicosPage } from '../servicos/servicos';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ContaPage } from '../conta/conta';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ServicosPage;
  tab3Root = ContactPage;
  tabConta = ContaPage;

  constructor() {

  }
}
