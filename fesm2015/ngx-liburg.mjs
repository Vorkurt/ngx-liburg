import * as i1$2 from '@angular/cdk/layout';
import { Breakpoints, LayoutModule } from '@angular/cdk/layout';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewChild, Input, Injectable, EventEmitter, ViewEncapsulation, Output, ContentChildren, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormControl, FormsModule } from '@angular/forms';
import * as i3 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4$1 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i4 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i6$1 from '@angular/material/paginator';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import * as i5$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i4$2 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i5 from '@angular/material/table';
import { MatColumnDef, MatTable, MatTableModule } from '@angular/material/table';
import { TemplatePortal } from '@angular/cdk/portal';
import * as i1 from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import * as i6 from '@angular/material/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i7 from '@angular/cdk/drag-drop';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { takeUntil } from 'rxjs/operators';

class BaseColumn {
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

const configOverlay = {
    LEFT: {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
    },
    RIGHT: {
        originX: 'start',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center',
    },
    TOP: {
        originX: 'start',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'top',
    },
    BOTTOM: {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
    },
};
class ElixTooltipService {
    constructor(_overlay, _rendererFactory) {
        this._overlay = _overlay;
        this._rendererFactory = _rendererFactory;
        this._rendered2 = _rendererFactory.createRenderer(null, null);
    }
    initTooltip(templateRef, viewContainerRef, origin, width) {
        const portalHost = new TemplatePortal(templateRef, viewContainerRef);
        const overlayRef = this._overlay.create({
            positionStrategy: this._overlay
                .position()
                .flexibleConnectedTo(origin)
                .withPositions([
                configOverlay.BOTTOM,
                configOverlay.TOP,
                configOverlay.LEFT,
                configOverlay.RIGHT,
            ]),
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            panelClass: 'vorkurt-tooltip',
            width: width,
        });
        this._getConfigAtArrow(overlayRef);
        overlayRef.attach(portalHost);
        overlayRef.backdropClick().subscribe(() => this.close(overlayRef));
        return overlayRef;
    }
    close(overlayRef) {
        overlayRef.detach();
        overlayRef.dispose();
    }
    _getConfigAtArrow(overlayRef) {
        const tooltipPosition = overlayRef.getConfig()
            .positionStrategy.positions[0];
        const arrow = this._rendered2.createElement('span');
        arrow.classList.add('elix__arrow');
        const tooltipHeight = overlayRef.getConfig().height;
        const tooltipWidth = overlayRef.getConfig().width;
        switch (tooltipPosition) {
            case configOverlay.LEFT:
                arrow.classList.add('elix__arrow-right');
                arrow.style.transform = 'rotate(230deg)';
                arrow.style.top = 'calc(50% + -6.5px)';
                arrow.style.left = 'calc(100%)';
                break;
            case configOverlay.RIGHT:
                arrow.classList.add('elix__arrow-left');
                break;
            case configOverlay.TOP:
                arrow.classList.add('elix__arrow-bottom');
                arrow.style.transform = 'rotate(135deg)';
                break;
            case configOverlay.BOTTOM:
                arrow.classList.add('elix__arrow-top');
                arrow.style.left = '50%';
                arrow.style.top = 'calc(100% + -15px)';
                arrow.style.transform = 'rotate(315deg)';
                break;
        }
        overlayRef.overlayElement.appendChild(arrow);
    }
}
ElixTooltipService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ElixTooltipService, deps: [{ token: i1.Overlay }, { token: i0.RendererFactory2 }], target: i0.ɵɵFactoryTarget.Injectable });
ElixTooltipService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ElixTooltipService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ElixTooltipService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i0.RendererFactory2 }]; } });

class TooltipComponent {
}
TooltipComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TooltipComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: TooltipComponent, selector: "elix-tooltip", inputs: { width: "width" }, ngImport: i0, template: "<div>\n  <div\n    [style.width.px]=\"width\"\n    class=\"text-white border-2 elix__shared-border-color border-solid rounded-lg m-2\"\n  >\n    <div class=\"p-2.5\">\n      <div>\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".elix__shared-border-color{background:var(--backgroundPrimary);border:.1rem solid rgba(234,232,232,.33);box-shadow:0 3px .3rem #d1d1d126;width:100%}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'elix-tooltip', template: "<div>\n  <div\n    [style.width.px]=\"width\"\n    class=\"text-white border-2 elix__shared-border-color border-solid rounded-lg m-2\"\n  >\n    <div class=\"p-2.5\">\n      <div>\n        <ng-content></ng-content>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".elix__shared-border-color{background:var(--backgroundPrimary);border:.1rem solid rgba(234,232,232,.33);box-shadow:0 3px .3rem #d1d1d126;width:100%}\n"] }]
        }], propDecorators: { width: [{
                type: Input
            }] } });

