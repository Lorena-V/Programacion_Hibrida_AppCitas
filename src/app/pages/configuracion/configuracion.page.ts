import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonToggle, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';
import { IonToggleCustomEvent, ToggleChangeEventDetail } from '@ionic/core/components';



@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, 
    FormsModule, IonList, IonItem, IonToggle, IonButtons, IonBackButton]
})

export class ConfiguracionPage implements OnInit {
  deboBorrar: boolean = false;

  constructor(
    private configuracionService: ConfiguracionService
  ) {}

  async ngOnInit() { 
    this.deboBorrar = await this.configuracionService.deboBorrar(); // Inicializar valor
  }

  ionChange($event: IonToggleCustomEvent<ToggleChangeEventDetail<any>>) {
    const valor = $event.detail.checked; // Capturar el estado del toggle
    console.dir({ valor });
    this.configuracionService.setDeboBorrar(valor); // Guardar preferencia
  }
}

