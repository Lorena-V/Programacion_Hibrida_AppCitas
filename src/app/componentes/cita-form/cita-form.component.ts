import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cita-form',
  templateUrl: './cita-form.component.html',
  styleUrls: ['./cita-form.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonItem, IonInput, IonButton, FormsModule],
  
})

export class CitaFormComponent implements OnInit {
  textoStr: string = ""; // Campo para el texto de la cita
  autorStr: string = "";

  @Output() onCreate = new EventEmitter<{ texto: string; autor: string }>()
  // Emisor para enviar la cita al componente padre
  
  
  constructor() { }

  ngOnInit() {}

  onClick() {
    console.log("producto::onClick")
    this.onCreate.emit({ texto: this.textoStr, autor: this.autorStr });
  }
  
  }
