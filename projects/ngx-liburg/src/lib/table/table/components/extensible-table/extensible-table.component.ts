import { Component, Input } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'lib-extensible-table',
  templateUrl: './extensible-table.component.html',
  styleUrls: [ './extensible-table.component.scss' ]
})
export class ExtensibleTableComponent {
  @Input()
  columnsToDispaly: any;

  @Input()
  extandble$: Observable<any> | any;

  @Input()
  newElementExtandble: any;


}
