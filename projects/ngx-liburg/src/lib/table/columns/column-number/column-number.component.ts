import { Component, Input, OnDestroy } from '@angular/core';
import { BaseColumn } from '../../base-column';
import { FormControl } from '@angular/forms';
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { TableService } from "../../table/table.service";

@Component({
  selector: 'elix-column-number',
  templateUrl: './column-number.component.html',
  styleUrls: [ './column-number.component.scss' ],
  providers: [ { provide: BaseColumn, useExisting: ColumnNumberComponent } ],
})
export class ColumnNumberComponent<T> extends BaseColumn implements OnDestroy {
  @Input()
  // @ts-ignore
  public editRow: boolean = false;
  textValidator: FormControl = new FormControl();
  // @ts-ignore
  nonNumber: boolean;
  public amountFooter
  private _destroyed$: Subject<boolean> = new Subject<boolean>()

  constructor(private readonly _tableState: TableService){
    super();
    this.amountFooter = _tableState.amountData$
  }

  changeEntity(element: any){
    this.textValidator.valueChanges.pipe(takeUntil(this._destroyed$)).subscribe(
      (resp) => {
        console.log(resp);
      });
  }

  ngOnDestroy(): void{
    this._destroyed$.next(true);
    this._destroyed$.complete()
  }

}
