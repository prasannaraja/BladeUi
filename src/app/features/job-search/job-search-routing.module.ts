import { Routes, RouterModule } from '@angular/router';
import { BladesContainerComponent } from 'src/app/shared/blader/blades-container/blades-container.component';
import { JobSearchComponent } from "./job-search.component";

export const JobSearch_ROUTES: Routes = [
  {
    path: "",
    component: JobSearchComponent,
    pathMatch: "full",
  },
  {
    path: ":id",
    component: BladesContainerComponent,
    children: [{ path: "**", component: BladesContainerComponent }],
  },
];

export const JobSearchRoutingModule = RouterModule.forChild(JobSearch_ROUTES);
