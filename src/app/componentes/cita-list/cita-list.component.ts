import { CommonModule } from '@angular/common';   // Para usar el ngFor
import { Component, Input, OnInit } from '@angular/core';
import { Cita } from 'src/app/modelo/cita';

@Component({
  selector: 'app-cita-list',
  templateUrl: './cita-list.component.html',
  styleUrls: ['./cita-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class CitaListComponent  implements OnInit {

  @Input() citas: Cita[] = []   // Recibo arreglo 
  constructor() { }

  ngOnInit() {}

}
