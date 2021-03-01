import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseBladeDirective } from 'src/app/shared/blader';
import { BladeManager } from 'src/app/shared/blader/blade-manager.service';
import { EntityUpdateBroadcastService } from 'src/app/shared/services/entity-update-broadcast.service';

@Component({
  selector: "tw-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"],
})
export class DetailComponent extends BaseBladeDirective implements OnInit {
  public get isDirty$(): Observable<boolean> {
    throw new Error("Method not implemented.");
  }
  public title = "Detail";
  public isDirty = false;

  public viewDefId: string;
  public objKey: string;

  public constructor(
    protected readonly _mgr: BladeManager,
    protected readonly entityUpdateService: EntityUpdateBroadcastService,
    protected readonly route: ActivatedRoute
  ) {
    super(_mgr, entityUpdateService, route);
  }

  public ngOnInit(): void {
    this.viewDefId = this._mgr.getParamValue<string>(this.id, "viewDefId", false,false);
    this.objKey = this._mgr.getParamValue<string>(this.id, "objKey",false,false);
  }

  public newTitle(): void {
    this.title = new Date().toDateString();
    this.isDirty = true;
  }

  public cancel(): void {
    this.isDirty = false;
  }

  public select(id: string): void {
    this._mgr.select(id);
  }
}
