import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BaseBladeDirective } from 'src/app/shared/blader';
import { BladeManager } from 'src/app/shared/blader/blade-manager.service';
import { EntityUpdateBroadcastService } from 'src/app/shared/services/entity-update-broadcast.service';
@Component({
  selector: "tw-entry",
  templateUrl: "./entry.component.html",
  styleUrls: ["./entry.component.css"],
})
export class EntryComponent extends BaseBladeDirective {
  public constructor(
    protected readonly _mgr: BladeManager,
    protected readonly entityUpdateService: EntityUpdateBroadcastService,
    protected readonly route: ActivatedRoute
  ) {
    super(_mgr, entityUpdateService, route);
  }
  public get isDirty$(): Observable<boolean> {
    return of(false);
  }
  public title = "Entry";
  public isDirty = false;

  public clicked(key: string): void {
    if (key === "list") {
      this._mgr.addWithParams({
        parent:null,
        key,
        params: [{ key: "viewDefId", value: "ProductListViewDef" }],
      });
    } else if (key === "lazy") {
      this._mgr.addWithParams({parent:null, key });
    } else {
      this._mgr.addWithParams({
        parent:null,
        key,
        params: [
          { key: "viewDefId", value: "ProductViewDef" },
          { key: "objKey", value: "Product(1)" },
        ],
      });
    }
  }
}
