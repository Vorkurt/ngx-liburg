import { BaseColumn } from '../../base-column';
import { ColumnRotateService } from "../service/column-rotate.service";
import * as i0 from "@angular/core";
export declare class ColumnIconActionComponent extends BaseColumn {
    private readonly _columnRotate;
    iconAction: boolean;
    constructor(_columnRotate: ColumnRotateService);
    scrollColumn(left: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ColumnIconActionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ColumnIconActionComponent, "elix-column-icon-action", never, { "iconAction": "iconAction"; }, {}, never, never, false>;
}
