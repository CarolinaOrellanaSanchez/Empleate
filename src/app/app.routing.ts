import { Routes, RouterModule } from '@angular/router';
import { ListaOfertasComponent } from './lista-ofertas/lista-ofertas.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { LISTAOFERTAS_ROUTES } from './lista-ofertas/lista-ofertas.routing';

const APP_ROUTES: Routes = [
    { path: '', component: ListaOfertasComponent },
    { path: 'quienes-somos', component: QuienesSomosComponent },
    { path: 'lista-ofertas/:id', component: ListaOfertasComponent, children: LISTAOFERTAS_ROUTES }
];

export const routing = RouterModule.forRoot(APP_ROUTES);