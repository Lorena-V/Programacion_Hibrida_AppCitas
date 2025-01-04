import { Component } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cita-form',
  templateUrl: './cita-form.component.html',
  styleUrls: ['./cita-form.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonItem, IonInput, IonButton],
})

export class CitaFormComponent {
  textoSrt: string = ""; // Campo para el texto de la cita
  autorSrt: string = ""; // Campo para el autor de la cita

  // Emisor para enviar la cita al componente padre
  
  
  constructor() { }

  ngOnInit() {}

  
  }
