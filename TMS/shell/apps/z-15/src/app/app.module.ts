import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { TestViewComponent } from './test-view/test-view.component';
import { TestOldComponent } from './test-old/test-old.component';

@NgModule({
  declarations: [TestViewComponent, AppComponent, TestOldComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
