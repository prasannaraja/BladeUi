import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderToggleComponent } from './slider-toggle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [SliderToggleComponent],
  exports:[SliderToggleComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ]
})
export class SliderToggleModule { }
