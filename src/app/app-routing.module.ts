import { getLocaleCurrencySymbol } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
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
        path: "search",
        component: LayoutComponent,
        loadChildren: (): Promise<unknown> =>
          import("./features/search/search.module").then((m) => m.SearchModule),
      },
      {
        path: "playground",
        component: LayoutComponent,
        loadChildren: (): Promise<unknown> =>
          import("./features/playground/playground.module").then(
            (m) => m.PlaygroundModule
          ),
      },
    ],
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