class ColumnAreaTextComponent extends BaseColumn {
    constructor(_elixTooltip, _viewContainer) {
        super();
        this._elixTooltip = _elixTooltip;
        this._viewContainer = _viewContainer;
        this.value = false;
        this.width = 400;
    }
    openTooltip(element, model) {
        this.value = false;
        if (!this.tooltipOverlay || !this.tooltipOverlay.hasAttached()) {
            this.vars = model.model[this.field];
            this.tooltipOverlay = this._elixTooltip.initTooltip(this.tooltipRef, this._viewContainer, element, this.width);
            // @ts-ignore
            this.tooltipOverlay.backdropElement.classList.add('cursor-pointer');
        }
    }
    closeTooltip() {
        this.value = true;
        this.tooltipOverlay.detach();
        this.tooltipOverlay.dispose();
    }
    doubleClick(element, value) {
        this.value = true;
        element.editable = value;
    }
}
ColumnAreaTextComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColumnAreaTextComponent, deps: [{ token: ElixTooltipService }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component });
ColumnAreaTextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ColumnAreaTextComponent, selector: "elix-column-area-text", providers: [{ provide: BaseColumn, useExisting: ColumnAreaTextComponent }], viewQueries: [{ propertyName: "tooltipRef", first: true, predicate: ["tooltipRef"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<ng-container [matColumnDef]=\"field\">\n  <mat-header-cell [class]=\"className\" mat-header-cell *matHeaderCellDef>{{\n    name\n  }}</mat-header-cell>\n  <mat-cell\n    [class]=\"className\"\n    mat-cell\n    *matCellDef=\"let element\"\n    (click)=\"element.model['field'] !== '' && openTooltip(reference, element)\"\n    #reference\n  >\n    <textarea\n      matInput\n      [(ngModel)]=\"element.model[field]\"\n      [disabled]=\"element.editable\"\n      [ngStyle]=\"{ color: 'black' }\"\n    ></textarea>\n\n    <ng-template #tooltipRef>\n      <elix-tooltip [width]=\"width\">{{ vars }}</elix-tooltip>\n    </ng-template>\n  </mat-cell>\n  <mat-footer-cell *matFooterCellDef>\n    {{ footerMessage }}\n  </mat-footer-cell>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i5.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i5.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i5.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i5.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i5.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i5.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "directive", type: i5.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }, { kind: "component", type: TooltipComponent, selector: "elix-tooltip", inputs: ["width"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColumnAreaTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'elix-column-area-text', providers: [{ provide: BaseColumn, useExisting: ColumnAreaTextComponent }], template: "<ng-container [matColumnDef]=\"field\">\n  <mat-header-cell [class]=\"className\" mat-header-cell *matHeaderCellDef>{{\n    name\n  }}</mat-header-cell>\n  <mat-cell\n    [class]=\"className\"\n    mat-cell\n    *matCellDef=\"let element\"\n    (click)=\"element.model['field'] !== '' && openTooltip(reference, element)\"\n    #reference\n  >\n    <textarea\n      matInput\n      [(ngModel)]=\"element.model[field]\"\n      [disabled]=\"element.editable\"\n      [ngStyle]=\"{ color: 'black' }\"\n    ></textarea>\n\n    <ng-template #tooltipRef>\n      <elix-tooltip [width]=\"width\">{{ vars }}</elix-tooltip>\n    </ng-template>\n  </mat-cell>\n  <mat-footer-cell *matFooterCellDef>\n    {{ footerMessage }}\n  </mat-footer-cell>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: ElixTooltipService }, { type: i0.ViewContainerRef }]; }, propDecorators: { tooltipRef: [{
                type: ViewChild,
                args: ['tooltipRef']
            }] } });

