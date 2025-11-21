// estado-sistema-malo.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estado-sistema-malo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl:'./estado-sistema-malo.component.html' 
})
export class EstadoSistemaMaloComponent {
  selectedFile: File | null = null;
  
  onFileSelect(event: any) {
    this.selectedFile = event.target.files[0];
  }
  
  uploadFile() {
    if (!this.selectedFile) return;
    
    // Simula subida - SIN FEEDBACK AL USUARIO
    setTimeout(() => {
      console.log('Archivo subido');
    }, 3000);
  }
}