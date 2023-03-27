import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { environment } from "../environments/environment";
import { IconCoreModule } from "ngx-liburg-icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    IconCoreModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: 'env',
      useValue: environment
    },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
