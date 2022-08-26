import {Component, OnInit} from '@angular/core';
import {FrameService, RouterConfig} from "../frame-service";
import {ActivatedRoute, NavigationEnd, NavigationError, Router} from "@angular/router";
import {filter, map} from "rxjs";
import *  as RouterData from "../frame-service";


@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent {
  public navData: FrameService | any;
  public collapsed: boolean;
  public subToggle: boolean | undefined;
  public indexShows: number = 0;
  private navDataIndex: number = 0

  constructor(private _frameService: RouterData.FrameService, private _router: Router) {
    this.navData = _frameService
    this.collapsed = false
    this._router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => event.url.split('/')[1])
    ).subscribe(navigationRoute => {
      this.navData.routerDataConfig.forEach((route: RouterData.Router) => {
        if (route.subRouter) {
          route.subRouter?.forEach((subRoute: RouterData.Router, index: number) => {
            if (subRoute.path === navigationRoute) {
              this.navDataIndex = index
              this.subToggle = true;
            }
          })
        }
      })
    })
  }

  setSubToggle(index: number) {
    if (index == this.navDataIndex) {
      this.subToggle = true
      this.indexShows = 0
    } else if (this.subToggle) {
      this.subToggle = true
      this.indexShows = index
    } 
  }
}
