import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../componentes/header-heuristica/header-heuristica';
import { ErroresMaloComponent } from './errores-malo.component';
import { ErroresBuenoComponent } from './errores-bueno.component';


@Component({
  selector: 'app-visibilidad-page',
  standalone: true,
  // Importamos los dos componentes aquí para poder usarlos en el HTML
  imports: [HeaderHeuristicaComponent, ErroresMaloComponent, ErroresBuenoComponent], 
  template: `
    <div class="container mx-auto p-4">
        
        <app-header-heuristica 
        numeroHeuristica="9"
        titulo="Reconocer, Diagnosticar y Recuperarse de Errores"
        concepto="El sistema debe ayudar al usuario a entender qué ocurrió, qué causó el error y cómo solucionarlo, usando mensajes claros, no técnicos, y con acciones de recuperación visibles.

"></app-header-heuristica>
      
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <section>
            <app-errores-bueno></app-errores-bueno>
        </section>

        <section>
            <app-errores-malo></app-errores-malo>
        </section>
      </div>
    </div>
  `
})
export class VisibilidadPageComponenth9 {}