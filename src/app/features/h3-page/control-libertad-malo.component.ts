// control-libertad-malo.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-libertad-malo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'./control-libertad-malo.component.html' 
})
export class ControlLibertadMaloComponent {
  content = '';
  showModal = signal(false);
  
  saveText() {
    this.showModal.set(true);
    // Usuario queda atrapado por 5 segundos sin poder cancelar
    setTimeout(() => {
      this.showModal.set(false);
    }, 5000);
  }
}