import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, 
  IonList, IonItem, IonInput, IonButton, IonIcon, 
  IonText, IonCard, IonCardContent, 
  IonCardHeader, IonCardTitle, IonThumbnail, IonLabel, IonCardSubtitle } from '@ionic/angular/standalone';
import { OpcionCitasComponent } from 'src/app/componentes/opcion-citas/opcion-citas.component';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.page.html',
  styleUrls: ['./gestion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, OpcionCitasComponent, 
    IonList, IonItem, IonInput, IonButton, IonIcon, IonText, IonCard, IonCardContent, 
    IonCardHeader, IonCardTitle, IonThumbnail, IonLabel, IonCardSubtitle]
})

export class GestionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
