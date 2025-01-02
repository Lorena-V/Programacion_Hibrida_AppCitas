import { Component, OnInit } from '@angular/core';
import { IonButton, IonIcon, IonButtons,
          IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'
import { settingsOutline, buildOutline } from 'ionicons/icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons
   ],
})

export class HomePage {


  constructor(private router:Router) {
      addIcons({buildOutline});

  }

  irGestionOnClick(){
    console.log("Ir a gestion");
    this.router.navigate(['/gestion']);
  }

  irConfiguracionOnClick(){
    console.log("Ir a Configuracion");
    this.router.navigate(['/configuracion']);
  }
}


