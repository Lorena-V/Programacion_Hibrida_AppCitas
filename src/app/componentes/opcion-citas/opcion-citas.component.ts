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
  
  citas:Cita[] = []

  constructor(
    private citasService:CitasService
  ) {}

  ngOnInit(): void {  // Cuando se carga el GestionPage ocupa el servicio para recuperar las citas en memoria

    this.citas = this.citasService.getCitas()
  }

}
