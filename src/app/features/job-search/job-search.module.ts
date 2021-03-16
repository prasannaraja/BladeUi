import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobSearchRoutingModule } from './job-search-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { JobSearchComponent } from "./job-search.component";
import { BladerModule } from 'src/app/shared/blader/blader.module';

@NgModule({
  declarations: [JobSearchComponent],
  imports: [
    CommonModule,
    BladerModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    JobSearchRoutingModule,
  ],
})
export class JobSearchModule {}
