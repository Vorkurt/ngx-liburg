import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LegacyPageEvent as PageEvent } from '@angular/material/legacy-paginator';

import { BehaviorSubject, Subject } from 'rxjs';
import { Driver } from './util';
import { DriverService } from './util/service/driver.service';
import { takeUntil } from 'rxjs/operators';
import {
  DataSourceMaterialTable,
  IActionMaterialColumn,
  TableComponent,
  // TableComponent
} from 'ngx-liburg';
import { ActivatedRoute } from '@angular/router';

let mock = [
  {
    id: 2,
    name: 'dasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfa',
    description: '',
    license: true,
    email: '',
    dataOfBirth: '',
    classOfDriver: '',
    location: {
      id: 2,
      city: '',
      zipCode: '',
      phone: '',
    },
  },
  {
    id: 3,
    name: 'dasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfadasdfasfafasfa',
    description: '',
    license: true,
    email: '',
    dataOfBirth: '',
    classOfDriver: '',
    location: {
      id: 3,
      city: '',
      zipCode: '',
      phone: '',
    },
  },
  {
    id: 4,
    name: 'dasdasd',
    description: '',
    license: true,
    email: '',
    dataOfBirth: '',
    classOfDriver: '',
    location: {
      id: 4,
      city: '',
      zipCode: '',
      phone: '',
    },
  },
  {
    id: 5,
    name: 'TEst',
    description: '',
    license: true,
    email: '',
    dataOfBirth: '',
    classOfDriver: '',
    location: {
      id: 5,
      city: '',
      zipCode: '',
      phone: '',
    },
  },
  {
    id: 6,
    name: 'dsasdasd',
    description: '',
    license: true,
    email: '',
    dataOfBirth: '',
    classOfDriver: '',
    location: {
      id: 6,
      city: '',
      zipCode: '',
      phone: '',
    },
  },
  {
    id: 7,
    name: 'asdafvxv',
    description: '',
    license: false,
    email: '',
    dataOfBirth: '',
    classOfDriver: '',
    location: {
      id: 7,
      city: '',
      zipCode: '',
      phone: '',
    },
  },
  {
    id: 8,
    name: 'asdb',
    description: '',
    license: false,
    email: '',
    dataOfBirth: '',
    classOfDriver: '',
    location: {
      id: 8,
      city: '',
      zipCode: '',
      phone: '',
    },
  },
  {
    id: 9,
    name: 'sdasd',
    description: '',
    license: false,
    email: '',
    dataOfBirth: '',
    classOfDriver: '',
    location: {
      id: 9,
      city: '',
      zipCode: '',
      phone: '',
    },
  },
  {
    id: 10,
    name: 'aaa',
    description: '',
    license: false,
    email: '',
    dataOfBirth: '',
    classOfDriver: '',
    location: {
      id: 10,
      city: '',
      zipCode: '',
      phone: '',
    },
  },
  {
    id: 11,
    name: 'ABVC',
    description: '',
    license: true,
    email: '',
    dataOfBirth: '',
    classOfDriver: '',
    location: {
      id: 11,
      city: '',
      zipCode: '',
      phone: '',
    },
  },
] as any;

@Component({
  selector: 'lib-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
})
export class DriverComponent implements OnInit, OnDestroy {
  @ViewChild(TableComponent) elixTable: TableComponent<any> | undefined;
  public dataSourceDrivers: Driver[] | any;
  public isLoading: BehaviorSubject<boolean> | undefined;

  private readonly _destroyed$ = new Subject();

  constructor(
    private readonly _activate: ActivatedRoute,
    private readonly _driverService: DriverService
  ) {}

  ngOnInit(): void {
    this.dataSourceDrivers = mock?.map((driver: Driver, index: number) => {
      const model = <Driver>driver;
      return {
        actions: this._actionTableListDriver(),
        editable: false,
        model: {
          ...model,
        },
      } as DataSourceMaterialTable<any>;
    });
  }

  public changePage(event: PageEvent): void {
    this._driverService.getDataDriver({
      items: event.pageSize,
      page: event.pageIndex + 1,
    });
  }

  public newEntry(): void {
    let emptyEntry = {} as unknown as any;
    emptyEntry.editable = true;
    emptyEntry.actions = this._actionTableListDriver();
    this._initDriver(emptyEntry);
    this.dataSourceDrivers.push(emptyEntry);
    this.elixTable?.table.renderRows();
  }

  private _initDriver(emptyEntry: any): void {
    emptyEntry.model = {} as Driver;
    emptyEntry.model.firstName = '';
    emptyEntry.model.description = '';
    emptyEntry.model.license = false;
    emptyEntry.model.email = '';
    emptyEntry.model.dataOfBirth = '';
    emptyEntry.model.classOfDriver = '';
    emptyEntry.model.location = {} as Location;
    emptyEntry.model.location.city = '';
    emptyEntry.model.location.zipCode = '';
    emptyEntry.model.location.phone = '';
    emptyEntry.model.id = this.dataSourceDrivers.length;
    emptyEntry.isNew = true;
  }

  private _actionTableListDriver(): IActionMaterialColumn[] {
    return [
      {
        iconClass: 'fa_solid:gauge',
        classCss: 'edit',
        method: (row: any) => {
          row.editable = !row.editable;
          if (!row.editable && row.isNew === undefined) {
            this._driverService
              .patchDataDriver(row.model)
              .pipe(takeUntil(this._destroyed$))
              .subscribe();
          }
          if (row.isNew) {
            this._driverService
              .addNewDriver(row.model)
              .pipe(takeUntil(this._destroyed$))
              .subscribe();
          }
          this.elixTable?.table.renderRows();
        },
      },
    ] as IActionMaterialColumn[];
  }

  ngOnDestroy(): void {
    this._destroyed$.next(true);
    this._destroyed$.complete();
  }
}
