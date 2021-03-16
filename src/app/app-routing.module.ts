import { getLocaleCurrencySymbol } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';


const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./features/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "logout",
    loadChildren: () =>
      import("./features/logout/logout.module").then((m) => m.LogoutModule),
  },
  {
    path: "",
    children: [
      {
        path: "",
        redirectTo: "welcome",
        pathMatch: "full",
      },
      {
        path: "welcome",
        component: LayoutComponent,
        loadChildren: (): Promise<unknown> =>
          import("./features/welcome/welcome.module").then(
            (m) => m.WelcomeModule
          ),
      },
      {
        path: "jobs",
        component: LayoutComponent,
        loadChildren: (): Promise<unknown> =>
          import("./features/job-search/job-search.module").then(
            (m) => m.JobSearchModule
          ),
      },
      {
        path: "calendar",
        component: LayoutComponent,
        loadChildren: (): Promise<unknown> =>
          import("./features/reference-data/reference-data.module").then(
            (m) => m.ReferenceDataModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
