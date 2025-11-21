// errores-bueno.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-errores-bueno',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './errores-bueno.component.html' 
})
export class ErroresBuenoComponent {
  user = '';
  password = '';

  error = signal(false);
  verPass = signal(false);

  estadoUsuario = signal<'neutral' | 'error' | 'ok'>('neutral');

  validarUsuario() {
    if (this.user.length === 0) {
      this.estadoUsuario.set('neutral');
    } else if (this.user.length < 3) {
      this.estadoUsuario.set('error');
    } else {
      this.estadoUsuario.set('ok');
    }
  }

  toggleVerPass() {
    this.verPass.update(v => !v);
  }

  login() {
    if (this.user !== 'admin' || this.password !== '1234') {
      this.error.set(true);
    } else {
      alert('Inicio de sesión exitoso');
      this.error.set(false);
    }
  }

  reintentar() {
    this.error.set(false);
  }
}