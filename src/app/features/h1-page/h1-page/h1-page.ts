import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoSistemaMaloComponent } from './estado-sistema-malo.component';
import { HeaderHeuristicaComponent } from '../../componentes/header-heuristica/header-heuristica';

@Component({
  selector: 'app-h1-page',
  standalone: true,
  imports: [CommonModule, HeaderHeuristicaComponent, EstadoSistemaMaloComponent],
  templateUrl: './h1-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class H1Page {
  
    
 }
