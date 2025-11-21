// mundo-real-malo.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mundo-real-malo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mundo-real-malo.components.html'
})
export class MundoRealMaloComponent {
  lastOperation = signal('');
  
  executeOperation(op: string) {
    this.lastOperation.set(`Ejecutado: ${op}`);
  }
}