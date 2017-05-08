import { Routes, RouterModule } from '@angular/router';
import { ListaOfertasComponent } from './lista-ofertas/lista-ofertas.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { LISTAOFERTAS_ROUTES } from './lista-ofertas/lista-ofertas.routing';
import { HomeComponent } from './home/home.component';
import { FormacionComponent } from './formacion/formacion.component';
import { FormularioComponent } from './formulario/formulario.component';
import { OfertaDetalladaComponent } from './oferta-detallada/oferta-detallada.component';
import { FormularioAdmComponent } from './formulario-adm/formulario-adm.component';


const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch:'full' },
    { path: 'oferta-detallada/:id', component: OfertaDetalladaComponent },
    { path: 'formulario', component: FormularioComponent},
    { path: 'formacion', component: FormacionComponent },
    { path: 'lista-ofertas', component: ListaOfertasComponent },
    { path: 'home', component: HomeComponent },
    { path: 'quienes-somos', component: QuienesSomosComponent },
    { path: 'lista-ofertas/:id', component: ListaOfertasComponent, children: LISTAOFERTAS_ROUTES },
    { path: 'formulario-adm', component: FormularioAdmComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES)