import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryGeneralComponent } from './category-general.component';

@NgModule({
  declarations: [CategoryGeneralComponent],
  exports:[CategoryGeneralComponent],
  imports: [
    CommonModule
  ]
})
export class CategoryGeneralModule { }
