import { Routes } from '@angular/router';
import { InterfazPage } from './features/interfaz-page/interfaz-page';

export const routes: Routes = [
    {
        path:'',
        component:InterfazPage
    },
    {
        path: 'visibilidad-estado-sistema',
        loadComponent: () => import('./features/h1-page/h1-page/visibilidad-page.componente').then(m => m.VisibilidadPageComponent),
    },
    {
        path: 'correspondencia-mundo-real',
        loadComponent: () => import('./features/h2-page/h2-visibilidad').then(m => m.VisibilidadPageComponenth2) 
    },
    {
        path: 'control-libertad-usuario',
        loadComponent: () => import('./features/h3-page/h3-visibilidad').then(m => m.VisibilidadPageComponenth3) // Temporal, cambiar por H3Page cuando esté listo
    },
    {
        path: 'consistencia-estandares',
        loadComponent: () => import('./features/h4-page/h4-visibilidad').then(m => m.VisibilidadPageComponenth4) // Temporal, cambiar por H4Page cuando esté listo
    },
    {
        path: 'prevencion-errores',
        loadComponent: () => import('./features/h5-page/h5-visibilidad').then(m => m.VisibilidadPageComponenth5) // Temporal, cambiar por H5Page cuando esté listo
    },
    {
        path: 'reconocimiento-recordar',
        loadComponent: () => import('./features/h6-page/h6-visibilidad').then(m => m.VisibilidadPageComponenth6) // Temporal, cambiar por H6Page cuando esté listo
    },
    {
        path: 'flexibilidad-eficiencia',
        loadComponent: () => import('./features/h7-page/h7-visibilidad').then(m => m.VisibilidadPageComponenth7) // Temporal, cambiar por H7Page cuando esté listo
    },
    {
        path: 'diseno-estetico-minimalista',
        loadComponent: () => import('./features/h8-page/h8-visibilidad').then(m => m.VisibilidadPageComponenth8) // Temporal, cambiar por H8Page cuando esté listo
    },
    {
        path: 'ayuda-reconocer-errores',
        loadComponent: () => import('./features/h9-page/h9-visibilidad').then(m => m.VisibilidadPageComponenth9) // Temporal, cambiar por H9Page cuando esté listo
    },
    {
        path: 'ayuda-documentacion',
        loadComponent: () => import('./features/h10-page/h10-visibilidad').then(m => m.VisibilidadPageComponenth10) // Temporal, cambiar por H10Page cuando esté listo
    },

    // También mantenemos las rutas con números para compatibilidad
    {
        path: '1',
        redirectTo: 'visibilidad-estado-sistema'
    },
    {
        path: '2',
        redirectTo: 'correspondencia-mundo-real'
    },
    {
        path: '3',
        redirectTo: 'control-libertad-usuario'
    },
    {
        path: '4',
        redirectTo: 'consistencia-estandares'
    },
    {
        path: '5',
        redirectTo: 'prevencion-errores'
    },
    {
        path: '6',
        redirectTo: 'reconocimiento-recordar'
    },
    {
        path: '7',
        redirectTo: 'flexibilidad-eficiencia'
    },
    {
        path: '8',
        redirectTo: 'diseno-estetico-minimalista'
    },
    {
        path: '9',
        redirectTo: 'ayuda-reconocer-errores'
    },
    {
        path: '10',
        redirectTo: 'ayuda-documentacion'
    },

    // Ruta wildcard para rutas no encontradas
    {
        path: '**',
        redirectTo: 'visibilidad-estado-sistema'
    }
];
