import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../componentes/header-heuristica/header-heuristica';
import { MinimalismoMaloComponent } from './minimalismo-malo.component';
import { MinimalismoBuenoComponent } from "./minimalismo-bueno.component";

@Component({
  selector: 'app-visibilidad-page',
  standalone: true,
  // Importamos los dos componentes aquí para poder usarlos en el HTML
  imports: [HeaderHeuristicaComponent, MinimalismoMaloComponent, MinimalismoBuenoComponent], 
  template: `
    <div class="container mx-auto p-4">
        
        <app-header-heuristica 
        numeroHeuristica="8"
        titulo="Diseño Estético y Minimalista"
        concepto="Presentar únicamente la información relevante para la tarea actual, evitando sobrecargar visualmente al usuario. Interfaces limpias, ordenadas y con jerarquía clara mejoran la comprensión y reducen la carga cognitiva.

"></app-header-heuristica>
      
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <section>
            <app-minimalismo-malo></app-minimalismo-malo>
        </section>

        <section>
            <app-minimalismo-bueno></app-minimalismo-bueno>
        </section>
      </div>
    </div>
  `
})
export class VisibilidadPageComponenth8 {}