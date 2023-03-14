import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BaseColumn } from '../base-column';
import { ColumnRotateService } from "../columns/service/column-rotate.service";

export interface IActionMaterialColumn {
  iconClass: string;

  classCss: string;

  method: (row?: any) => void;
}

export interface DataSourceMaterialTable<T> {
  model: T;

  editable: boolean;

  actions: IActionMaterialColumn[];

  id?: number;
}

@Component({
  selector: 'elix-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({
          height: '0px',
          minHeight: '0'
        })),
      state(
        'expanded',
        style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate(
          '225ms cubic-bezier(0.4, 0.0, 0.2, 1)'),
      ),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent<T> implements AfterViewInit, OnDestroy {
  @Input()
  // @ts-ignore
  public dataSource: Array<DataSourceMaterialTable<T>>;

  @Input()
  public extensible: boolean = false;

  @Input()
  // @ts-ignore
  public extandble$: BehaviorSubject<DataSourceMaterialTable<T> | null>;

  // Footer
  @Input()
  public footerShow: boolean = false;

  // class for footer
  @Input()
  public footerMessageClass: string = '';

  // new table in row
  @Input()
  // @ts-ignore
  public newElementExtandble: TemplateRef<any>;

  // flag about if we want to show pagination
  @Input()
  public showPagination: boolean = false;

  // numberOf Entry
  @Input()
  // @ts-ignore
  public lenghtPagination: number;

  @Input()
  // @ts-ignore
  public paginationClass: string;

  @Input()
  public addedNewEntry = false;

  @Output() public onAddEntry: EventEmitter<any> = new EventEmitter<any>();

  @Output() public onPaginationChange: EventEmitter<PageEvent> =
    new EventEmitter<PageEvent>();


  @Input()
  filterTooltip: boolean = true;
  // this is where the magic happens:
  // @ts-ignore
  @ViewChild(MatTable, { static: true }) table: MatTable<T>;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ContentChildren(BaseColumn)
  // @ts-ignore
  // after the <ng-content> has been initialized, the column definitions are available.
  public columnDefs: QueryList<BaseColumn>;
  public columnsToDispaly: string[] = [];

  private doubleColumnToDisplay: string[] = [];
  // for avoid memory leak
  private _destroyed = new Subject<void>();

  constructor(
    private readonly _brPoint: BreakpointObserver,
    private readonly _columnRotate: ColumnRotateService,
    private readonly _changeDetectorRef: ChangeDetectorRef,
  ){
  }

  public ngAfterViewInit(): void{
    this.columnsToDispaly = this.columnDefs.map(
      (resp: BaseColumn) => resp.columnDef.name,
    );
    this.columnDefs
      .map((resp: BaseColumn) => resp.columnDef)
      .forEach((rep: MatColumnDef) => this.table.addColumnDef(
        rep));
    this._columnRotate.rotate$.pipe(takeUntil(this._destroyed)).subscribe((side: string) => {
      if (
        side.includes('left')
      ) {
        this.rotateColumn('left');

      } else {
        this.rotateColumn('right');
      }
    })
    try {
      const duplicate = this.columnsToDispaly.filter(
        (
          columnDisplay: string,
          index: number,
          self: string[]) =>
          index === self.findIndex((value: string) => value === columnDisplay),
      );
      this.doubleColumnToDisplay = this.columnsToDispaly;
      this._setColumnForLayout();
      if ( duplicate.length < this.columnsToDispaly.length ) {
        throw new Error(
          'You duplicate value what you want to display, Please look in definitions at columns',
        );
      }
    } catch ( err ) {
      console.error(err);
    }
    this._changeDetectorRef.detectChanges();
  }

  private rotateColumn(side: string){
    if(side ==='left'){
    let intermediateColumn = this.columnsToDispaly[ 0 ]
    this.columnsToDispaly.forEach((column, index) => {
      if ( index <= this.columnsToDispaly.length - 1 ) {
        this.columnsToDispaly[ index ] = this.doubleColumnToDisplay[ ++index ]
      }
    })
    this.doubleColumnToDisplay = [ ...this.columnsToDispaly ]
    let action = this.doubleColumnToDisplay[ this.doubleColumnToDisplay.length - 1 ]
    this.doubleColumnToDisplay[ this.doubleColumnToDisplay.length - 1 ] = intermediateColumn
    this.doubleColumnToDisplay[ this.doubleColumnToDisplay.length ] = action
    }else{
    }
  }

  public addNewEntry(){
    this.onAddEntry.next(true);
  }

  public changePage(event: PageEvent){
    this.onPaginationChange.emit(event);
  }

  public drop(event: CdkDragDrop<Array<DataSourceMaterialTable<T>>>): void{
    moveItemInArray(
      this.dataSource,
      event.previousIndex,
      event.currentIndex);
    this.table.renderRows();
  }

  private _setColumnForLayout(){
    this._brPoint
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => {
        if ( this._brPoint.isMatched(
          Breakpoints.XSmall) ) {
          this.columnsToDispaly = this.doubleColumnToDisplay.filter(
            (item, index) => {
              return (
                index <= 0 || index === this.doubleColumnToDisplay.length - 1
              );
            },
          );
        } else if ( this._brPoint.isMatched(
          Breakpoints.Small) ) {
          this.columnsToDispaly = this.doubleColumnToDisplay.filter(
            (item, index) => {
              return (
                index <= 2 || index === this.doubleColumnToDisplay.length - 1
              );
            },
          );
        } else if ( this._brPoint.isMatched(
          Breakpoints.Medium) ) {
          this.columnsToDispaly = this.doubleColumnToDisplay.filter(
            (item, index) => {
              return (
                index <= 3 || index === this.doubleColumnToDisplay.length - 1
              );
            },
          );
        } else if ( this._brPoint.isMatched(
          Breakpoints.Large) ) {
          this.columnsToDispaly = this.doubleColumnToDisplay.filter(
            (item, index) => {
              return (
                index <= 4 || index === this.doubleColumnToDisplay.length - 1
              );
            },
          );
        } else if ( this._brPoint.isMatched(
          Breakpoints.XLarge) ) {
          this.columnsToDispaly = this.doubleColumnToDisplay.filter(
            (item, index) => {
              return (
                index >= 0
              );
            },
          );
        }
      });
  }

  public ngOnDestroy(){
    this._destroyed.next();
    this._destroyed.complete();
  }
}
