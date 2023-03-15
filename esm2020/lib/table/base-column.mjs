import { Component, Input, ViewChild } from '@angular/core';
import { MatColumnDef } from '@angular/material/table';
import * as i0 from "@angular/core";
export class BaseColumn {
    constructor() {
        this.editRow = false;
    }
}
BaseColumn.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BaseColumn, deps: [], target: i0.ɵɵFactoryTarget.Component });
BaseColumn.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: BaseColumn, selector: "app-base", inputs: { name: "name", field: "field", className: "className", iconClass: "iconClass", editRow: "editRow", footerMessage: "footerMessage" }, viewQueries: [{ propertyName: "columnDef", first: true, predicate: MatColumnDef, descendants: true }], ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: BaseColumn, decorators: [{
            type: Component,
            args: [{
                    selector: 'app-base',
                    template: '',
                }]
        }], propDecorators: { columnDef: [{
                type: ViewChild,
                args: [MatColumnDef]
            }], name: [{
                type: Input
            }], field: [{
                type: Input
            }], className: [{
                type: Input
            }], iconClass: [{
                type: Input
            }], editRow: [{
                type: Input
            }], footerMessage: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1jb2x1bW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGlidXJnL3NyYy9saWIvdGFibGUvYmFzZS1jb2x1bW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFNdkQsTUFBTSxPQUFnQixVQUFVO0lBSmhDO1FBMEJTLFlBQU8sR0FBWSxLQUFLLENBQUM7S0FLakM7O3VHQTNCcUIsVUFBVTsyRkFBVixVQUFVLHlPQUNuQixZQUFZLGdEQUhiLEVBQUU7MkZBRVEsVUFBVTtrQkFKL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7OEJBSVEsU0FBUztzQkFGZixTQUFTO3VCQUFDLFlBQVk7Z0JBTWhCLElBQUk7c0JBRlYsS0FBSztnQkFNQyxLQUFLO3NCQUZYLEtBQUs7Z0JBTUMsU0FBUztzQkFGZixLQUFLO2dCQU1DLFNBQVM7c0JBRmYsS0FBSztnQkFLQyxPQUFPO3NCQURiLEtBQUs7Z0JBS0MsYUFBYTtzQkFGbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0Q29sdW1uRGVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtYmFzZScsXG4gIHRlbXBsYXRlOiAnJyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUNvbHVtbiB7XG4gIEBWaWV3Q2hpbGQoTWF0Q29sdW1uRGVmKVxuICAvLyBAdHMtaWdub3JlXG4gIHB1YmxpYyBjb2x1bW5EZWY6IE1hdENvbHVtbkRlZjtcblxuICBASW5wdXQoKVxuICAvLyBAdHMtaWdub3JlXG4gIHB1YmxpYyBuYW1lOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgLy8gQHRzLWlnbm9yZVxuICBwdWJsaWMgZmllbGQ6IHN0cmluZztcblxuICBASW5wdXQoKVxuICAvLyBAdHMtaWdub3JlXG4gIHB1YmxpYyBjbGFzc05hbWU6IHN0cmluZztcblxuICBASW5wdXQoKVxuICAvLyBAdHMtaWdub3JlXG4gIHB1YmxpYyBpY29uQ2xhc3M6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZWRpdFJvdzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIC8vIEB0cy1pZ25vcmVcbiAgcHVibGljIGZvb3Rlck1lc3NhZ2U6IHN0cmluZyB8IG51bWJlciB8IG51bGw7XG59XG4iXX0=