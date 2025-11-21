// flexibilidad-malo.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRecord, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flexibilidad-malo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flexibilidad-malo.component.html' 
})
export class FlexibilidadMaloComponent {
  mensaje:  string='';

  enviar() {
    console.log('Mensaje enviado:', this.mensaje);
  }
}