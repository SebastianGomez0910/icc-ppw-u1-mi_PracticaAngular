// registro-malo.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-malo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registro-malo.components.html' 
})
export class RegistroMaloComponent {
  nombre = '';
  email = '';
  password = '';
  
  onSubmit() {
    // Simula proceso que toma tiempo - SIN FEEDBACK
    setTimeout(() => {
      console.log('Usuario registrado');
    }, 3000);
  }
}