import { FisicaModule } from './fisica/fisica.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path: '', pathMatch: 'full', redirectTo: 'fisica' },
{
  path: 'fisica',
  loadChildren: () => import('./fisica/fisica.module').then( m => m.FisicaModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
