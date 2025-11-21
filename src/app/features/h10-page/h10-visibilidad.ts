import { Component } from '@angular/core';
import { HeaderHeuristicaComponent } from '../componentes/header-heuristica/header-heuristica';
import { AyudaMaloComponent } from './ayuda-malo.component';
import { AyudaBuenoComponent } from './ayuda-bueno.component';


@Component({
  selector: 'app-visibilidad-page',
  standalone: true,
  // Importamos los dos componentes aquí para poder usarlos en el HTML
  imports: [HeaderHeuristicaComponent, AyudaMaloComponent, AyudaBuenoComponent], 
  template: `
    <div class="container mx-auto p-4">
        
        <app-header-heuristica 
        numeroHeuristica="10"
        titulo="Ayuda y Documentación"
        concepto="Aunque es mejor que el sistema pueda ser usado sin documentación, puede ser necesario proporcionar ayuda y documentación para que los usuarios puedan encontrar la información que necesitan. El sistema debe ofrecer ayuda accesible, clara y contextual. Los usuarios deben poder encontrar instrucciones, ejemplos y soluciones sin salir de la interfaz ni perder el flujo de trabajo.">
    </app-header-heuristica>
      
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <section>
            <app-ayuda-bueno></app-ayuda-bueno>
        </section>
            
        <section>
            <app-ayuda-malo></app-ayuda-malo>
        </section>
      </div>
    </div>
  `
})
export class VisibilidadPageComponenth10 {}