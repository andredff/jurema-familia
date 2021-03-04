import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },

  {
    path: 'bolsafamilia',
    loadChildren: () =>
      import('./bolsaFamilia/bolsa-familia.module').then(
        (m) => m.BolsaFamiliaModule
      ),
  },
  {
    path: 'airbnb',
    loadChildren: () =>
      import('./airbnb/airbnb.module').then((m) => m.AirbnbModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