class ColumnRotateService {
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

class ColumnIconActionComponent extends BaseColumn {
    constructor(_columnRotate) {
        super();
        this._columnRotate = _columnRotate;
        this.iconAction = false;
    }
    scrollColumn(left) {
        this._columnRotate.setSide(left);
    }
}
ColumnIconActionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColumnIconActionComponent, deps: [{ token: ColumnRotateService }], target: i0.ɵɵFactoryTarget.Component });
ColumnIconActionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ColumnIconActionComponent, selector: "elix-column-icon-action", inputs: { iconAction: "iconAction" }, providers: [{
            provide: BaseColumn,
            useExisting: ColumnIconActionComponent
        }], usesInheritance: true, ngImport: i0, template: "<ng-container [matColumnDef]=\"field\">\n  <mat-header-cell [class]=\"className\" mat-header-cell *matHeaderCellDef=\"let element\"\n  >\n    <ng-container *ngIf=\"!iconAction\">\n      {{\n      name\n      }}\n    </ng-container>\n    <ng-container *ngIf=\"iconAction\">\n      <button mat-button\n              (click)=\"scrollColumn('left')\"\n      >\n        <mat-icon\n          [svgIcon]=\"'fa_solid:arrow-left'\"\n        ></mat-icon>\n      </button>\n      <button mat-button\n              (click)=\"scrollColumn('right')\">\n        <mat-icon\n          [svgIcon]=\"'fa_solid:arrow-right'\"\n        ></mat-icon>\n      </button>\n    </ng-container>\n  </mat-header-cell>\n  <mat-cell [class]=\"className\" mat-cell *matCellDef=\"let element\">\n    <ng-container *ngIf=\"!iconAction\">\n\n      <ng-container *ngFor=\"let action of element.actions\">\n        <button\n          mat-button\n          (click)=\"action.method(element)\"\n          [class]=\"action.classCss\"\n        >\n          <mat-icon [svgIcon]=\"action.iconClass\"></mat-icon>\n        </button>\n      </ng-container>\n    </ng-container>\n  </mat-cell>\n  <mat-footer-cell *matFooterCellDef>\n    <ng-container *ngIf=\"!iconAction\">\n      {{ footerMessage }}\n    </ng-container>\n  </mat-footer-cell>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i5.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i5.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i5.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i5.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i5.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "directive", type: i5.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColumnIconActionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'elix-column-icon-action', providers: [{
                            provide: BaseColumn,
                            useExisting: ColumnIconActionComponent
                        }], template: "<ng-container [matColumnDef]=\"field\">\n  <mat-header-cell [class]=\"className\" mat-header-cell *matHeaderCellDef=\"let element\"\n  >\n    <ng-container *ngIf=\"!iconAction\">\n      {{\n      name\n      }}\n    </ng-container>\n    <ng-container *ngIf=\"iconAction\">\n      <button mat-button\n              (click)=\"scrollColumn('left')\"\n      >\n        <mat-icon\n          [svgIcon]=\"'fa_solid:arrow-left'\"\n        ></mat-icon>\n      </button>\n      <button mat-button\n              (click)=\"scrollColumn('right')\">\n        <mat-icon\n          [svgIcon]=\"'fa_solid:arrow-right'\"\n        ></mat-icon>\n      </button>\n    </ng-container>\n  </mat-header-cell>\n  <mat-cell [class]=\"className\" mat-cell *matCellDef=\"let element\">\n    <ng-container *ngIf=\"!iconAction\">\n\n      <ng-container *ngFor=\"let action of element.actions\">\n        <button\n          mat-button\n          (click)=\"action.method(element)\"\n          [class]=\"action.classCss\"\n        >\n          <mat-icon [svgIcon]=\"action.iconClass\"></mat-icon>\n        </button>\n      </ng-container>\n    </ng-container>\n  </mat-cell>\n  <mat-footer-cell *matFooterCellDef>\n    <ng-container *ngIf=\"!iconAction\">\n      {{ footerMessage }}\n    </ng-container>\n  </mat-footer-cell>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: ColumnRotateService }]; }, propDecorators: { iconAction: [{
                type: Input
            }] } });

class ColumnNumberComponent extends BaseColumn {
    constructor() {
        super(...arguments);
        this.editRow = false;
        this.textValidator = new FormControl();
    }
    changeEntity(element) {
        this.textValidator.valueChanges.subscribe((resp) => {
            console.log(resp);
        });
    }
}
ColumnNumberComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColumnNumberComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ColumnNumberComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ColumnNumberComponent, selector: "elix-column-number", inputs: { editRow: "editRow" }, providers: [{ provide: BaseColumn, useExisting: ColumnNumberComponent }], usesInheritance: true, ngImport: i0, template: "<ng-container [matColumnDef]=\"field\">\n  <mat-header-cell [class]=\"className\" mat-header-cell *matHeaderCellDef>\n    {{ name }}\n  </mat-header-cell>\n  <mat-cell [class]=\"className\" mat-cell *matCellDef=\"let element\">\n    <mat-form-field\n      appearance=\"outline\"\n      *ngIf=\"element.editable && editRow; else prettyText\"\n      class=\"column-text__edit\"\n    >\n      <input\n        type=\"number\"\n        [(ngModel)]=\"element.model[field]\"\n        matInput\n        (ngModelChange)=\"changeEntity(element)\"\n      />\n    </mat-form-field>\n    <ng-template #prettyText>\n      {{ element.model[field] }}\n    </ng-template>\n  </mat-cell>\n  <mat-footer-cell *matFooterCellDef>\n    {{ footerMessage }}\n  </mat-footer-cell>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i5.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i5.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i5.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i5.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i5.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i5.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "directive", type: i5.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColumnNumberComponent, decorators: [{
            type: Component,
            args: [{ selector: 'elix-column-number', providers: [{ provide: BaseColumn, useExisting: ColumnNumberComponent }], template: "<ng-container [matColumnDef]=\"field\">\n  <mat-header-cell [class]=\"className\" mat-header-cell *matHeaderCellDef>\n    {{ name }}\n  </mat-header-cell>\n  <mat-cell [class]=\"className\" mat-cell *matCellDef=\"let element\">\n    <mat-form-field\n      appearance=\"outline\"\n      *ngIf=\"element.editable && editRow; else prettyText\"\n      class=\"column-text__edit\"\n    >\n      <input\n        type=\"number\"\n        [(ngModel)]=\"element.model[field]\"\n        matInput\n        (ngModelChange)=\"changeEntity(element)\"\n      />\n    </mat-form-field>\n    <ng-template #prettyText>\n      {{ element.model[field] }}\n    </ng-template>\n  </mat-cell>\n  <mat-footer-cell *matFooterCellDef>\n    {{ footerMessage }}\n  </mat-footer-cell>\n</ng-container>\n" }]
        }], propDecorators: { editRow: [{
                type: Input
            }] } });

