import { NgModule }       from '@angular/core';
import { RouterModule,
         Routes }         from '@angular/router';
import { VentasListComponent } from './pages/ventas-list/ventas-list.component';
import { ComisionesListComponent } from './pages/comisiones-list/comisiones-list.component';

const routes: Routes = [
  { path: '',          redirectTo: 'ventas', pathMatch: 'full' },
  { path: 'ventas',    component: VentasListComponent },
  { path: 'comisiones',component: ComisionesListComponent },
  { path: '**',        redirectTo: 'ventas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
