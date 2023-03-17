import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DriverRoutingModule } from "./driver-routing.module";
import { DriverComponent } from "./driver.component";
import { TableMaterialModule } from "ngx-liburg";

@NgModule({
  declarations: [ DriverComponent ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    TableMaterialModule,
    TableMaterialModule,
  ], exports: [
    DriverComponent,
  ],
})
export class DriverModule {
}
