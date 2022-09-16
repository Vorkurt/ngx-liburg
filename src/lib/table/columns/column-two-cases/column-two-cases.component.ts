import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {BaseColumn} from "../../base-column";
import {DataSourceMaterialTable} from "../../table/table.component";

@Component({
             selector     : 'lib-column-two-cases',
             templateUrl  : './column-two-cases.component.html',
             styleUrls    : ['./column-two-cases.component.scss'],
             encapsulation: ViewEncapsulation.None,
           })
export class ColumnTwoCasesComponent<T> extends BaseColumn implements OnInit {
  @Output()
  public onValueChanges : EventEmitter<DataSourceMaterialTable<T>> =
           new EventEmitter();


  public ngOnInit() : void {
  }

  public changeValue() {
  }
}
