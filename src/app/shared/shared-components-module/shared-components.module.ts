import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';



@NgModule({
  declarations: [LoaderComponent, HeroSectionComponent],
    exports: [
        LoaderComponent,
        HeroSectionComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
