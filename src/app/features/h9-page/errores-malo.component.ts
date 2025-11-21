// errores-malo.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-errores-malo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'./errores-malo.component.html' 
})
export class ErroresMaloComponent {
  user = '';
  password = '';
  error = signal(false);

  login() {
    this.error.set(true);
    console.error('ERROR 401 - BAD CREDENTIALS');
  }
}