import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { OpcionCitasComponent } from 'src/app/componentes/opcion-citas/opcion-citas.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, OpcionCitasComponent, 
            CommonModule, IonButtons, IonBackButton ]
})

export class GestionPage {  // carga datos con el ciclo de vida

  constructor( ) { }
}
