import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableMaterialModule } from 'ngx-liburg';
import { DriverRoutingModule } from "./driver-routing.module";
import { DriverComponent } from "./driver.component";

@NgModule({
  declarations: [ DriverComponent ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    TableMaterialModule,
  ], exports: [
    DriverComponent,
  ],
})
export class DriverModule {
}
