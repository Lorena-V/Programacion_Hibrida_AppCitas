import { Component, OnInit } from '@angular/core';
import { CitaListComponent } from '../cita-list/cita-list.component'; // clase hijo
import { CitaFormComponent } from '../cita-form/cita-form.component';   // clase hijo
import { CitasService } from 'src/app/servicios/citas.service';
import { Cita } from 'src/app/modelo/cita';

@Component({
  selector: 'app-opcion-citas',
  templateUrl: './opcion-citas.component.html',
  styleUrls: ['./opcion-citas.component.scss'],
  standalone: true,
  imports: [CitaListComponent, CitaFormComponent]
})

export class OpcionCitasComponent  implements OnInit {
  
  listaCitas:Cita[] = []    // // Lista para almacenar las citas

  constructor(
    private citasService:CitasService   // Inyección del servicio
  ) {}

  ngOnInit() {  // Cuando se carga el GestionPage ocupa el servicio para recuperar las citas en memoria
    this._actualizar()  // Luego que ingresa una cita, actualiza el arreglo
  }

  private _actualizar() {
    this.listaCitas = this.citasService.getCitas()    // Recupero y guardo los datos
  }
    

  onCreateCita($event: { texto: string; autor: string }) {
    // Crear una nueva instancia de Cita usando los parámetros recibidos
    const cita = new Cita($event.texto, $event.autor);
    this.citasService.agregarCita(cita); // Agregar la cita al servicio
    this.listaCitas = this.citasService.getCitas(); // Actualizar la lista local
    this._actualizar();
    
  }

}
