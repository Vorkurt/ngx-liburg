import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot
} from '@angular/router';
import { SpinnerService } from 'ngx-liburg-icon';
import { DriverService } from "./driver.service";

@Injectable({
  providedIn: 'root',
})
export class DriversResolver implements Resolve<void> {
  constructor(
    private readonly _driverService: DriverService,
    private readonly _spinnerService: SpinnerService,
  ){
    this._spinnerService.sendValue(false);
  }

  resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    this._driverService.getDataDriver({ items: 10, page: 1 });
  }
}
