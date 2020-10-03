import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareRoutingModule } from './software-routing.module';
import { SoftwarePageComponent } from './software-page/software-page.component';
import {SharedComponentsModule} from '../shared/shared-components-module/shared-components.module';
import { FeaturesComponent } from './software-page/features/features.component';
import { PricingComponent } from './software-page/pricing/pricing.component';
import { SoftwareComponent } from './software-page/software/software.component';


@NgModule({
  declarations: [SoftwarePageComponent, FeaturesComponent, PricingComponent, SoftwareComponent],
    imports: [
        CommonModule,
        SoftwareRoutingModule,
        SharedComponentsModule
    ]
})
export class SoftwareModule { }
