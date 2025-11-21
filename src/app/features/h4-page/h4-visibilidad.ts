import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../componentes/header-heuristica/header-heuristica';
import { RegistroMaloComponent } from './registro-malo.component';
import { RegistroBuenoComponent } from './registro-bueno.component';

@Component({
  selector: 'app-visibilidad-page',
  standalone: true,
  // Importamos los dos componentes aquí para poder usarlos en el HTML
  imports: [RegistroMaloComponent, RegistroBuenoComponent, HeaderHeuristicaComponent], 
  template: `
    <div class="container mx-auto p-4">
        
        <app-header-heuristica 
        numeroHeuristica="4"
        titulo="Consistencia y Estandares"
        concepto="Los usuarios no deberían preguntarse si diferentes palabras, situaciones o acciones significan lo mismo. Sigue las convenciones de la plataforma y la industria."></app-header-heuristica>
      
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <section>
          <app-registro-bueno></app-registro-bueno>
        </section>

        <section>
          <app-registro-malo></app-registro-malo>
        </section>
      </div>
    </div>
  `
})
export class VisibilidadPageComponenth4 {}