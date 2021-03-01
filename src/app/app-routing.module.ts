import { getLocaleCurrencySymbol } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { PageNotFoundComponent } from "./features/page-not-found/page-not-found.component";
import { LayoutComponent } from "./shared/layout/layout.component";
import { EntryComponent } from "./blades/entry/entry.component";
import { ListComponent } from "./blades/list/list.component";
import { DetailComponent } from "./blades/detail/detail.component";
import { BladeMetaData } from "./shared/blader/models/blade-meta-data";
import { BladeRegistry } from "./shared/blader/blade-registry.service";
import { BladerModule } from "./shared/blader/blader.module";
import { BladeState } from "./shared/blader/models/blade-state";
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
  imports: [
    BladerModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  public constructor(private _bladeRegistry: BladeRegistry) {
    this._bladeRegistry.register("entry", EntryComponent, BladeState.default);
    this._bladeRegistry.register("list", ListComponent, BladeState.default);
    this._bladeRegistry.register("detail", DetailComponent, BladeState.default);
  }
}
