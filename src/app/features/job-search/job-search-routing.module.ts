import { Routes, RouterModule } from '@angular/router';
import { JobSearchComponent } from "./job-search.component";
import {BladeComponent} from "../../shared/blader/blade/blade.component"
export const JobSearch_ROUTES: Routes = [
  {
    path: "",
    component: JobSearchComponent,
    pathMatch: "full",
  },
  {
    path: ":id",
    component: BladeComponent,
    children: [{ path: "**", component: BladeComponent }],
  },
];

export const JobSearchRoutingModule = RouterModule.forChild(JobSearch_ROUTES);
