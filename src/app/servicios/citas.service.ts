import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';

@Injectable({
  providedIn: 'root', // Hace que el servicio sea accesible en toda la aplicación
})
export class CitasService {
  private citas: Cita[] = []; // Lista de citas

  constructor() {}

  // Método para obtener las citas
  obtenerCitas(): Cita[] {
    return this.citas;
  }

  // Método para agregar una nueva cita
  agregarCita(cita: Cita): void {
    this.citas.push(cita);
  }
}

