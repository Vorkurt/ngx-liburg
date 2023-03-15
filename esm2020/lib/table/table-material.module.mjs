import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatTableModule } from '@angular/material/table';
import { ColumnAreaTextComponent } from './columns/column-area-text/column-area-text.component';
import { ColumnIconActionComponent } from './columns/column-icon-action/column-icon-action.component';
import { ColumnNumberComponent } from './columns/column-number/column-number.component';
import { ColumnSelectComponent } from './columns/column-select/column-select.component';
import { ColumnTextComponent } from './columns/column-text/column-text.component';
import { ColumnTwoCasesComponent } from "./columns/column-two-cases/column-two-cases.component";
import { TableComponent } from './table/table.component';
import { TooltipComponent } from "./tooltip/tooltip.component";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ActionComponent } from './columns/action/action.component';
import * as i0 from "@angular/core";
export class TableMaterialModule {
}
TableMaterialModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableMaterialModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TableMaterialModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.3.0", ngImport: i0, type: TableMaterialModule, declarations: [TableComponent,
        ColumnTextComponent,
        ColumnAreaTextComponent,
        ColumnIconActionComponent,
        TooltipComponent,
        ColumnNumberComponent,
        ColumnSelectComponent,
        ColumnTwoCasesComponent,
        ActionComponent], imports: [CommonModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
        MatPaginatorModule,
        LayoutModule,
        MatTableModule,
        MatSlideToggleModule,
        DragDropModule], exports: [TableComponent,
        ColumnTextComponent,
        ColumnAreaTextComponent,
        ColumnIconActionComponent,
        TooltipComponent,
        ColumnNumberComponent,
        ColumnSelectComponent,
        ColumnTwoCasesComponent] });
TableMaterialModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableMaterialModule, imports: [CommonModule,
        FormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatTableModule,
        MatSelectModule,
        MatPaginatorModule,
        LayoutModule,
        MatTableModule,
        MatSlideToggleModule,
        DragDropModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableMaterialModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TableComponent,
                        ColumnTextComponent,
                        ColumnAreaTextComponent,
                        ColumnIconActionComponent,
                        TooltipComponent,
                        ColumnNumberComponent,
                        ColumnSelectComponent,
                        ColumnTwoCasesComponent,
                        ActionComponent,
                    ],
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatButtonModule,
                        MatFormFieldModule,
                        MatIconModule,
                        MatInputModule,
                        MatTableModule,
                        MatSelectModule,
                        MatPaginatorModule,
                        LayoutModule,
                        MatTableModule,
                        MatSlideToggleModule,
                        DragDropModule
                    ],
                    exports: [
                        TableComponent,
                        ColumnTextComponent,
                        ColumnAreaTextComponent,
                        ColumnIconActionComponent,
                        TooltipComponent,
                        ColumnNumberComponent,
                        ColumnSelectComponent,
                        ColumnTwoCasesComponent,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbWF0ZXJpYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYnVyZy9zcmMvbGliL3RhYmxlL3RhYmxlLW1hdGVyaWFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsWUFBWSxFQUNiLE1BQU0scUJBQXFCLENBQUM7QUFDN0IsT0FBTyxFQUNMLFlBQVksRUFDYixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFDTCxRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFdBQVcsRUFDWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFDTCxlQUFlLEVBQ2hCLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUNMLGtCQUFrQixFQUNuQixNQUFNLDhCQUE4QixDQUFDO0FBQ3RDLE9BQU8sRUFDTCxhQUFhLEVBQ2QsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQ0wsY0FBYyxFQUNmLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUNMLGtCQUFrQixFQUNuQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFDTCxlQUFlLEVBQ2hCLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUNMLG9CQUFvQixFQUNyQixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFDTCxjQUFjLEVBQ2YsTUFBTSx5QkFBeUIsQ0FBQztBQUNqQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3hCLE1BQU0sdURBQXVELENBQUM7QUFDL0QsT0FBTyxFQUNMLHlCQUF5QixFQUMxQixNQUFNLDJEQUEyRCxDQUFDO0FBQ25FLE9BQU8sRUFDTCxxQkFBcUIsRUFDdEIsTUFBTSxpREFBaUQsQ0FBQztBQUN6RCxPQUFPLEVBQ0wscUJBQXFCLEVBQ3RCLE1BQU0saURBQWlELENBQUM7QUFDekQsT0FBTyxFQUNMLG1CQUFtQixFQUNwQixNQUFNLDZDQUE2QyxDQUFDO0FBQ3JELE9BQU8sRUFDTCx1QkFBdUIsRUFDeEIsTUFBTSx1REFBdUQsQ0FBQztBQUMvRCxPQUFPLEVBQ0wsY0FBYyxFQUNmLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUNMLGdCQUFnQixFQUNqQixNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFDTCxjQUFjLEVBQ2YsTUFBTSx3QkFBd0IsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7O0FBd0NwRSxNQUFNLE9BQU8sbUJBQW1COztnSEFBbkIsbUJBQW1CO2lIQUFuQixtQkFBbUIsaUJBcEM1QixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLGVBQWUsYUFHZixZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGNBQWM7UUFDZCxjQUFjO1FBQ2QsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osY0FBYztRQUNkLG9CQUFvQjtRQUNwQixjQUFjLGFBR2QsY0FBYztRQUNkLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHVCQUF1QjtpSEFHZCxtQkFBbUIsWUF6QjVCLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsY0FBYztRQUNkLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLGNBQWM7MkZBYUwsbUJBQW1CO2tCQXRDL0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIseUJBQXlCO3dCQUN6QixnQkFBZ0I7d0JBQ2hCLHFCQUFxQjt3QkFDckIscUJBQXFCO3dCQUNyQix1QkFBdUI7d0JBQ3ZCLGVBQWU7cUJBQ2hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGVBQWU7d0JBQ2Ysa0JBQWtCO3dCQUNsQixZQUFZO3dCQUNaLGNBQWM7d0JBQ2Qsb0JBQW9CO3dCQUNwQixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRTt3QkFDUCxjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2Qix5QkFBeUI7d0JBQ3pCLGdCQUFnQjt3QkFDaEIscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLHVCQUF1QjtxQkFDeEI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMYXlvdXRNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQge1xuICBDb21tb25Nb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIE5nTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRm9ybXNNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgTWF0QnV0dG9uTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge1xuICBNYXRGb3JtRmllbGRNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge1xuICBNYXRJY29uTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtcbiAgTWF0SW5wdXRNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtcbiAgTWF0UGFnaW5hdG9yTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQge1xuICBNYXRTZWxlY3RNb2R1bGVcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7XG4gIE1hdFNsaWRlVG9nZ2xlTW9kdWxlXG59IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGVcIjtcbmltcG9ydCB7XG4gIE1hdFRhYmxlTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7XG4gIENvbHVtbkFyZWFUZXh0Q29tcG9uZW50XG59IGZyb20gJy4vY29sdW1ucy9jb2x1bW4tYXJlYS10ZXh0L2NvbHVtbi1hcmVhLXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIENvbHVtbkljb25BY3Rpb25Db21wb25lbnRcbn0gZnJvbSAnLi9jb2x1bW5zL2NvbHVtbi1pY29uLWFjdGlvbi9jb2x1bW4taWNvbi1hY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7XG4gIENvbHVtbk51bWJlckNvbXBvbmVudFxufSBmcm9tICcuL2NvbHVtbnMvY29sdW1uLW51bWJlci9jb2x1bW4tbnVtYmVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBDb2x1bW5TZWxlY3RDb21wb25lbnRcbn0gZnJvbSAnLi9jb2x1bW5zL2NvbHVtbi1zZWxlY3QvY29sdW1uLXNlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgQ29sdW1uVGV4dENvbXBvbmVudFxufSBmcm9tICcuL2NvbHVtbnMvY29sdW1uLXRleHQvY29sdW1uLXRleHQuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIENvbHVtblR3b0Nhc2VzQ29tcG9uZW50XG59IGZyb20gXCIuL2NvbHVtbnMvY29sdW1uLXR3by1jYXNlcy9jb2x1bW4tdHdvLWNhc2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtcbiAgVGFibGVDb21wb25lbnRcbn0gZnJvbSAnLi90YWJsZS90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtcbiAgVG9vbHRpcENvbXBvbmVudFxufSBmcm9tIFwiLi90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50XCI7XG5pbXBvcnQge1xuICBEcmFnRHJvcE1vZHVsZVxufSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7IEFjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29sdW1ucy9hY3Rpb24vYWN0aW9uLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRhYmxlQ29tcG9uZW50LFxuICAgIENvbHVtblRleHRDb21wb25lbnQsXG4gICAgQ29sdW1uQXJlYVRleHRDb21wb25lbnQsXG4gICAgQ29sdW1uSWNvbkFjdGlvbkNvbXBvbmVudCxcbiAgICBUb29sdGlwQ29tcG9uZW50LFxuICAgIENvbHVtbk51bWJlckNvbXBvbmVudCxcbiAgICBDb2x1bW5TZWxlY3RDb21wb25lbnQsXG4gICAgQ29sdW1uVHdvQ2FzZXNDb21wb25lbnQsXG4gICAgQWN0aW9uQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIExheW91dE1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBEcmFnRHJvcE1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGFibGVDb21wb25lbnQsXG4gICAgQ29sdW1uVGV4dENvbXBvbmVudCxcbiAgICBDb2x1bW5BcmVhVGV4dENvbXBvbmVudCxcbiAgICBDb2x1bW5JY29uQWN0aW9uQ29tcG9uZW50LFxuICAgIFRvb2x0aXBDb21wb25lbnQsXG4gICAgQ29sdW1uTnVtYmVyQ29tcG9uZW50LFxuICAgIENvbHVtblNlbGVjdENvbXBvbmVudCxcbiAgICBDb2x1bW5Ud29DYXNlc0NvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVNYXRlcmlhbE1vZHVsZSB7XG59XG4iXX0=