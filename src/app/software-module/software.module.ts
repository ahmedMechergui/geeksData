import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareRoutingModule } from './software-routing.module';
import { SoftwarePageComponent } from './software-page/software-page.component';
import {SharedComponentsModule} from '../shared/shared-components-module/shared-components.module';


@NgModule({
  declarations: [SoftwarePageComponent],
    imports: [
        CommonModule,
        SoftwareRoutingModule,
        SharedComponentsModule
    ]
})
export class SoftwareModule { }
