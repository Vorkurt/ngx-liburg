import { BreakpointObserver } from "@angular/cdk/layout";
import * as i0 from "@angular/core";
export declare class TableService {
    private readonly _brPoint;
    private readonly _columnDisplay;
    columnDisplay$: import("rxjs").Observable<string[]>;
    constructor(_brPoint: BreakpointObserver);
    responsive(columnsToDisplay: string[], cloneColumn: string[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TableService>;
}
