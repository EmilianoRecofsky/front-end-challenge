import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservasComponent } from './reservas/reservas.component';

//Los AuthGuard verifican el localStorage (si existe variable que consulta dejan cargar el componente en cuestion)
const appRoutes: Routes = [  

  { path: 'reservas', component: ReservasComponent },
  { path: '**', redirectTo: 'reservas' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
