import { Injectable } from '@angular/core';
import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest, HttpResponse
} from "@angular/common/http";
import { of } from "rxjs";


@Injectable()
export class FakeDriverService implements HttpInterceptor {

  constructor(){
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler): any{
    if ( req.url.includes('driver/description') ) {
      return of(new HttpResponse({
        ...req.clone(),
        status: 200,
      } as any) as any) as any
    }
    return of(new HttpResponse({
      ...req.clone(),
      status: 200,
      body: { 'name': 'ESt' }
    } as any) as any)
  }
}

