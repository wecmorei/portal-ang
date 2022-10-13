import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { FisicaRoutingModule } from './fisica-routing.module';
import { FisicaComponent } from './fisica/fisica.component';
import { FisicaFormComponent } from './fisica-form/fisica-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FisicaComponent,
    FisicaFormComponent
  ],
  imports: [
    CommonModule,
    FisicaRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FisicaModule { }