class ColumnSelectComponent extends BaseColumn {
    constructor() {
        super(...arguments);
        this.truthy = false;
        this.onValueChanges = new EventEmitter();
    }
    ngOnInit() {
        if (this.options)
            this.options = this.options.sort();
        if (this.truthy) {
            this.options = [
                { index: 1, value: true, name: 'True' },
                { index: 0, value: false, name: 'False' },
            ];
        }
    }
    changeEntity(rowElement) {
        this.onValueChanges.emit(rowElement);
    }
}
ColumnSelectComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColumnSelectComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ColumnSelectComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ColumnSelectComponent, selector: "elix-column-select", inputs: { options: "options", truthy: "truthy" }, outputs: { onValueChanges: "onValueChanges" }, providers: [{ provide: BaseColumn, useExisting: ColumnSelectComponent }], usesInheritance: true, ngImport: i0, template: "<ng-container [matColumnDef]=\"field\">\n  <mat-header-cell [class]=\"className\" mat-header-cell *matHeaderCellDef>\n    {{ name }}\n  </mat-header-cell>\n  <mat-cell [class]=\"className\" mat-cell *matCellDef=\"let element\">\n    <mat-form-field class=\"flex\" appearance=\"outline\">\n      {{ element.model[field].name }}\n      <mat-select\n        name=\"select\"\n        [(ngModel)]=\"element.model[field]\"\n        (ngModelChange)=\"element.model[field] = $event; changeEntity(element)\"\n      >\n        <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n          {{ option.value }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </mat-cell>\n  <mat-footer-cell *matFooterCellDef>\n    {{footerMessage}}\n  </mat-footer-cell>\n</ng-container>\n", styles: [".mat-form-field-infix{display:flex!important}\n"], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i5.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i5.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i5.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i5.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i5.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "directive", type: i5.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }, { kind: "component", type: i5$1.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColumnSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'elix-column-select', providers: [{ provide: BaseColumn, useExisting: ColumnSelectComponent }], encapsulation: ViewEncapsulation.None, template: "<ng-container [matColumnDef]=\"field\">\n  <mat-header-cell [class]=\"className\" mat-header-cell *matHeaderCellDef>\n    {{ name }}\n  </mat-header-cell>\n  <mat-cell [class]=\"className\" mat-cell *matCellDef=\"let element\">\n    <mat-form-field class=\"flex\" appearance=\"outline\">\n      {{ element.model[field].name }}\n      <mat-select\n        name=\"select\"\n        [(ngModel)]=\"element.model[field]\"\n        (ngModelChange)=\"element.model[field] = $event; changeEntity(element)\"\n      >\n        <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n          {{ option.value }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </mat-cell>\n  <mat-footer-cell *matFooterCellDef>\n    {{footerMessage}}\n  </mat-footer-cell>\n</ng-container>\n", styles: [".mat-form-field-infix{display:flex!important}\n"] }]
        }], propDecorators: { options: [{
                type: Input
            }], truthy: [{
                type: Input
            }], onValueChanges: [{
                type: Output
            }] } });

class ColumnTextComponent extends BaseColumn {
    constructor() {
        super(...arguments);
        this.onValueChanges = new EventEmitter();
    }
    changeEntity(rowElement) {
        this.onValueChanges.emit(rowElement);
    }
}
ColumnTextComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColumnTextComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ColumnTextComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ColumnTextComponent, selector: "elix-column-text", outputs: { onValueChanges: "onValueChanges" }, providers: [{ provide: BaseColumn, useExisting: ColumnTextComponent }], usesInheritance: true, ngImport: i0, template: "<ng-container [matColumnDef]=\"field\" >\n  <mat-header-cell [class]=\"className\" mat-header-cell *matHeaderCellDef>\n    {{ name }}\n  </mat-header-cell>\n  <mat-cell [class]=\"className\" mat-cell *matCellDef=\"let element\">\n    <mat-form-field\n      appearance=\"outline\"\n      *ngIf=\"element.editable && editRow; else prettyText\"\n      class=\"column-text__edit\"\n    >\n      <input class=\"text-input\"\n        [(ngModel)]=\"element.model[field]\"\n        (ngModelChange)=\"element.model[field] = $event; changeEntity({change: {dataChanged: element.model[field], data: field}})\"\n        matInput\n      />\n    </mat-form-field>\n    <ng-template #prettyText>\n      <div class=\"text-disable dark:text-white\">\n      {{ element.model[field] }}\n    </div>\n    </ng-template>\n  </mat-cell>\n  <mat-footer-cell *matFooterCellDef>\n      {{footerMessage}}\n  </mat-footer-cell>\n</ng-container>\n", styles: [".text-input{background:white!important;padding:.8rem .4rem .4rem!important;margin:0!important}.text-disable{padding:.4rem!important}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3$1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i5.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i5.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i5.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i5.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i5.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i5.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "directive", type: i5.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColumnTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'elix-column-text', providers: [{ provide: BaseColumn, useExisting: ColumnTextComponent }], encapsulation: ViewEncapsulation.None, template: "<ng-container [matColumnDef]=\"field\" >\n  <mat-header-cell [class]=\"className\" mat-header-cell *matHeaderCellDef>\n    {{ name }}\n  </mat-header-cell>\n  <mat-cell [class]=\"className\" mat-cell *matCellDef=\"let element\">\n    <mat-form-field\n      appearance=\"outline\"\n      *ngIf=\"element.editable && editRow; else prettyText\"\n      class=\"column-text__edit\"\n    >\n      <input class=\"text-input\"\n        [(ngModel)]=\"element.model[field]\"\n        (ngModelChange)=\"element.model[field] = $event; changeEntity({change: {dataChanged: element.model[field], data: field}})\"\n        matInput\n      />\n    </mat-form-field>\n    <ng-template #prettyText>\n      <div class=\"text-disable dark:text-white\">\n      {{ element.model[field] }}\n    </div>\n    </ng-template>\n  </mat-cell>\n  <mat-footer-cell *matFooterCellDef>\n      {{footerMessage}}\n  </mat-footer-cell>\n</ng-container>\n", styles: [".text-input{background:white!important;padding:.8rem .4rem .4rem!important;margin:0!important}.text-disable{padding:.4rem!important}\n"] }]
        }], propDecorators: { onValueChanges: [{
                type: Output
            }] } });

