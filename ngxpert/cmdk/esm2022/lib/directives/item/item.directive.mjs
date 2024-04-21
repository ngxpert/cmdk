import { __decorate } from "tslib";
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, inject, Input, Output, } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { CmdkService } from '../../cmdk.service';
import * as i0 from "@angular/core";
let cmdkItemId = 0;
let ItemDirective = class ItemDirective {
    constructor() {
        this._disabled = false;
        this.selected = new EventEmitter();
        this.originalDisplay = '';
        this.filtered = true;
        this._active = false;
        this._value = '';
        this._cmdkService = inject(CmdkService);
        this.itemId = `cmdk-item-${cmdkItemId++}`;
        this._elementRef = inject((ElementRef));
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get disabled() {
        return this._disabled;
    }
    getLabel() {
        throw new Error('Method not implemented.');
    }
    setActiveStyles() {
        this.active = true;
    }
    setInactiveStyles() {
        this.active = false;
    }
    set value(value) {
        if (value !== this.value) {
            this._cmdkService.itemValueChanged(this.value, value);
            this._value = value;
        }
    }
    get value() {
        return this._value
            ? this._value
            : this._elementRef.nativeElement.textContent.trim().toLowerCase();
    }
    onClick() {
        this.selected.emit();
    }
    onKeyUp(ev) {
        if (ev?.key === 'Enter') {
            this.selected.emit();
        }
    }
    get hidden() {
        return !this.filtered;
    }
    get display() {
        return this.filtered ? this.originalDisplay : 'none';
    }
    get dataValue() {
        return this.value;
    }
    get attrRole() {
        return 'option';
    }
    get buttonType() {
        return 'button';
    }
    get isSelected() {
        return this._active;
    }
    get active() {
        return this._active;
    }
    get itemDisabled() {
        return this.disabled;
    }
    get itemFiltered() {
        return this.filtered;
    }
    set active(value) {
        this._active = value;
    }
    onMouseUp() {
        this._cmdkService.itemClicked(this.value);
    }
    ngAfterContentInit() {
        this.originalDisplay = window.getComputedStyle(this._elementRef.nativeElement).display;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: ItemDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.5", type: ItemDirective, isStandalone: true, selector: "[cmdkItem]", inputs: { disabled: "disabled", filtered: "filtered", value: "value" }, outputs: { selected: "selected" }, host: { listeners: { "click": "onClick()", "keydown": "onKeyUp(event)", "mouseup": "onMouseUp()" }, properties: { "attr.cmdk-hidden": "this.hidden", "style.display": "this.display", "attr.data-value": "this.dataValue", "attr.role": "this.attrRole", "type": "this.buttonType", "attr.aria-selected": "this.isSelected", "class.cmdk-item-active": "this.active", "class.cmdk-item-disabled": "this.itemDisabled", "class.cmdk-item-filtered": "this.itemFiltered" }, classAttribute: "cmdk-item" }, ngImport: i0 }); }
};
ItemDirective = __decorate([
    UntilDestroy()
], ItemDirective);
export { ItemDirective };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: ItemDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cmdkItem]',
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        class: 'cmdk-item',
                    },
                    standalone: true,
                }]
        }], propDecorators: { disabled: [{
                type: Input
            }], selected: [{
                type: Output
            }], filtered: [{
                type: Input
            }], value: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click']
            }], onKeyUp: [{
                type: HostListener,
                args: ['keydown', ['event']]
            }], hidden: [{
                type: HostBinding,
                args: ['attr.cmdk-hidden']
            }], display: [{
                type: HostBinding,
                args: ['style.display']
            }], dataValue: [{
                type: HostBinding,
                args: ['attr.data-value']
            }], attrRole: [{
                type: HostBinding,
                args: ['attr.role']
            }], buttonType: [{
                type: HostBinding,
                args: ['type']
            }], isSelected: [{
                type: HostBinding,
                args: ['attr.aria-selected']
            }], active: [{
                type: HostBinding,
                args: ['class.cmdk-item-active']
            }], itemDisabled: [{
                type: HostBinding,
                args: ['class.cmdk-item-disabled']
            }], itemFiltered: [{
                type: HostBinding,
                args: ['class.cmdk-item-filtered']
            }], onMouseUp: [{
                type: HostListener,
                args: ['mouseup']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3hwZXJ0L2NtZGsvc3JjL2xpYi9kaXJlY3RpdmVzL2l0ZW0vaXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBR2pELElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztBQVdaLElBQU0sYUFBYSxHQUFuQixNQUFNLGFBQWE7SUFBbkI7UUFHRyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBUWhCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hDLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBVVosYUFBUSxHQUFHLElBQUksQ0FBQztRQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFjcEIsaUJBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFbEMsV0FBTSxHQUFHLGFBQWEsVUFBVSxFQUFFLEVBQUUsQ0FBQztRQUM5QyxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFVBQTZCLENBQUEsQ0FBQyxDQUFDO0tBeUVyRDtJQTlHQyxJQUNJLFFBQVEsQ0FBQyxLQUFVO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBR0QsUUFBUTtRQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0QsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBSUQsSUFDSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBQ0QsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTTtZQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDYixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RFLENBQUM7SUFRRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBR0QsT0FBTyxDQUFDLEVBQWlCO1FBQ3ZCLElBQUksRUFBRSxFQUFFLEdBQUcsS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBRUQsSUFDSSxNQUFNO1FBQ1IsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQ0ksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxJQUNJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQ0ksUUFBUTtRQUNWLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUNJLFVBQVU7UUFDWixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUNJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQ0ksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsSUFDSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFjO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFHRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUMvQixDQUFDLE9BQU8sQ0FBQztJQUNaLENBQUM7OEdBakhVLGFBQWE7a0dBQWIsYUFBYTs7QUFBYixhQUFhO0lBVHpCLFlBQVksRUFBRTtHQVNGLGFBQWEsQ0FrSHpCOzsyRkFsSFksYUFBYTtrQkFSekIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIscUVBQXFFO29CQUNyRSxJQUFJLEVBQUU7d0JBQ0YsS0FBSyxFQUFFLFdBQVc7cUJBQ3JCO29CQUNELFVBQVUsRUFBRSxJQUFJO2lCQUNuQjs4QkFNSyxRQUFRO3NCQURYLEtBQUs7Z0JBT0ksUUFBUTtzQkFBakIsTUFBTTtnQkFXRSxRQUFRO3NCQUFoQixLQUFLO2dCQUlGLEtBQUs7c0JBRFIsS0FBSztnQkFtQk4sT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU87Z0JBTXJCLE9BQU87c0JBRE4sWUFBWTt1QkFBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBUTlCLE1BQU07c0JBRFQsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBTTNCLE9BQU87c0JBRFYsV0FBVzt1QkFBQyxlQUFlO2dCQU14QixTQUFTO3NCQURaLFdBQVc7dUJBQUMsaUJBQWlCO2dCQU0xQixRQUFRO3NCQURYLFdBQVc7dUJBQUMsV0FBVztnQkFNcEIsVUFBVTtzQkFEYixXQUFXO3VCQUFDLE1BQU07Z0JBTWYsVUFBVTtzQkFEYixXQUFXO3VCQUFDLG9CQUFvQjtnQkFNN0IsTUFBTTtzQkFEVCxXQUFXO3VCQUFDLHdCQUF3QjtnQkFNakMsWUFBWTtzQkFEZixXQUFXO3VCQUFDLDBCQUEwQjtnQkFNbkMsWUFBWTtzQkFEZixXQUFXO3VCQUFDLDBCQUEwQjtnQkFVdkMsU0FBUztzQkFEUixZQUFZO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0S2V5TWFuYWdlck9wdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgaW5qZWN0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVudGlsRGVzdHJveSB9IGZyb20gJ0BuZ25lYXQvdW50aWwtZGVzdHJveSc7XG5pbXBvcnQgeyBDbWRrU2VydmljZSB9IGZyb20gJy4uLy4uL2NtZGsuc2VydmljZSc7XG5pbXBvcnQgeyBDbWRrSXRlbVByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5sZXQgY21ka0l0ZW1JZCA9IDA7XG5cbkBVbnRpbERlc3Ryb3koKVxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbY21ka0l0ZW1dJyxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAnY21kay1pdGVtJyxcbiAgICB9LFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EaXJlY3RpdmVcbiAgaW1wbGVtZW50cyBDbWRrSXRlbVByb3BzLCBMaXN0S2V5TWFuYWdlck9wdGlvbiwgQWZ0ZXJDb250ZW50SW5pdFxue1xuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgfVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG4gIEBPdXRwdXQoKSBzZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgb3JpZ2luYWxEaXNwbGF5ID0gJyc7XG4gIGdldExhYmVsPygpOiBzdHJpbmcge1xuICAgIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgfVxuICBzZXRBY3RpdmVTdHlsZXMoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG4gIHNldEluYWN0aXZlU3R5bGVzKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cbiAgQElucHV0KCkgZmlsdGVyZWQgPSB0cnVlO1xuICBwcml2YXRlIF9hY3RpdmUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdmFsdWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKVxuICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5fY21ka1NlcnZpY2UuaXRlbVZhbHVlQ2hhbmdlZCh0aGlzLnZhbHVlLCB2YWx1ZSk7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlXG4gICAgICA/IHRoaXMuX3ZhbHVlXG4gICAgICA6IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NtZGtTZXJ2aWNlID0gaW5qZWN0KENtZGtTZXJ2aWNlKTtcblxuICByZWFkb25seSBpdGVtSWQgPSBgY21kay1pdGVtLSR7Y21ka0l0ZW1JZCsrfWA7XG4gIF9lbGVtZW50UmVmID0gaW5qZWN0KEVsZW1lbnRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQ+KTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWydldmVudCddKVxuICBvbktleVVwKGV2OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGV2Py5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5jbWRrLWhpZGRlbicpXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuICF0aGlzLmZpbHRlcmVkO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcbiAgZ2V0IGRpc3BsYXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyZWQgPyB0aGlzLm9yaWdpbmFsRGlzcGxheSA6ICdub25lJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5kYXRhLXZhbHVlJylcbiAgZ2V0IGRhdGFWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJylcbiAgZ2V0IGF0dHJSb2xlKCkge1xuICAgIHJldHVybiAnb3B0aW9uJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygndHlwZScpXG4gIGdldCBidXR0b25UeXBlKCkge1xuICAgIHJldHVybiAnYnV0dG9uJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXNlbGVjdGVkJylcbiAgZ2V0IGlzU2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY21kay1pdGVtLWFjdGl2ZScpXG4gIGdldCBhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY21kay1pdGVtLWRpc2FibGVkJylcbiAgZ2V0IGl0ZW1EaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY21kay1pdGVtLWZpbHRlcmVkJylcbiAgZ2V0IGl0ZW1GaWx0ZXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZDtcbiAgfVxuXG4gIHNldCBhY3RpdmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hY3RpdmUgPSB2YWx1ZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnKVxuICBvbk1vdXNlVXAoKSB7XG4gICAgdGhpcy5fY21ka1NlcnZpY2UuaXRlbUNsaWNrZWQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5vcmlnaW5hbERpc3BsYXkgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShcbiAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxuICAgICkuZGlzcGxheTtcbiAgfVxufVxuIl19