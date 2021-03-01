import { CommonModule } from '@angular/common';
import { NgModule, ComponentFactoryResolver } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BladeRegistry } from '../blader/blade-registry.service';
import { BladeMetaData } from '../blader/models/blade-meta-data';
import { BladeState } from '../blader/models/blade-state';
import { LazyBladeComponent } from './lazy-blade/lazy-blade.component';

const LAZY_ROUTES = [
  { path: '', component: LazyBladeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LAZY_ROUTES)
  ],
  declarations: [
    LazyBladeComponent
  ],
  exports: [
    LazyBladeComponent
  ]
})
export class LazyModule {
  public constructor(
    private _bladeRegistry: BladeRegistry,
    private _resolver: ComponentFactoryResolver
  ) {
    console.log(`registering LazyBladeComponent...`);

    /*
    *
    const bladeMetaData = new BladeMetaData(
      "lazy",
      LazyBladeComponent,
      BladeState.default,
      () => {
        return this._resolver.resolveComponentFactory(LazyBladeComponent);
      }
    );
    *
    */

    this._bladeRegistry
      .register('',
        LazyBladeComponent,
        BladeState.default
        );
    console.log(this._bladeRegistry);
  }
}
