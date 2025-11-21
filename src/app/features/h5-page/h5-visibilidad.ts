import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../componentes/header-heuristica/header-heuristica';
import { PrevencionMaloComponent } from "./prevencion-errores-malo.component";
import { PrevencionBuenoComponent } from "./prevencion-errores-bueno.component";

@Component({
  selector: 'app-visibilidad-page',
  standalone: true,
  // Importamos los dos componentes aquí para poder usarlos en el HTML
  imports: [HeaderHeuristicaComponent, PrevencionMaloComponent, PrevencionBuenoComponent], 
  template: `
    <div class="container mx-auto p-4">
        
        <app-header-heuristica 
        numeroHeuristica="5"
        titulo="Prevención de Errores"
        concepto="Mejor que buenos mensajes de error es un diseño cuidadoso que previene que ocurra un problema en primer lugar. Elimina condiciones propensas a errores o verifica y presenta una opción de confirmación antes de que se comprometan con la acción."></app-header-heuristica>
      
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <section>
            <app-prevencion-malo></app-prevencion-malo>
        </section>

        <section>
            <app-prevencion-bueno></app-prevencion-bueno>
        </section>
      </div>
    </div>
  `
})
export class VisibilidadPageComponenth5 {}