import { Location } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { ActivatedRoute } from "@angular/router";

import { BehaviorSubject, Subject } from "rxjs";
import { Driver } from "./util";
import { DriverService } from "./util/service/driver.service";
import { takeUntil } from "rxjs/operators";
import { DataSourceMaterialTable, IActionMaterialColumn } from "ngx-liburg";


@Component({
  selector: "lib-driver",
  templateUrl: "./driver.component.html",
  styleUrls: [ "./driver.component.scss" ],
})
export class DriverComponent implements OnInit, OnDestroy {
  public dataSourceDrivers: Driver[] | any;
  public isLoading: BehaviorSubject<boolean> | undefined;

  private readonly _destroyed$ = new Subject();

  constructor(
    private readonly _activate: ActivatedRoute,
    private readonly _driverService: DriverService,
  ){
  }

  ngOnInit(): void{
    this._driverService.driverData.pipe(
      takeUntil(this._destroyed$)).subscribe(
      drivers => {
        this.dataSourceDrivers = drivers.map(
          (
            driver: Driver,
            index: number) => {
            const model = <Driver>driver;
            return {
              actions: this._actionTableListDriver(),
              editable: false,
              model: {
                ...model,
              },
            } as DataSourceMaterialTable<any>;
          },
        );
      });
  }

  public changePage(event: PageEvent): void{
    this._driverService.getDataDriver({
      items: event.pageSize,
      page: event.pageIndex + 1
    });
  }

  public newEntry(): void{
    let emptyEntry = {} as unknown as any;
    emptyEntry.editable = true;
    emptyEntry.actions = this._actionTableListDriver();
    this._initDriver(emptyEntry);
    this.dataSourceDrivers = [ ...this.dataSourceDrivers,
      emptyEntry ];
  }

  private _initDriver(emptyEntry: any): void{
    emptyEntry.model = {} as Driver;
    emptyEntry.model.firstName = "";
    emptyEntry.model.description = "";
    emptyEntry.model.license = false;
    emptyEntry.model.email = "";
    emptyEntry.model.dataOfBirth = "";
    emptyEntry.model.classOfDriver = "";
    emptyEntry.model.location = {} as Location;
    emptyEntry.model.location.city = "";
    emptyEntry.model.location.zipCode = "";
    emptyEntry.model.location.phone = "";
    emptyEntry.isNew = true;
  }

  private _actionTableListDriver(): IActionMaterialColumn[]{
    return [
      {
        iconClass: "fa_solid:gauge",
        classCss: "edit",
        method: (row: any) => {
          row.editable = !row.editable;
          if ( !row.editable && (row.isNew === undefined) ) {
            this._driverService.patchDataDriver(
              row.model).pipe(takeUntil(
              this._destroyed$))
              .subscribe();
          }
          if ( row.isNew ) {
            this._driverService.addNewDriver(
              row.model).pipe(takeUntil(
              this._destroyed$))
              .subscribe();
          }
        },
      },
    ] as IActionMaterialColumn[];
  }

  ngOnDestroy(): void{
    this._destroyed$.next(true);
    this._destroyed$.complete()
  }

}
