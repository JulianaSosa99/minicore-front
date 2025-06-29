import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentasListComponent } from './pages/ventas-list/ventas-list.component';
import { ComisionesListComponent } from './pages/comisiones-list/comisiones-list.component';

const routes: Routes = [
  // Redirige la ruta vacía al listado de ventas
  { path: '', redirectTo: 'ventas', pathMatch: 'full' },

  // Tus rutas normales
  { path: 'ventas', component: VentasListComponent },
  { path: 'comisiones', component: ComisionesListComponent },

  // Opcional: ruta comodín para “Not Found”
  { path: '**', redirectTo: 'ventas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // esto evita reposicionamiento en scroll al navegar
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
