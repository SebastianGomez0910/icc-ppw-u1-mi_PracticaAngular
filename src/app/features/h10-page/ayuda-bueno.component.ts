// ayuda-bueno.component.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ayuda-bueno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'ayuda-bueno.component.html'
})
export class AyudaBuenoComponent {
  estado = signal<'ok' | 'error-tipo' | 'error-peso' | 'neutral'>('neutral');
  archivoValido = signal(false);
  ayudaVisible = signal(false);

  toggleAyuda() {
    this.ayudaVisible.update(v => !v);
  }

  validarArchivo(event: any) {
    const file = event.target.files[0];

    if (!file) {
      this.estado.set('neutral');
      this.archivoValido.set(false);
      return;
    }

    const tipoValido = 
      file.type === 'application/pdf' || 
      file.type ===
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document';

    if (!tipoValido) {
      this.estado.set('error-tipo');
      this.archivoValido.set(false);
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      this.estado.set('error-peso');
      this.archivoValido.set(false);
      return;
    }

    this.estado.set('ok');
    this.archivoValido.set(true);
  }
}