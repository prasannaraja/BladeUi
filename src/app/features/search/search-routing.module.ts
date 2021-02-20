import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';

export const SEARCH_ROUTES: Routes = [
  {
    path: '',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(SEARCH_ROUTES)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
