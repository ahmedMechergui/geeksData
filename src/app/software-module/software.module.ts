import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareRoutingModule } from './software-routing.module';
import { SoftwarePageComponent } from './software-page/software-page.component';


@NgModule({
  declarations: [SoftwarePageComponent],
  imports: [
    CommonModule,
    SoftwareRoutingModule
  ]
})
export class SoftwareModule { }
