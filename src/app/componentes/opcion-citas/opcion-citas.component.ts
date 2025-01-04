import { Component, OnInit } from '@angular/core';
import { CitaListComponent } from '../cita-list/cita-list.component';
import { CitaFormComponent } from '../cita-form/cita-form.component';

@Component({
  selector: 'app-opcion-citas',
  templateUrl: './opcion-citas.component.html',
  styleUrls: ['./opcion-citas.component.scss'],
  standalone: true,
  imports: [CitaListComponent, CitaFormComponent]
})
export class OpcionCitasComponent  implements OnInit {
  
  constructor() {}

  ngOnInit() {}

}