var SelectEnum;
(function (SelectEnum) {
    SelectEnum["TRUE"] = "true";
    SelectEnum["FALSE"] = "false";
})(SelectEnum || (SelectEnum = {}));
class ColumnTwoCasesComponent extends BaseColumn {
    constructor() {
        super(...arguments);
        this.onValueChanges = new EventEmitter();
        this.chosenList = [{ value: SelectEnum.FALSE, view: 'False' }, { value: SelectEnum.TRUE, view: 'True' }];
    }
    ngOnInit() {
    }
    changeValue() {
    }
    changeEntity(param) {
        console.log(param);
    }
}
ColumnTwoCasesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColumnTwoCasesComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
ColumnTwoCasesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ColumnTwoCasesComponent, selector: "elix-column-two-cases", outputs: { onValueChanges: "onValueChanges" }, providers: [{ provide: BaseColumn, useExisting: ColumnTwoCasesComponent }], usesInheritance: true, ngImport: i0, template: "<ng-container [matColumnDef]=\"field\">\n  <mat-header-cell [class]=\"className\" mat-header-cell *matHeaderCellDef>\n    {{name}}\n  </mat-header-cell>\n  <mat-cell [class]=\"className\" mat-cell *matCellDef=\"let element\">\n\n      <mat-slide-toggle *ngIf=\"element.editable && editRow; else prettyText\"  [(ngModel)]=\"element.model[field]\" ></mat-slide-toggle>\n      <ng-template #prettyText>\n      {{ element.model[field] }}\n    </ng-template>\n  </mat-cell>\n</ng-container>\n", styles: [""], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i5.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i5.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i5.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i5.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i5.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i4$2.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matSlideToggle"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ColumnTwoCasesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'elix-column-two-cases', encapsulation: ViewEncapsulation.None, providers: [{ provide: BaseColumn, useExisting: ColumnTwoCasesComponent }], template: "<ng-container [matColumnDef]=\"field\">\n  <mat-header-cell [class]=\"className\" mat-header-cell *matHeaderCellDef>\n    {{name}}\n  </mat-header-cell>\n  <mat-cell [class]=\"className\" mat-cell *matCellDef=\"let element\">\n\n      <mat-slide-toggle *ngIf=\"element.editable && editRow; else prettyText\"  [(ngModel)]=\"element.model[field]\" ></mat-slide-toggle>\n      <ng-template #prettyText>\n      {{ element.model[field] }}\n    </ng-template>\n  </mat-cell>\n</ng-container>\n" }]
        }], propDecorators: { onValueChanges: [{
                type: Output
            }] } });

class TableService {
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
TableService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableService, deps: [{ token: i1$2.BreakpointObserver }], target: i0.ɵɵFactoryTarget.Injectable });
TableService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1$2.BreakpointObserver }]; } });

