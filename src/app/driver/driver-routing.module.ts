import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DriverComponent } from "./driver.component";
import { DriversResolver } from "./util/service/drivers.resolver";

const routes: Routes = [
  {
    path: '',
    component: DriverComponent,
    resolve: { drivers: DriversResolver },
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DriverRoutingModule {
}
