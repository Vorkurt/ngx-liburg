import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(){
  }

  public geItem(item: string){
    if ( item !== undefined )
      return JSON.parse(localStorage.getItem(item) as string);
    throw new Error("Put KEy");
  }

  public getKey<ITEM extends number>(index: ITEM){
    localStorage.key(index);
  }

  public setItem<T>(item: string, value: T){
    localStorage.setItem(
      item,
      JSON.stringify(value),
    );
  }

  public removeItem<ITEM extends string>(item: ITEM){
    localStorage.removeItem(item.toString());
  }

  public removeAll(){
    localStorage.clear();
  }
}