class TableComponent {
    constructor(_tableState, _columnRotate, _changeDetectorRef) {
        this._tableState = _tableState;
        this._columnRotate = _columnRotate;
        this._changeDetectorRef = _changeDetectorRef;
        this.extensible = false;
        // Footer
        this.footerShow = false;
        // class for footer
        this.footerMessageClass = '';
        // flag about if we want to show pagination
        this.showPagination = false;
        this.addedNewEntry = false;
        this.onAddEntry = new EventEmitter();
        this.onPaginationChange = new EventEmitter();
        this.filterTooltip = true;
        this.columnsToDispaly = [];
        this.doubleColumnToDisplay = [];
        // for avoid memory leak
        this._destroyed = new Subject();
    }
    ngAfterViewInit() {
        this.columnsToDispaly = this.columnDefs.map((resp) => resp.columnDef.name);
        this.columnDefs
            .map((resp) => resp.columnDef)
            .forEach((rep) => this.table.addColumnDef(rep));
        this._columnRotate.rotate$.pipe(takeUntil(this._destroyed)).subscribe((side) => {
            if (side.includes('left')) {
                this.rotateColumn('left');
            }
            else {
                this.rotateColumn('right');
            }
        });
        try {
            const duplicate = this.columnsToDispaly.filter((columnDisplay, index, self) => index === self.findIndex((value) => value === columnDisplay));
            this.doubleColumnToDisplay = this.columnsToDispaly;
            this._setColumnForLayout();
            if (duplicate.length < this.columnsToDispaly.length) {
                throw new Error('You duplicate value what you want to display, Please look in definitions at columns');
            }
        }
        catch (err) {
            console.error(err);
        }
        this._changeDetectorRef.detectChanges();
    }
    addNewEntry() {
        this.onAddEntry.next(true);
    }
    changePage(event) {
        this.onPaginationChange.emit(event);
    }
    drop(event) {
        moveItemInArray(this.dataSource, event.previousIndex, event.currentIndex);
        this.table.renderRows();
    }
    rotateColumn(side) {
        if (side === 'left') {
            this._rotateLeft();
        }
        else {
            this._rotateRight();
        }
        this.columnsToDispaly = [...this.doubleColumnToDisplay.slice(0, this.columnsToDispaly.length - 1), 'action'];
    }
    _rotateLeft() {
        const intermediateColumn = this.doubleColumnToDisplay[0];
        this.doubleColumnToDisplay.forEach((column, index) => {
            this.doubleColumnToDisplay[index] = this.doubleColumnToDisplay[index + 1];
        });
        this.doubleColumnToDisplay[this.doubleColumnToDisplay.length - 1] = intermediateColumn;
        this._columnRotate.swapColumn(this.doubleColumnToDisplay);
    }
    _rotateRight() {
        const intermediateColumn = this.doubleColumnToDisplay[this.doubleColumnToDisplay.length - 2];
        for (let i = this.doubleColumnToDisplay.length - 2; i > 0; i--) {
            this.doubleColumnToDisplay[i] = this.doubleColumnToDisplay[i - 1];
        }
        this.doubleColumnToDisplay[0] = intermediateColumn;
    }
    _setColumnForLayout() {
        this._tableState.responsive(this.columnsToDispaly, this.doubleColumnToDisplay);
        this._tableState.columnDisplay$.pipe(takeUntil(this._destroyed)).subscribe(columns => {
            this.columnsToDispaly = columns;
        });
    }
    ngOnDestroy() {
        this._destroyed.next();
        this._destroyed.complete();
    }
}
TableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableComponent, deps: [{ token: TableService }, { token: ColumnRotateService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component });
TableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: TableComponent, selector: "elix-table", inputs: { dataSource: "dataSource", extensible: "extensible", extandble$: "extandble$", footerShow: "footerShow", footerMessageClass: "footerMessageClass", newElementExtandble: "newElementExtandble", showPagination: "showPagination", lenghtPagination: "lenghtPagination", paginationClass: "paginationClass", addedNewEntry: "addedNewEntry", filterTooltip: "filterTooltip" }, outputs: { onAddEntry: "onAddEntry", onPaginationChange: "onPaginationChange" }, queries: [{ propertyName: "columnDefs", predicate: BaseColumn }], viewQueries: [{ propertyName: "table", first: true, predicate: MatTable, descendants: true, static: true }, { propertyName: "paginator", first: true, predicate: MatPaginator, descendants: true }], ngImport: i0, template: "<mat-table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows=\"true\" cdkDropList [cdkDropListData]=\"dataSource\"\n           [ngStyle]=\"{'box-shadow': addedNewEntry ? 'none': ''}\"\n           (cdkDropListDropped)=\"drop($event)\">\n  <ng-content></ng-content>\n  <mat-header-row\n    class=\"header-color gap-1\"\n    mat-header-row\n    *matHeaderRowDef=\"columnsToDispaly; sticky: true\"\n  >\n  </mat-header-row>\n  <mat-row\n    mat-row\n    cdkDrag\n    *matRowDef=\"let row; columns: columnsToDispaly\"\n    class=\"gap-1 header-border-left\"\n  ></mat-row>\n  <!-- Footer for tabel -->\n  <ng-container *ngIf=\"footerShow\">\n    <mat-footer-row\n      [class]=\"footerMessageClass\"\n      *matFooterRowDef=\"columnsToDispaly\"\n      [attr.colspan]=\"columnsToDispaly.length\"\n    >\n    </mat-footer-row>\n  </ng-container>\n\n  <!--  Extanble-->\n  <ng-container *ngIf=\"extensible\">\n    <ng-container matColumnDef=\"extensibleData\">\n      <mat-cell\n        *matCellDef=\"let element\"\n        [attr.colspan]=\"columnsToDispaly.length\"\n        class=\"overflow-hidden\"\n      >\n        <div\n          [@detailExpand]=\"\n            element === (extandble$ | async) ? 'expanded' : 'collapsed'\n          \"\n          class=\"elix__table\"\n        >\n          <ng-container\n            *ngTemplateOutlet=\"\n              newElementExtandble;\n              context: { $implicit: element }\n            \"\n          >\n          </ng-container>\n        </div>\n      </mat-cell>\n    </ng-container>\n\n    <mat-row\n      *matRowDef=\"let row; columns: ['extensibleData']\"\n      class=\"example-detail-row gap-1 header-border-left\"\n    ></mat-row>\n  </ng-container>\n</mat-table>\n<div class=\"new\" *ngIf=\"addedNewEntry\" (click)=\"addNewEntry()\">\n  <mat-icon\n    [svgIcon]=\"'fa_solid:circle-plus'\"\n    class=\"new-entry\"\n  ></mat-icon>\n  <div>\n    <p>Added new Entry</p>\n  </div>\n\n</div>\n<mat-paginator\n  [class]=\"paginationClass\"\n  *ngIf=\"showPagination\"\n  (page)=\"changePage($event)\"\n  [length]=\"lenghtPagination\"\n  [pageSizeOptions]=\"[10, 20, 50]\"\n  showFirstLastButtons\n  aria-label=\"Select page of periodic elements\"\n>\n</mat-paginator>\n", styles: ["elix-table{transition:all .5s ease-in}elix-table mat-table{color:transparent;border-collapse:collapse;border-radius:.5rem;overflow:hidden;box-shadow:#00000026 0 15px 25px,#0000000d 0 5px 10px}elix-table .header-border-left{border-left:1px solid}elix-table mat-header-row mat-header-cell{justify-content:flex-start;border-spacing:2rem}elix-table mat-row{box-shadow:#0366d64d 0 0 0 3px;transition:all ease-in-out .1s;min-height:32px;border:.2px solid;position:relative;height:max-content}elix-table mat-row textarea{outline:none}elix-table mat-row:hover{background:rgba(1,1,222,.1)}elix-table mat-row mat-cell{justify-content:flex-start;position:relative;min-height:1rem;color:#000}elix-table mat-row mat-cell mat-form-field div{padding:0!important;border:0!important}elix-table mat-row mat-cell mat-form-field div input{border:1px solid;box-shadow:inset 0 0 3px 1px #00f3}elix-table mat-row mat-cell textarea{background:inherit;height:1.95rem}elix-table mat-row mat-cell textarea:focus-visible{outline:none;border:1px solid var(--primary-color-input)}elix-table mat-row mat-cell button{padding:0!important;min-width:auto!important}elix-table mat-header-row{min-height:1.5rem}elix-table mat-header-row mat-header-cell{min-height:inherit}elix-table mat-header-cell{color:#fff!important}elix-table .header-color{background:#2d333b;z-index:99!important}elix-table .mat-form-field-infix{width:auto}elix-table .example-detail-row{min-height:0!important}elix-table .example-detail-row mat-cell{min-height:inherit}elix-table .example-detail-row mat-cell .mat-form-field-infix{width:auto!important}.cdk-drop-list-dragging .cdk-drag{transition:transform .35s cubic-bezier(0,0,.2,1)}.cdk-drag-preview{z-index:200;background-color:#fff;border:1px solid #5f7651;box-shadow:#32325d40 0 6px 12px -2px,#0000004d 0 3px 7px -3px}.cdk-drag-animating{transition:transform .35s cubic-bezier(0,0,.2,1)}.new{display:flex;align-items:center;padding:1rem 0 1rem .5rem}.new-entry{color:#52796f!important;padding-right:.5rem}\n"], dependencies: [{ kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i1$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i4$1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i5.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i5.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i5.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i5.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i5.MatFooterRowDef, selector: "[matFooterRowDef]", inputs: ["matFooterRowDef", "matFooterRowDefSticky"] }, { kind: "directive", type: i5.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i5.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i5.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i5.MatFooterRow, selector: "mat-footer-row, tr[mat-footer-row]", exportAs: ["matFooterRow"] }, { kind: "component", type: i6$1.MatPaginator, selector: "mat-paginator", inputs: ["disabled"], exportAs: ["matPaginator"] }, { kind: "directive", type: i7.CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: i7.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "pipe", type: i1$1.AsyncPipe, name: "async" }], animations: [
        trigger('detailExpand', [
            state('collapsed', style({
                height: '0px',
                minHeight: '0'
            })),
            state('expanded', style({ height: '*' })),
            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'elix-table', animations: [
                        trigger('detailExpand', [
                            state('collapsed', style({
                                height: '0px',
                                minHeight: '0'
                            })),
                            state('expanded', style({ height: '*' })),
                            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                        ]),
                    ], encapsulation: ViewEncapsulation.None, template: "<mat-table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows=\"true\" cdkDropList [cdkDropListData]=\"dataSource\"\n           [ngStyle]=\"{'box-shadow': addedNewEntry ? 'none': ''}\"\n           (cdkDropListDropped)=\"drop($event)\">\n  <ng-content></ng-content>\n  <mat-header-row\n    class=\"header-color gap-1\"\n    mat-header-row\n    *matHeaderRowDef=\"columnsToDispaly; sticky: true\"\n  >\n  </mat-header-row>\n  <mat-row\n    mat-row\n    cdkDrag\n    *matRowDef=\"let row; columns: columnsToDispaly\"\n    class=\"gap-1 header-border-left\"\n  ></mat-row>\n  <!-- Footer for tabel -->\n  <ng-container *ngIf=\"footerShow\">\n    <mat-footer-row\n      [class]=\"footerMessageClass\"\n      *matFooterRowDef=\"columnsToDispaly\"\n      [attr.colspan]=\"columnsToDispaly.length\"\n    >\n    </mat-footer-row>\n  </ng-container>\n\n  <!--  Extanble-->\n  <ng-container *ngIf=\"extensible\">\n    <ng-container matColumnDef=\"extensibleData\">\n      <mat-cell\n        *matCellDef=\"let element\"\n        [attr.colspan]=\"columnsToDispaly.length\"\n        class=\"overflow-hidden\"\n      >\n        <div\n          [@detailExpand]=\"\n            element === (extandble$ | async) ? 'expanded' : 'collapsed'\n          \"\n          class=\"elix__table\"\n        >\n          <ng-container\n            *ngTemplateOutlet=\"\n              newElementExtandble;\n              context: { $implicit: element }\n            \"\n          >\n          </ng-container>\n        </div>\n      </mat-cell>\n    </ng-container>\n\n    <mat-row\n      *matRowDef=\"let row; columns: ['extensibleData']\"\n      class=\"example-detail-row gap-1 header-border-left\"\n    ></mat-row>\n  </ng-container>\n</mat-table>\n<div class=\"new\" *ngIf=\"addedNewEntry\" (click)=\"addNewEntry()\">\n  <mat-icon\n    [svgIcon]=\"'fa_solid:circle-plus'\"\n    class=\"new-entry\"\n  ></mat-icon>\n  <div>\n    <p>Added new Entry</p>\n  </div>\n\n</div>\n<mat-paginator\n  [class]=\"paginationClass\"\n  *ngIf=\"showPagination\"\n  (page)=\"changePage($event)\"\n  [length]=\"lenghtPagination\"\n  [pageSizeOptions]=\"[10, 20, 50]\"\n  showFirstLastButtons\n  aria-label=\"Select page of periodic elements\"\n>\n</mat-paginator>\n", styles: ["elix-table{transition:all .5s ease-in}elix-table mat-table{color:transparent;border-collapse:collapse;border-radius:.5rem;overflow:hidden;box-shadow:#00000026 0 15px 25px,#0000000d 0 5px 10px}elix-table .header-border-left{border-left:1px solid}elix-table mat-header-row mat-header-cell{justify-content:flex-start;border-spacing:2rem}elix-table mat-row{box-shadow:#0366d64d 0 0 0 3px;transition:all ease-in-out .1s;min-height:32px;border:.2px solid;position:relative;height:max-content}elix-table mat-row textarea{outline:none}elix-table mat-row:hover{background:rgba(1,1,222,.1)}elix-table mat-row mat-cell{justify-content:flex-start;position:relative;min-height:1rem;color:#000}elix-table mat-row mat-cell mat-form-field div{padding:0!important;border:0!important}elix-table mat-row mat-cell mat-form-field div input{border:1px solid;box-shadow:inset 0 0 3px 1px #00f3}elix-table mat-row mat-cell textarea{background:inherit;height:1.95rem}elix-table mat-row mat-cell textarea:focus-visible{outline:none;border:1px solid var(--primary-color-input)}elix-table mat-row mat-cell button{padding:0!important;min-width:auto!important}elix-table mat-header-row{min-height:1.5rem}elix-table mat-header-row mat-header-cell{min-height:inherit}elix-table mat-header-cell{color:#fff!important}elix-table .header-color{background:#2d333b;z-index:99!important}elix-table .mat-form-field-infix{width:auto}elix-table .example-detail-row{min-height:0!important}elix-table .example-detail-row mat-cell{min-height:inherit}elix-table .example-detail-row mat-cell .mat-form-field-infix{width:auto!important}.cdk-drop-list-dragging .cdk-drag{transition:transform .35s cubic-bezier(0,0,.2,1)}.cdk-drag-preview{z-index:200;background-color:#fff;border:1px solid #5f7651;box-shadow:#32325d40 0 6px 12px -2px,#0000004d 0 3px 7px -3px}.cdk-drag-animating{transition:transform .35s cubic-bezier(0,0,.2,1)}.new{display:flex;align-items:center;padding:1rem 0 1rem .5rem}.new-entry{color:#52796f!important;padding-right:.5rem}\n"] }]
        }], ctorParameters: function () { return [{ type: TableService }, { type: ColumnRotateService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { dataSource: [{
                type: Input
            }], extensible: [{
                type: Input
            }], extandble$: [{
                type: Input
            }], footerShow: [{
                type: Input
            }], footerMessageClass: [{
                type: Input
            }], newElementExtandble: [{
                type: Input
            }], showPagination: [{
                type: Input
            }], lenghtPagination: [{
                type: Input
            }], paginationClass: [{
                type: Input
            }], addedNewEntry: [{
                type: Input
            }], onAddEntry: [{
                type: Output
            }], onPaginationChange: [{
                type: Output
            }], filterTooltip: [{
                type: Input
            }], table: [{
                type: ViewChild,
                args: [MatTable, { static: true }]
            }], paginator: [{
                type: ViewChild,
                args: [MatPaginator]
            }], columnDefs: [{
                type: ContentChildren,
                args: [BaseColumn]
            }] } });

class ActionComponent {
    constructor() { }
    ngOnInit() {
    }
}
ActionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ActionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ActionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.3.0", type: ActionComponent, selector: "lib-action", ngImport: i0, template: "<p>action works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.3.0", ngImport: i0, type: ActionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-action', template: "<p>action works!</p>\n" }]
        }], ctorParameters: function () { return []; } });

class TableMaterialModule {
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

/*
 * Public API Surface of ngx-liburg
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BaseColumn, ColumnAreaTextComponent, ColumnIconActionComponent, ColumnNumberComponent, ColumnSelectComponent, ColumnTextComponent, ColumnTwoCasesComponent, ElixTooltipService, TableComponent, TableMaterialModule, TooltipComponent, configOverlay };
//# sourceMappingURL=ngx-liburg.mjs.map
