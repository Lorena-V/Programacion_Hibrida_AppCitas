import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, 
  IonText } from '@ionic/angular/standalone';
import { OpcionCitasComponent } from 'src/app/componentes/opcion-citas/opcion-citas.component';
import { Cita } from 'src/app/modelo/cita';
import { CitasService } from 'src/app/servicios/citas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, OpcionCitasComponent, IonItem, IonButton, 
    IonText, CommonModule ]
})

export class GestionPage implements OnInit {  // carga datos con el ciclo de vida

  citas:Cita[] = []

  constructor(
    private citasService:CitasService
  ) { }

ngOnInit(): void {    // Cuando se carga el GestionPage ocupa el servicio para recuperar las citas en memoria
  this.citas = this.citasService.getCitas()
}

}
