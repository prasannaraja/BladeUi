import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from '../welcome/welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { DashboardModule } from 'src/app/shared/controls/dashboard/dashboard.module';
import { SliderToggleModule } from 'src/app/shared/controls/slider-toggle/slider-toggle.module';

@NgModule({
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    DashboardModule,
    SliderToggleModule
  ],
})
export class WelcomeModule {}
