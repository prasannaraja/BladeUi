import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobSearchRoutingModule } from './job-search-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { JobSearchComponent } from "./job-search.component";
import { BladeMetaData, BladeRegistry } from 'src/app/shared/blader';
import { DetailComponent, EntryComponent, ListComponent } from 'src/app/blades';
import { SidebarComponent, WorkspaceComponent } from 'src/app/shared';

@NgModule({
  declarations: [JobSearchComponent,WorkspaceComponent,SidebarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    JobSearchRoutingModule,
  ],
})
export class JobSearchModule {
  public constructor(private _bladeRegistry: BladeRegistry) {
    this._bladeRegistry.register(new BladeMetaData("entry", EntryComponent));
    this._bladeRegistry.register(new BladeMetaData("list", ListComponent));
    this._bladeRegistry.register(new BladeMetaData("detail", DetailComponent));
  }
}
