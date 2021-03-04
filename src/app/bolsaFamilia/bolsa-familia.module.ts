import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BolsaFamiliaRoutingModule } from './bolsa-familia.route';
import { BolsaFamiliaAppComponent } from './bolsa-familia.app.component';
import { BeneficiariosComponent } from './pages/beneficiarios/beneficiarios.component';
import { IbgeService } from './services/ibge.service';
import { httpInterceptorProviders } from './interceptors';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    BolsaFamiliaAppComponent,
    HomeComponent,
    BeneficiariosComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BolsaFamiliaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    httpInterceptorProviders,
    IbgeService
  ]
})
export class BolsaFamiliaModule { }
