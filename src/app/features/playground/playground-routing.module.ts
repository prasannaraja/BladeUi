import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PlaygroundComponent } from "./playground.component";

export const PLAYGROUND_ROUTES: Routes = [
  {
    path: "",
    component: PlaygroundComponent,
  },
  {
    path: "lazy",
    loadChildren: () =>
      import("../../shared/lazy/lazy.module").then((m) => m.LazyModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(PLAYGROUND_ROUTES)],
  exports: [RouterModule],
})
export class PlaygroundRoutingModule {}
