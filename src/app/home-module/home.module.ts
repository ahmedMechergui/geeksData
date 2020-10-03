import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomePageComponent} from './home-page/home-page.component';
import {SharedComponentsModule} from '../shared/shared-components-module/shared-components.module';
import {AboutUsComponent} from './home-page/about-us/about-us.component';
import {CountsComponent} from './home-page/counts/counts.component';
import {ContactComponent} from './home-page/contact/contact.component';
import {PartnersComponent} from './home-page/partners/partners.component';


@NgModule({
  declarations: [HomePageComponent, AboutUsComponent, CountsComponent, ContactComponent, PartnersComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedComponentsModule
  ]
})
export class HomeModule {
}
