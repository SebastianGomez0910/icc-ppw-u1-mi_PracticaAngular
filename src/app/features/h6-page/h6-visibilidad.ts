import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../componentes/header-heuristica/header-heuristica';
import { ReconocimientoBuenoComponent } from './reconocimiento-bueno.component';
import { ReconocimientoMaloComponent } from './reconocimiento-malo.component';

@Component({
  selector: 'app-visibilidad-page',
  standalone: true,
  // Importamos los dos componentes aquí para poder usarlos en el HTML
  imports: [HeaderHeuristicaComponent, ReconocimientoBuenoComponent, ReconocimientoMaloComponent], 
  template: `
    <div class="container mx-auto p-4">
        
        <app-header-heuristica 
        numeroHeuristica="6"
        titulo="Reconocimento vs Recordar"
        concepto="Minimiza la carga de memoria del usuario haciendo visibles objetos, acciones y opciones. El usuario no debería tener que recordar información de una parte del diálogo a otra."></app-header-heuristica>
      
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <section>
            <app-reconocimiento-bueno></app-reconocimiento-bueno>
        </section>

        <section>
            <app-reconocimiento-malo></app-reconocimiento-malo>
        </section>
      </div>
    </div>
  `
})
export class VisibilidadPageComponenth6 {}