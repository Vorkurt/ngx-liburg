import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
export class ColumnRotateService {
    constructor() {
        this._rotate = new Subject();
        this.rotate$ = this._rotate.asObservable();
    }
    setSide(position) {
        this._rotate.next(position);
    }
    swapColumn(doubleColumnToDisplay) {
        const temporallyIndex = doubleColumnToDisplay[doubleColumnToDisplay.length - 1];
        doubleColumnToDisplay[doubleColumnToDisplay.length - 1] = doubleColumnToDisplay[doubleColumnToDisplay.length - 2];
        doubleColumnToDisplay[doubleColumnToDisplay.length - 2] = temporallyIndex;
    }
}
ColumnRotateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColumnRotateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ColumnRotateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColumnRotateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColumnRotateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXJvdGF0ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYnVyZy9zcmMvbGliL3RhYmxlL2NvbHVtbnMvc2VydmljZS9jb2x1bW4tcm90YXRlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUsvQixNQUFNLE9BQU8sbUJBQW1CO0lBSGhDO1FBS21CLFlBQU8sR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUNsRSxZQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQVV2QztJQVJDLE9BQU8sQ0FBQyxRQUFnQjtRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxRQUFRLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBQ00sVUFBVSxDQUFDLHFCQUErQjtRQUMvQyxNQUFNLGVBQWUsR0FBRyxxQkFBcUIsQ0FBRSxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLENBQUE7UUFDakYscUJBQXFCLENBQUUscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRSxHQUFHLHFCQUFxQixDQUFFLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUUsQ0FBQTtRQUNySCxxQkFBcUIsQ0FBRSxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLEdBQUcsZUFBZSxDQUFBO0lBQzdFLENBQUM7O2dIQVpVLG1CQUFtQjtvSEFBbkIsbUJBQW1CLGNBRmxCLE1BQU07MkZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb2x1bW5Sb3RhdGVTZXJ2aWNlIHtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9yb3RhdGU6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgcm90YXRlJCA9IHRoaXMuX3JvdGF0ZS5hc09ic2VydmFibGUoKTtcblxuICBzZXRTaWRlKHBvc2l0aW9uOiBzdHJpbmcpe1xuICAgIHRoaXMuX3JvdGF0ZS5uZXh0KCBwb3NpdGlvbilcbiAgfVxuICBwdWJsaWMgc3dhcENvbHVtbihkb3VibGVDb2x1bW5Ub0Rpc3BsYXk6IHN0cmluZ1tdKXtcbiAgICBjb25zdCB0ZW1wb3JhbGx5SW5kZXggPSBkb3VibGVDb2x1bW5Ub0Rpc3BsYXlbIGRvdWJsZUNvbHVtblRvRGlzcGxheS5sZW5ndGggLSAxIF1cbiAgICBkb3VibGVDb2x1bW5Ub0Rpc3BsYXlbIGRvdWJsZUNvbHVtblRvRGlzcGxheS5sZW5ndGggLSAxIF0gPSBkb3VibGVDb2x1bW5Ub0Rpc3BsYXlbIGRvdWJsZUNvbHVtblRvRGlzcGxheS5sZW5ndGggLSAyIF1cbiAgICBkb3VibGVDb2x1bW5Ub0Rpc3BsYXlbIGRvdWJsZUNvbHVtblRvRGlzcGxheS5sZW5ndGggLSAyIF0gPSB0ZW1wb3JhbGx5SW5kZXhcbiAgfVxufVxuIl19