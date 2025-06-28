export interface Venta {
  ventaId: number;
  fecha: string;       // la API devuelve "fecha"
  monto: number;
  vendedor: string;    // la API devuelve "vendedor"
}
