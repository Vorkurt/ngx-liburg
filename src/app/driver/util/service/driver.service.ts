import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Driver, Pagination } from "../interfaces";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
  providedIn: "root",
})
export class DriverService {
  public header: HttpHeaders = new HttpHeaders;
  public driverData: Subject<Driver[]> = new Subject<Driver[]>();

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _localStorage: LocalStorageService,
    @Inject("env") private environment: any){
    let tokenFromLocalStorage = _localStorage.geItem("token");
    this.header = new HttpHeaders().set(
      "Authorization",
      "Bearer " + tokenFromLocalStorage,
    );
  }

  public getDataDriver(requestData: Pagination = { items: 10, page: 1 }): void{
    this._httpClient.get<Driver[]>(
      `${ this.environment.api }/driver/description/${ requestData.items }/${ requestData.page }`,
      { headers: this.header },
    )
      .subscribe(resp => {
        this.driverData.next(resp);
      });
  }

  public patchDataDriver(row: Driver): Observable<Driver>{
    return this._httpClient.patch<Driver>(
      `${ this.environment.api }/driver`,
      row,
      { headers: this.header },
    );
  }

  public addNewDriver(row: any): Observable<Driver>{
    debugger
    row.firstName = row.name;
    row.lastName = "";
    return this._httpClient.post<Driver>(
      `${ this.environment.api }/driver`,
      row,
      { headers: this.header },
    );
  }
}

