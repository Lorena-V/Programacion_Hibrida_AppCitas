import { CommonModule } from '@angular/common';   // Para usar el ngFor
import { Component, Input, OnInit } from '@angular/core';
import { Cita } from 'src/app/modelo/cita';
import { IonItem, IonList, IonLabel, IonIcon, IonCol, IonGrid, IonRow  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cita-list',
  templateUrl: './cita-list.component.html',
  styleUrls: ['./cita-list.component.scss'],
  standalone: true,
  imports: [CommonModule, IonItem, IonList, IonLabel, IonIcon, IonCol, IonGrid, IonRow  ]
})

export class CitaListComponent  implements OnInit {

  @Input() citas: Cita[] = []   // Recibo arreglo 
  constructor() {
      addIcons({trashOutline}); }

  ngOnInit() {}

}
