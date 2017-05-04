import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from  './app.routing';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { ListaOfertasComponent } from './lista-ofertas/lista-ofertas.component';
import { OfertaComponent } from './lista-ofertas/oferta/oferta.component';
import { OfertaDetalladaComponent } from './oferta-detallada/oferta-detallada.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { FormacionComponent } from './formacion/formacion.component';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    ListaOfertasComponent,
    OfertaComponent,
    OfertaDetalladaComponent,
    QuienesSomosComponent,
    OfertasComponent,
    FormacionComponent,
    HomeComponent,
    FormularioComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
