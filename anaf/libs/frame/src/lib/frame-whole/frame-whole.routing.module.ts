import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FrameComponent} from "./frame/frame.component";

const routes: Routes = [
  {
    path: "",
    component: FrameComponent,
    children: [
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

/** *************************************************************************************************
 * App module routing
 */
export class FrameWholeRoutingModule {
}
