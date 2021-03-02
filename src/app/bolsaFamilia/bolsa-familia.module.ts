import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BolsaFamiliaRoutingModule } from './bolsa-familia.route';
import { BolsaFamiliaAppComponent } from './bolsa-familia.app.component';
import { BeneficiariosComponent } from './beneficiarios/beneficiarios.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IbgeService } from './services/ibge.service';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    BolsaFamiliaAppComponent,
    HomeComponent,
    BeneficiariosComponent,
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
