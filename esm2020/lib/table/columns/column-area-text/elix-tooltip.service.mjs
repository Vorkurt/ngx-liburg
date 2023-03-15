import { Injectable, } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
export const configOverlay = {
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
export class ElixTooltipService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxpeC10b29sdGlwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGlidXJnL3NyYy9saWIvdGFibGUvY29sdW1ucy9jb2x1bW4tYXJlYS10ZXh0L2VsaXgtdG9vbHRpcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxVQUFVLEdBS1gsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFHckQsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHO0lBQzNCLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLFFBQVE7S0FDRTtJQUN0QixLQUFLLEVBQUU7UUFDTCxPQUFPLEVBQUUsT0FBTztRQUNoQixPQUFPLEVBQUUsUUFBUTtRQUNqQixRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUUsUUFBUTtLQUNFO0lBQ3RCLEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxPQUFPO1FBQ2hCLE9BQU8sRUFBRSxRQUFRO1FBQ2pCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxLQUFLO0tBQ0s7SUFDdEIsTUFBTSxFQUFFO1FBQ04sT0FBTyxFQUFFLFFBQVE7UUFDakIsT0FBTyxFQUFFLEtBQUs7UUFDZCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtLQUNFO0NBQ3ZCLENBQUM7QUFLRixNQUFNLE9BQU8sa0JBQWtCO0lBRzdCLFlBQ1UsUUFBaUIsRUFDakIsZ0JBQWtDO1FBRGxDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUUxQyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDLGNBQWMsQ0FB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QixDQUFDO2dCQUN2QyxLQUFLLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztnQkFDekMsTUFBTTtTQUNUO1FBQ0QsVUFBVSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7K0dBOUVVLGtCQUFrQjttSEFBbEIsa0JBQWtCLGNBRmpCLE1BQU07MkZBRVAsa0JBQWtCO2tCQUg5QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIFJlbmRlcmVyMixcbiAgUmVuZGVyZXJGYWN0b3J5MixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBPdmVybGF5LFxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29ubmVjdGVkUG9zaXRpb24gfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmV4cG9ydCBjb25zdCBjb25maWdPdmVybGF5ID0ge1xuICBMRUZUOiB7XG4gICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICBvcmlnaW5ZOiAnY2VudGVyJyxcbiAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgb3ZlcmxheVk6ICdjZW50ZXInLFxuICB9IGFzIENvbm5lY3RlZFBvc2l0aW9uLFxuICBSSUdIVDoge1xuICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgb3JpZ2luWTogJ2NlbnRlcicsXG4gICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgb3ZlcmxheVk6ICdjZW50ZXInLFxuICB9IGFzIENvbm5lY3RlZFBvc2l0aW9uLFxuICBUT1A6IHtcbiAgICBvcmlnaW5YOiAnc3RhcnQnLFxuICAgIG9yaWdpblk6ICdjZW50ZXInLFxuICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgfSBhcyBDb25uZWN0ZWRQb3NpdGlvbixcbiAgQk9UVE9NOiB7XG4gICAgb3JpZ2luWDogJ2NlbnRlcicsXG4gICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgb3ZlcmxheVg6ICdjZW50ZXInLFxuICAgIG92ZXJsYXlZOiAnYm90dG9tJyxcbiAgfSBhcyBDb25uZWN0ZWRQb3NpdGlvbixcbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBFbGl4VG9vbHRpcFNlcnZpY2Uge1xuICBwcml2YXRlIF9yZW5kZXJlZDI6IFJlbmRlcmVyMjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgX3JlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MlxuICApIHtcbiAgICB0aGlzLl9yZW5kZXJlZDIgPSBfcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG5cbiAgaW5pdFRvb2x0aXAoXG4gICAgdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4sXG4gICAgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBvcmlnaW4/OiBIVE1MRWxlbWVudCB8IGFueSxcbiAgICB3aWR0aD86IG51bWJlclxuICApIHtcbiAgICBjb25zdCBwb3J0YWxIb3N0ID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRlbXBsYXRlUmVmLCB2aWV3Q29udGFpbmVyUmVmKTtcblxuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLl9vdmVybGF5XG4gICAgICAgIC5wb3NpdGlvbigpXG4gICAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKG9yaWdpbilcbiAgICAgICAgLndpdGhQb3NpdGlvbnMoW1xuICAgICAgICAgIGNvbmZpZ092ZXJsYXkuQk9UVE9NLFxuICAgICAgICAgIGNvbmZpZ092ZXJsYXkuVE9QLFxuICAgICAgICAgIGNvbmZpZ092ZXJsYXkuTEVGVCxcbiAgICAgICAgICBjb25maWdPdmVybGF5LlJJR0hULFxuICAgICAgICBdKSxcbiAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxuICAgICAgYmFja2Ryb3BDbGFzczogJ2Nkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcbiAgICAgIHBhbmVsQ2xhc3M6ICd2b3JrdXJ0LXRvb2x0aXAnLFxuICAgICAgd2lkdGg6IHdpZHRoLFxuICAgIH0pO1xuICAgIHRoaXMuX2dldENvbmZpZ0F0QXJyb3cob3ZlcmxheVJlZik7XG4gICAgb3ZlcmxheVJlZi5hdHRhY2gocG9ydGFsSG9zdCk7XG4gICAgb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2Uob3ZlcmxheVJlZikpO1xuICAgIHJldHVybiBvdmVybGF5UmVmO1xuICB9XG5cbiAgY2xvc2Uob3ZlcmxheVJlZj86IGFueSkge1xuICAgIG92ZXJsYXlSZWYuZGV0YWNoKCk7XG4gICAgb3ZlcmxheVJlZi5kaXNwb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRDb25maWdBdEFycm93KG92ZXJsYXlSZWY6IGFueSkge1xuICAgIGNvbnN0IHRvb2x0aXBQb3NpdGlvbiA9IChcbiAgICAgIG92ZXJsYXlSZWYuZ2V0Q29uZmlnKClcbiAgICAgICAgLnBvc2l0aW9uU3RyYXRlZ3kgYXMgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5XG4gICAgKS5wb3NpdGlvbnNbMF07XG4gICAgY29uc3QgYXJyb3c6IEhUTUxTcGFuRWxlbWVudCA9IHRoaXMuX3JlbmRlcmVkMi5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgYXJyb3cuY2xhc3NMaXN0LmFkZCgnZWxpeF9fYXJyb3cnKTtcbiAgICBjb25zdCB0b29sdGlwSGVpZ2h0ID0gPG51bWJlcj5vdmVybGF5UmVmLmdldENvbmZpZygpLmhlaWdodDtcbiAgICBjb25zdCB0b29sdGlwV2lkdGggPSBvdmVybGF5UmVmLmdldENvbmZpZygpLndpZHRoO1xuICAgIHN3aXRjaCAodG9vbHRpcFBvc2l0aW9uKSB7XG4gICAgICBjYXNlIGNvbmZpZ092ZXJsYXkuTEVGVDpcbiAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZCgnZWxpeF9fYXJyb3ctcmlnaHQnKTtcbiAgICAgICAgYXJyb3cuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgyMzBkZWcpJztcbiAgICAgICAgYXJyb3cuc3R5bGUudG9wID0gJ2NhbGMoNTAlICsgLTYuNXB4KSc7XG4gICAgICAgIGFycm93LnN0eWxlLmxlZnQgPSAnY2FsYygxMDAlKSc7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGNvbmZpZ092ZXJsYXkuUklHSFQ6XG4gICAgICAgIGFycm93LmNsYXNzTGlzdC5hZGQoJ2VsaXhfX2Fycm93LWxlZnQnKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgY29uZmlnT3ZlcmxheS5UT1A6XG4gICAgICAgIGFycm93LmNsYXNzTGlzdC5hZGQoJ2VsaXhfX2Fycm93LWJvdHRvbScpO1xuICAgICAgICBhcnJvdy5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDEzNWRlZyknO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBjb25maWdPdmVybGF5LkJPVFRPTTpcbiAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZCgnZWxpeF9fYXJyb3ctdG9wJyk7XG4gICAgICAgIGFycm93LnN0eWxlLmxlZnQgPSAnNTAlJztcbiAgICAgICAgYXJyb3cuc3R5bGUudG9wID0gJ2NhbGMoMTAwJSArIC0xNXB4KSc7XG4gICAgICAgIGFycm93LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMzE1ZGVnKSc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBvdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LmFwcGVuZENoaWxkKGFycm93KTtcbiAgfVxufVxuIl19