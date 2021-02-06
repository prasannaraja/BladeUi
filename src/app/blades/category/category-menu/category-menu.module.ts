import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryMenuComponent } from './category-menu.component';

@NgModule({
  declarations: [CategoryMenuComponent],
  exports:[CategoryMenuComponent],
  imports: [
    CommonModule
  ]
})
export class CategoryMenuModule { }
