import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FavoritasComponent } from './components/favoritas/favoritas.component';
import { PromocionesComponent } from './components/promociones/promociones.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FavoritasComponent,
    PromocionesComponent,
    ConocenosComponent,
    MenuComponent,
    ContactoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    //Cargamos routing como modulos
    routing
  ],
  providers: [
    //Cargamos como servicio en providers appRoutingProviders
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
