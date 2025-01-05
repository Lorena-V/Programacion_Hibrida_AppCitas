import { Component } from '@angular/core';
import { IonButton, IonIcon, IonButtons,
          IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'
import { buildOutline, settingsOutline } from 'ionicons/icons'
// import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, 
             IonButtons, RouterModule], 
})

export class HomePage {

//   constructor(private router:Router) {
//     addIcons({buildOutline});
//       settingsOutline
// }
  constructor() {
      addIcons({buildOutline});
        settingsOutline
  }

  // Ruta hacia pag gestión
  // irGestionOnClick(){
  //   console.log("Ir a gestion");
  //   this.router.navigate(['/gestion']);
  // }

  // Ruta hacia pagina configuracion
  // irConfiguracionOnClick(){
  //   console.log("Ir a Configuracion");
  //   this.router.navigate(['/configuracion']);
  // }
}


