import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FisicaFormComponent } from './fisica-form/fisica-form.component';
import { FisicaComponent } from './fisica/fisica.component';

const routes: Routes = [
  { path: '', component: FisicaComponent },
  { path: 'new', component: FisicaFormComponent },
  { path: 'edit/:id', component: FisicaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FisicaRoutingModule { }
