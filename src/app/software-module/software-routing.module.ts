import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SoftwarePageComponent} from './software-page/software-page.component';

const routes: Routes = [
  {path : '' , component : SoftwarePageComponent , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareRoutingModule { }
