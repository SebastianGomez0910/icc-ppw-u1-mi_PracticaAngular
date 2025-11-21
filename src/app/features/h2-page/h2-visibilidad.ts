import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../componentes/header-heuristica/header-heuristica';
import { MundoRealBuenoComponent } from './mundo-real-bueno.components';
import { MundoRealMaloComponent } from './mundo-real-malo.component';

@Component({
  selector: 'app-visibilidad-page',
  standalone: true,
  // Importamos los dos componentes aquí para poder usarlos en el HTML
  imports: [MundoRealBuenoComponent, MundoRealMaloComponent, HeaderHeuristicaComponent], 
  template: `
    <div class="container mx-auto p-4">
        
        <app-header-heuristica 
        numeroHeuristica="2"
        titulo="Correspondencia con el Mundo Real"
        concepto="El sistema debe hablar el idioma del usuario, usando palabras, frases y conceptos familiares para el usuario, siguiendo las convenciones del mundo real."></app-header-heuristica>
      
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <section>
          <app-mundo-real-bueno></app-mundo-real-bueno>
        </section>

        <section>
          <app-mundo-real-malo></app-mundo-real-malo>
        </section>
      </div>
    </div>
  `
})
export class VisibilidadPageComponenth2 {}