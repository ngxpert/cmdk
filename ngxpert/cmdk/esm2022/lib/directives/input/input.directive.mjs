import { Directive, ElementRef, inject, Input, } from '@angular/core';
import { CmdkService } from '../../cmdk.service';
import * as i0 from "@angular/core";
export class InputDirective {
    constructor() {
        this.updateOn = 'input';
        this._cmdkService = inject(CmdkService);
        this._elementRef = inject((ElementRef));
    }
    set value(value) {
        this.search(value);
    }
    search(value) {
        this._cmdkService.setSearch(value);
    }
    ngAfterViewInit() {
        this._elementRef.nativeElement.addEventListener(this.updateOn, (ev) => this.search(ev.target.value));
    }
    ngOnDestroy() {
        this._elementRef.nativeElement.removeAllListeners &&
            this._elementRef.nativeElement.removeAllListeners(this.updateOn);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: InputDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.5", type: InputDirective, isStandalone: true, selector: "input[cmdkInput]", inputs: { updateOn: "updateOn", value: "value" }, host: { classAttribute: "cmdk-input" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: InputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[cmdkInput]',
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        class: 'cmdk-input',
                    },
                    standalone: true,
                }]
        }], propDecorators: { updateOn: [{
                type: Input
            }], value: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4cGVydC9jbWRrL3NyYy9saWIvZGlyZWN0aXZlcy9pbnB1dC9pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBV2pELE1BQU0sT0FBTyxjQUFjO0lBUjNCO1FBV1csYUFBUSxHQUFnQyxPQUFPLENBQUM7UUFLakQsaUJBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkMsZ0JBQVcsR0FBRyxNQUFNLENBQWtCLENBQUEsVUFBNEIsQ0FBQSxDQUFDLENBQUM7S0FpQjdFO0lBdEJDLElBQ0ksS0FBSyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBSUQsTUFBTSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FDN0MsSUFBSSxDQUFDLFFBQVEsRUFDYixDQUFDLEVBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUMsTUFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FDbEUsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsa0JBQWtCO1lBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRSxDQUFDOzhHQXpCVSxjQUFjO2tHQUFkLGNBQWM7OzJGQUFkLGNBQWM7a0JBUjFCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIscUVBQXFFO29CQUNyRSxJQUFJLEVBQUU7d0JBQ0YsS0FBSyxFQUFFLFlBQVk7cUJBQ3RCO29CQUNELFVBQVUsRUFBRSxJQUFJO2lCQUNuQjs4QkFJVSxRQUFRO3NCQUFoQixLQUFLO2dCQUVGLEtBQUs7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgaW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtZGtTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY21kay5zZXJ2aWNlJztcbmltcG9ydCB7IENtZGtJbnB1dFByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2lucHV0W2NtZGtJbnB1dF0nLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdjbWRrLWlucHV0JyxcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIElucHV0RGlyZWN0aXZlXG4gIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBDbWRrSW5wdXRQcm9wc1xue1xuICBASW5wdXQoKSB1cGRhdGVPbjogJ2JsdXInIHwgJ2NoYW5nZScgfCAnaW5wdXQnID0gJ2lucHV0JztcbiAgQElucHV0KClcbiAgc2V0IHZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlYXJjaCh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBfY21ka1NlcnZpY2UgPSBpbmplY3QoQ21ka1NlcnZpY2UpO1xuICBwcml2YXRlIF9lbGVtZW50UmVmID0gaW5qZWN0PEVsZW1lbnRSZWY8YW55Pj4oRWxlbWVudFJlZjxIVE1MSW5wdXRFbGVtZW50Pik7XG5cbiAgc2VhcmNoKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9jbWRrU2VydmljZS5zZXRTZWFyY2godmFsdWUpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgdGhpcy51cGRhdGVPbixcbiAgICAgIChldjogRXZlbnQpID0+IHRoaXMuc2VhcmNoKChldi50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5yZW1vdmVBbGxMaXN0ZW5lcnMgJiZcbiAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5yZW1vdmVBbGxMaXN0ZW5lcnModGhpcy51cGRhdGVPbik7XG4gIH1cbn1cbiJdfQ==