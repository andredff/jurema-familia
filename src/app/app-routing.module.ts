import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'bolsa',
    loadChildren: () => import('./bolsaFamilia/bolsa-familia.module')
      .then(m => m.BolsaFamiliaModule)
  },
  { path: '',
  loadChildren: () => import('./airbnb/airbnb.module')
    .then(m => m.AirbnbModule)
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
