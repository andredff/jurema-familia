import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirbnbAppComponent } from './airbnb.app.component';
import { HomeComponent } from './home/home.component';

const airbnbRouterConfig: Routes = [
    {
        path: '', component: AirbnbAppComponent,
        children: [
            { path: '', component: HomeComponent },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(airbnbRouterConfig)
    ],
    exports: [RouterModule]
})
export class AirbnbRoutingModule { }
