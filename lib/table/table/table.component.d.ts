import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { AfterViewInit, ChangeDetectorRef, EventEmitter, OnDestroy, QueryList, TemplateRef } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import { BaseColumn } from '../base-column';
import { ColumnRotateService } from "../columns/service/column-rotate.service";
import { TableService } from "./table.service";
import * as i0 from "@angular/core";
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
export declare class TableComponent<T> implements AfterViewInit, OnDestroy {
    private readonly _tableState;
    private readonly _columnRotate;
    private readonly _changeDetectorRef;
    dataSource: Array<DataSourceMaterialTable<T>>;
    extensible: boolean;
    extandble$: BehaviorSubject<DataSourceMaterialTable<T> | null>;
    footerShow: boolean;
    footerMessageClass: string;
    newElementExtandble: TemplateRef<any>;
    showPagination: boolean;
    lenghtPagination: number;
    paginationClass: string;
    addedNewEntry: boolean;
    onAddEntry: EventEmitter<any>;
    onPaginationChange: EventEmitter<PageEvent>;
    filterTooltip: boolean;
    table: MatTable<T>;
    paginator: MatPaginator;
    columnDefs: QueryList<BaseColumn>;
    columnsToDispaly: string[];
    private doubleColumnToDisplay;
    private _destroyed;
    constructor(_tableState: TableService, _columnRotate: ColumnRotateService, _changeDetectorRef: ChangeDetectorRef);
    ngAfterViewInit(): void;
    addNewEntry(): void;
    changePage(event: PageEvent): void;
    drop(event: CdkDragDrop<Array<DataSourceMaterialTable<T>>>): void;
    private rotateColumn;
    private _rotateLeft;
    private _rotateRight;
    private _setColumnForLayout;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent<any>, "elix-table", never, { "dataSource": "dataSource"; "extensible": "extensible"; "extandble$": "extandble$"; "footerShow": "footerShow"; "footerMessageClass": "footerMessageClass"; "newElementExtandble": "newElementExtandble"; "showPagination": "showPagination"; "lenghtPagination": "lenghtPagination"; "paginationClass": "paginationClass"; "addedNewEntry": "addedNewEntry"; "filterTooltip": "filterTooltip"; }, { "onAddEntry": "onAddEntry"; "onPaginationChange": "onPaginationChange"; }, ["columnDefs"], ["*"], false>;
}
