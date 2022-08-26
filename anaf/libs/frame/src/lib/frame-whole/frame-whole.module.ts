import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameComponent } from './frame/frame.component';
import {FrameWholeRoutingModule} from "./frame-whole.routing.module";
import {MatIconModule} from "@angular/material/icon";
import {FrameService, RouterConfig} from "./frame-service";

@NgModule({
  declarations: [
    FrameComponent,
      ],
  imports: [
    CommonModule,
    FrameWholeRoutingModule,
    MatIconModule
  ]
})
export class FrameWholeModule {

  constructor(@Optional() @SkipSelf() parentModule?: FrameWholeModule) {}

  static forRoot(config: RouterConfig) : ModuleWithProviders<FrameWholeModule>{
    return {
      ngModule: FrameWholeModule,
      providers:[
        {
          provide:FrameService, useValue: config
        }
      ]
    }
  }

}
