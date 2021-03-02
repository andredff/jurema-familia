import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolsaFamiliaAppComponent } from './bolsa-familia.app.component';
import { HomeComponent } from './home/home.component';

const bolsaFamiliaRouterConfig: Routes = [
    {
        path: '', component: BolsaFamiliaAppComponent,
        children: [
            { path: '', component: HomeComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(bolsaFamiliaRouterConfig)
    ],
    exports: [RouterModule]
})
export class BolsaFamiliaRoutingModule { }
