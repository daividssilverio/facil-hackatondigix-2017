import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { PendenciasPage } from '../pages/pendencias/pendencias';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { PagamentoPage } from '../pages/pagamento/pagamento';
import { ServicosPage } from "../pages/servicos/servicos";
import { ContaPage } from '../pages/conta/conta';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { BrMaskerModule } from 'brmasker-ionic-3';
import {PerfilPage} from "../pages/perfil/perfil";

@NgModule({
  declarations: [
    MyApp,
    PendenciasPage,
    TabsPage,
    LoginPage,
    ServicosPage,
    ContaPage,
    PagamentoPage,
    PerfilPage
  ],
  imports: [
    BrMaskerModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__facildb', driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PendenciasPage,
    TabsPage,
    LoginPage,
    ServicosPage,
    ContaPage,
    PagamentoPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
