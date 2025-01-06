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

  async ngOnInit() {  // Cuando se carga el GestionPage ocupa el servicio para recuperar las citas en memoria
    await this.citasService.iniciarPlugin()
    await this._actualizar()
      // Luego que ingresa una cita, actualiza el arreglo
  }

  async _actualizar() {
     this.listaCitas = await this.citasService.getCitas()    // Recupero y guardo los datos
  }
    

  async onCreateCita($event: { texto: string; autor: string }) {
    // Crear una nueva instancia de Cita usando los parámetros recibidos
    const cita: Cita = {
      texto: $event.texto,
      autor: $event.autor,
    };
    await this.citasService.agregarCita(cita); // Agregar la cita al servicio
    this.listaCitas = await this.citasService.getCitas(); // Actualizar la lista local
    await this._actualizar(); // Llama  aactualizar si es necesario
  }
}
