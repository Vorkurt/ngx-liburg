import { Breakpoints } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
export class TableService {
    constructor(_brPoint) {
        this._brPoint = _brPoint;
        this._columnDisplay = new Subject();
        this.columnDisplay$ = this._columnDisplay.asObservable();
    }
    responsive(columnsToDisplay, cloneColumn) {
        this._brPoint
            .observe([
            Breakpoints.XSmall,
            Breakpoints.Small,
            Breakpoints.Medium,
            Breakpoints.Large,
            Breakpoints.XLarge,
        ])
            .subscribe(() => {
            if (this._brPoint.isMatched(Breakpoints.XSmall)) {
                columnsToDisplay = cloneColumn.filter((item, index) => {
                    return (index <= 1 || index === cloneColumn.length - 1);
                });
            }
            else if (this._brPoint.isMatched(Breakpoints.Small)) {
                columnsToDisplay = cloneColumn.filter((item, index) => {
                    return (index <= 2 || index === cloneColumn.length - 1);
                });
            }
            else if (this._brPoint.isMatched(Breakpoints.Medium)) {
                columnsToDisplay = cloneColumn.filter((item, index) => {
                    return (index <= 3 || index === cloneColumn.length - 1);
                });
            }
            else if (this._brPoint.isMatched(Breakpoints.Large)) {
                columnsToDisplay = cloneColumn.filter((item, index) => {
                    return (index <= 5 || index === cloneColumn.length - 1);
                });
            }
            else if (this._brPoint.isMatched(Breakpoints.XLarge)) {
                columnsToDisplay = cloneColumn.filter((item, index) => {
                    return (index >= 0);
                });
            }
            this._columnDisplay.next(columnsToDisplay);
        });
    }
}
TableService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableService, deps: [{ token: i1.BreakpointObserver }], target: i0.ɵɵFactoryTarget.Injectable });
TableService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.BreakpointObserver }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWJ1cmcvc3JjL2xpYi90YWJsZS90YWJsZS90YWJsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBc0IsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFLL0IsTUFBTSxPQUFPLFlBQVk7SUFHdkIsWUFBNkIsUUFBNEI7UUFBNUIsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFGdkMsbUJBQWMsR0FBcUIsSUFBSSxPQUFPLEVBQVksQ0FBQTtRQUM1RSxtQkFBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUE7SUFHbkQsQ0FBQztJQUVELFVBQVUsQ0FBQyxnQkFBMEIsRUFBRSxXQUFxQjtRQUMxRCxJQUFJLENBQUMsUUFBUTthQUNWLE9BQU8sQ0FBQztZQUNQLFdBQVcsQ0FBQyxNQUFNO1lBQ2xCLFdBQVcsQ0FBQyxLQUFLO1lBQ2pCLFdBQVcsQ0FBQyxNQUFNO1lBQ2xCLFdBQVcsQ0FBQyxLQUFLO1lBQ2pCLFdBQVcsQ0FBQyxNQUFNO1NBQ25CLENBQUM7YUFDRCxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDMUIsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFHO2dCQUN0QixnQkFBZ0IsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUNuQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFDZCxPQUFPLENBQ0wsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQy9DLENBQUM7Z0JBQ0osQ0FBQyxDQUNGLENBQUM7YUFDSDtpQkFBTSxJQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNqQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUc7Z0JBQ3JCLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQ25DLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUNkLE9BQU8sQ0FDTCxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FDL0MsQ0FBQztnQkFDSixDQUFDLENBQ0YsQ0FBQzthQUNIO2lCQUFNLElBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQ2pDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRztnQkFDdEIsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FDbkMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ2QsT0FBTyxDQUNMLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUMvQyxDQUFDO2dCQUNKLENBQUMsQ0FDRixDQUFDO2FBQ0g7aUJBQU0sSUFBSyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FDakMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFHO2dCQUNyQixnQkFBZ0IsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUNuQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFDZCxPQUFPLENBQ0wsS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQy9DLENBQUM7Z0JBQ0osQ0FBQyxDQUNGLENBQUM7YUFDSDtpQkFBTSxJQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUNqQyxXQUFXLENBQUMsTUFBTSxDQUFDLEVBQUc7Z0JBQ3RCLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQ25DLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUNkLE9BQU8sQ0FDTCxLQUFLLElBQUksQ0FBQyxDQUNYLENBQUM7Z0JBQ0osQ0FBQyxDQUNGLENBQUM7YUFDSDtZQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzt5R0FqRVUsWUFBWTs2R0FBWixZQUFZLGNBRlgsTUFBTTsyRkFFUCxZQUFZO2tCQUh4QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyZWFrcG9pbnRPYnNlcnZlciwgQnJlYWtwb2ludHMgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2xheW91dFwiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSAgX2NvbHVtbkRpc3BsYXk6IFN1YmplY3Q8c3RyaW5nW10+ID1uZXcgU3ViamVjdDxzdHJpbmdbXT4oKVxuICBjb2x1bW5EaXNwbGF5JCA9IHRoaXMuX2NvbHVtbkRpc3BsYXkuYXNPYnNlcnZhYmxlKClcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBfYnJQb2ludDogQnJlYWtwb2ludE9ic2VydmVyLFxuICApe1xuICB9XG5cbiAgcmVzcG9uc2l2ZShjb2x1bW5zVG9EaXNwbGF5OiBzdHJpbmdbXSwgY2xvbmVDb2x1bW46IHN0cmluZ1tdKXtcbiAgICB0aGlzLl9iclBvaW50XG4gICAgICAub2JzZXJ2ZShbXG4gICAgICAgIEJyZWFrcG9pbnRzLlhTbWFsbCxcbiAgICAgICAgQnJlYWtwb2ludHMuU21hbGwsXG4gICAgICAgIEJyZWFrcG9pbnRzLk1lZGl1bSxcbiAgICAgICAgQnJlYWtwb2ludHMuTGFyZ2UsXG4gICAgICAgIEJyZWFrcG9pbnRzLlhMYXJnZSxcbiAgICAgIF0pXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKCB0aGlzLl9iclBvaW50LmlzTWF0Y2hlZChcbiAgICAgICAgICBCcmVha3BvaW50cy5YU21hbGwpICkge1xuICAgICAgICAgIGNvbHVtbnNUb0Rpc3BsYXkgPSBjbG9uZUNvbHVtbi5maWx0ZXIoXG4gICAgICAgICAgICAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBpbmRleCA8PSAxIHx8IGluZGV4ID09PSBjbG9uZUNvbHVtbi5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMuX2JyUG9pbnQuaXNNYXRjaGVkKFxuICAgICAgICAgIEJyZWFrcG9pbnRzLlNtYWxsKSApIHtcbiAgICAgICAgICBjb2x1bW5zVG9EaXNwbGF5ID0gY2xvbmVDb2x1bW4uZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgaW5kZXggPD0gMiB8fCBpbmRleCA9PT0gY2xvbmVDb2x1bW4ubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLl9iclBvaW50LmlzTWF0Y2hlZChcbiAgICAgICAgICBCcmVha3BvaW50cy5NZWRpdW0pICkge1xuICAgICAgICAgIGNvbHVtbnNUb0Rpc3BsYXkgPSBjbG9uZUNvbHVtbi5maWx0ZXIoXG4gICAgICAgICAgICAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBpbmRleCA8PSAzIHx8IGluZGV4ID09PSBjbG9uZUNvbHVtbi5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoIHRoaXMuX2JyUG9pbnQuaXNNYXRjaGVkKFxuICAgICAgICAgIEJyZWFrcG9pbnRzLkxhcmdlKSApIHtcbiAgICAgICAgICBjb2x1bW5zVG9EaXNwbGF5ID0gY2xvbmVDb2x1bW4uZmlsdGVyKFxuICAgICAgICAgICAgKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgaW5kZXggPD0gNSB8fCBpbmRleCA9PT0gY2xvbmVDb2x1bW4ubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKCB0aGlzLl9iclBvaW50LmlzTWF0Y2hlZChcbiAgICAgICAgICBCcmVha3BvaW50cy5YTGFyZ2UpICkge1xuICAgICAgICAgIGNvbHVtbnNUb0Rpc3BsYXkgPSBjbG9uZUNvbHVtbi5maWx0ZXIoXG4gICAgICAgICAgICAoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBpbmRleCA+PSAwXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29sdW1uRGlzcGxheS5uZXh0KGNvbHVtbnNUb0Rpc3BsYXkpXG4gICAgICB9KTtcbiAgfVxufVxuIl19