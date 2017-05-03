import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { ListaOfertasComponent } from './lista-ofertas/lista-ofertas.component';
import { OfertaComponent } from './lista-ofertas/oferta/oferta.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    ListaOfertasComponent,
    OfertaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
