import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../componentes/header-heuristica/header-heuristica';
import { FlexibilidadMaloComponent } from "./flexibilidad-malo.component";
import { FlexibilidadBuenoComponent } from "./flexibilidad-bueno.component";

@Component({
  selector: 'app-visibilidad-page',
  standalone: true,
  // Importamos los dos componentes aquí para poder usarlos en el HTML
  imports: [HeaderHeuristicaComponent, FlexibilidadMaloComponent, FlexibilidadBuenoComponent], 
  template: `
    <div class="container mx-auto p-4">
        
        <app-header-heuristica 
        numeroHeuristica="7"
        titulo="Flexibilidad y Eficiencia de Uso"
        concepto="Los aceleradores —invisibles para el usuario novato— pueden acelerar la interacción para el usuario experto de manera que el sistema pueda atender a usuarios inexpertos y expertos.

"></app-header-heuristica>
      
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <section>
            <app-flexibilidad-malo></app-flexibilidad-malo>
        </section>

        <section>
            <app-flexibilidad-bueno></app-flexibilidad-bueno>
        </section>
      </div>
    </div>
  `
})
export class VisibilidadPageComponenth7 {}