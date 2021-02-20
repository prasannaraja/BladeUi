import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PlaygroundComponent } from "./playground.component";

export const PLAYGROUND_ROUTES: Routes = [
  {
    path: '',
    component: PlaygroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(PLAYGROUND_ROUTES)],
  exports: [RouterModule],
})
export class PlaygroundRoutingModule {}
