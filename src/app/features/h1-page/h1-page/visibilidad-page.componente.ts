import { Component } from '@angular/core';
import { EstadoSistemaBuenoComponent } from './estado-sistema-bueno.component';
import { EstadoSistemaMaloComponent } from './estado-sistema-malo.component';
import { HeaderHeuristicaComponent } from '../../componentes/header-heuristica/header-heuristica';

@Component({
  selector: 'app-visibilidad-page',
  standalone: true,
  // Importamos los dos componentes aquí para poder usarlos en el HTML
  imports: [EstadoSistemaBuenoComponent, EstadoSistemaMaloComponent, HeaderHeuristicaComponent], 
  template: `
    <div class="container mx-auto p-4">
        
        <app-header-heuristica 
        numeroHeuristica="1"
        titulo="Visibilidad del Estado del Sistema"
        concepto="El sistema debe mantener a los usuarios informadossobre lo que está ocurriendo, proporcionando retroalimentacion apropiada dentro de un tiempo 
        razonable.Los usuarios nunca deben preguntarse que esta pasando en el sistema."></app-header-heuristica>
      
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <section>
          <app-estado-sistema-malo></app-estado-sistema-malo>
        </section>

        <section>
          <app-estado-sistema-bueno></app-estado-sistema-bueno>
        </section>
      </div>
    </div>
  `
})
export class VisibilidadPageComponent {}