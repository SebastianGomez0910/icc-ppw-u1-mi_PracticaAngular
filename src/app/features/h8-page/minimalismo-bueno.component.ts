// minimalismo-bueno.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-minimalismo-bueno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './minimalismo-bueno.component.html' 
})
export class MinimalismoBuenoComponent {
  avanzado = signal(false);

  toggleAvanzado() {
    this.avanzado.update(v => !v);
  }
}