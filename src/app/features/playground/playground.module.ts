import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaygroundComponent } from './playground.component';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { MaterialModules } from 'src/app/material-modules';

@NgModule({
  declarations: [PlaygroundComponent],
  exports: [PlaygroundComponent],
  imports: [CommonModule, MaterialModules, PlaygroundRoutingModule],
})
export class PlaygroundModule { }
