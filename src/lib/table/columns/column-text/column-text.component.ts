import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { BaseColumn } from '../../base-column';
import {DataSourceMaterialTable} from "../../table/table.component";

@Component({
  selector: 'elix-column-text',
  templateUrl: './column-text.component.html',
  styleUrls: ['./column-text.component.scss'],
  providers: [{ provide: BaseColumn, useExisting: ColumnTextComponent }],
  encapsulation: ViewEncapsulation.None,
})
export class ColumnTextComponent<T> extends BaseColumn {
  @Output()
  public onValueChanges: EventEmitter<{change: unknown}> =
    new EventEmitter();

  public changeEntity(rowElement: {change: unknown}) {
    this.onValueChanges.emit(rowElement);
  }
}
