// prevencion-errores-malo.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prevencion-malo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'./prevencion-errores-malo.component.html'
})
export class PrevencionMaloComponent {
  accountNumber = '';
  amount = '';
  
  transfer() {
    // Sin validaciones - permite errores críticos
    console.log('Transferencia realizada');
  }
}