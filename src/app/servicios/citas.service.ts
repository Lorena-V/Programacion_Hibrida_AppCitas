import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';


@Injectable({
  providedIn: 'root', // Hace que el servicio sea accesible en toda la aplicación
})

export class CitasService {
  
  private _citas: Cita[] = [
    new Cita("esta es una cita", "este es un autor"),
    new Cita("esta es otra cita", "este es otro autor"),
    new Cita("esta es otra otra cita", "este otro otro un autor")
  ]

  constructor() {}

  getCitas(): Cita[] {    // Programar metodos
    return this._citas
  } 
  
  agregarCita(c:Cita) {   // Para agregar producto a la lista
    this._citas.push(c);
  }

  
}
