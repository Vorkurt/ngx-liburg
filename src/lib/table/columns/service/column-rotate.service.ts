import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ColumnRotateService {

  private readonly _rotate: Subject<string> = new Subject<string>();
  rotate$ = this._rotate.asObservable();

  setSide(position: string){
    this._rotate.next( position)
  }
}
