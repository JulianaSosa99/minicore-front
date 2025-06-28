import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Comision } from '../../models/comision.model'; 
@Component({
  selector: 'app-comisiones-list',
  standalone: false,
  templateUrl: './comisiones-list.component.html',
  styleUrl: './comisiones-list.component.scss'
})
export class ComisionesListComponent {
 desde = '';
  hasta = '';
  comisiones: Comision[] = [];
  loading = false;
  error = '';

  constructor(private api: ApiService) {}

  calcular() {
    if (!this.desde || !this.hasta) {
      this.error = 'Selecciona ambas fechas';
      return;
    }
    this.loading = true;
    this.api.getComisiones(this.desde, this.hasta).subscribe({
      next: data => { this.comisiones = data; this.loading = false; },
      error: _ => { this.error = 'Error al calcular comisiones'; this.loading = false; }
    });
  }
}
