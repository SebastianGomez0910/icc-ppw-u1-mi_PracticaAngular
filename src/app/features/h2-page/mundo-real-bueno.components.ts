// mundo-real-bueno.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mundo-real-bueno',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mundo-real-bueno.components.html'
})
export class MundoRealBuenoComponent {
  lastOperation = signal('');
  
  executeOperation(action: string) {
    this.lastOperation.set(action);
  }
}