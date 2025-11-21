import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../componentes/header-heuristica/header-heuristica';
import { ControlLibertadMaloComponent } from './control-libertad-malo.component';
import { ControlLibertadBuenoComponent } from "./control-libertad-bueno.component";

@Component({
  selector: 'app-visibilidad-page',
  standalone: true,
  // Importamos los dos componentes aquí para poder usarlos en el HTML
  imports: [ControlLibertadMaloComponent, HeaderHeuristicaComponent, ControlLibertadBuenoComponent], 
  template: `
    <div class="container mx-auto p-4">
        
        <app-header-heuristica 
        numeroHeuristica="3"
        titulo="Control y Libertad del Usuario"
        concepto="Los usuarios necesitan sentir que controlan el sistema. Necesitan una salida de emergencia claramente marcada para salir de estados no deseados sin tener que pasar por diálogos extensos."></app-header-heuristica>
      
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <section>
          <app-control-libertad-malo></app-control-libertad-malo>
        </section>

        <section>
          <app-control-libertad-bueno></app-control-libertad-bueno>
        </section>
      </div>
    </div>
  `
})
export class VisibilidadPageComponenth3 {}