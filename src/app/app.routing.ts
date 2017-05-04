import { Routes, RouterModule } from '@angular/router';
import { ListaOfertasComponent } from './lista-ofertas/lista-ofertas.component';

const APP_ROUTES: Routes = [
    { path: '', component: ListaOfertasComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);