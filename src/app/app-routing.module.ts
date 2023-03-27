import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {

  path: '',
  loadChildren: () => import('./driver/driver.module').then(m => m.DriverModule),

} ,{
    path:'',
    pathMatch:'full',
    redirectTo:'ngx-liburg'
  },
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
