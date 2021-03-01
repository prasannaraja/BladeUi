import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseBladeDirective } from 'src/app/shared/blader';
import { BladeManager } from 'src/app/shared/blader/blade-manager.service';
import { BladeState } from 'src/app/shared/blader/models/blade-state';
import { BladeContext } from 'src/app/shared/blader/models/blader-context';
import { EntityUpdateBroadcastService } from '../../shared/services/entity-update-broadcast.service'
@Component({
  selector: "tw-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent extends BaseBladeDirective implements OnInit {
  public get isDirty$(): Observable<boolean> {
    throw new Error("Method not implemented.");
  }
  public title = "List";
  public isDirty = false;

  public viewDefId: string;

  public constructor(
    protected readonly _mgr: BladeManager,
    protected readonly entityUpdateService: EntityUpdateBroadcastService,
    protected readonly route: ActivatedRoute
  ) {
    super(_mgr, entityUpdateService, route);
  }

  public ngOnInit(): void {
    this.viewDefId = this._mgr.getParamValue<string>(this.id, "viewDefId", false, false);
  }

  public clicked(key: string): void {
    this._mgr.addWithParams({
      parent: null, // need fix
      key: key,
      params: [
        { key: "viewDefId", value: "ProductViewDef" },
        { key: "objKey", value: "Product(1)" },
      ],
      state: BladeState.wide,
    });
  }
}
