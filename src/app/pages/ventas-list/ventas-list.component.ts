import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Venta } from '../../models/venta.model';

@Component({
  selector: 'app-ventas-list',
  standalone: false,
  templateUrl: './ventas-list.component.html',
  styleUrl: './ventas-list.component.scss'
})
export class VentasListComponent {
 ventas: Venta[] = [];
  loading = false;
  error = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.fetchVentas();
  }

  fetchVentas() {
    this.loading = true;
    this.api.getVentas().subscribe({
      next: v => { this.ventas = v; this.loading = false; },
      error: _ => { this.error = 'Error al cargar ventas'; this.loading = false; }
    });
  }
}
