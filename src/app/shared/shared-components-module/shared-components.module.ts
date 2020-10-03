import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [LoaderComponent, HeroSectionComponent, FooterComponent],
    exports: [
        LoaderComponent,
        HeroSectionComponent,
        FooterComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
