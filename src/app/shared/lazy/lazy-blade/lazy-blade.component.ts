import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { BaseBladeDirective } from "../../blader";
import { BladeManager } from "../../blader/blade-manager.service";
import { EntityUpdateBroadcastService } from "../../services/entity-update-broadcast.service";

@Component({
  selector: "tw-lazy-blade",
  templateUrl: "./lazy-blade.component.html",
  styleUrls: ["./lazy-blade.component.css"],
})
export class LazyBladeComponent extends BaseBladeDirective {
  public get isDirty$(): Observable<boolean> {
    throw new Error("Method not implemented.");
  }

  public title = "Lazy";
  public isDirty = false;

  public constructor(
    protected readonly _mgr: BladeManager,
    protected readonly entityUpdateService: EntityUpdateBroadcastService,
    protected readonly route: ActivatedRoute
  ) {
    super(_mgr, entityUpdateService, route);
  }

  public clicked(key: string): void {
    this._mgr.addWithParams({
      parent: null,
      key,
      params: [
        { key: "viewDefId", value: "ProductViewDef" },
        { key: "objKey", value: "Product(1)" },
      ],
    });
  }
}
