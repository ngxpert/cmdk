import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, HostBinding, inject, Input, ViewChild, } from '@angular/core';
import { ItemDirective } from '../../directives/item/item.directive';
import * as i0 from "@angular/core";
let cmdkListId = 0;
export class ListComponent {
    constructor() {
        this._active = false;
        this._elementRef = inject((ElementRef));
        this.listId = `cmdk-list-${cmdkListId++}`;
        this._cdr = inject(ChangeDetectorRef);
    }
    get filteredItems() {
        return this.items?.filter((item) => item.filtered);
    }
    get active() {
        return this._active;
    }
    set active(value) {
        this._active = value;
        this._cdr.markForCheck();
    }
    get filtered() {
        return this.filteredItems.length > 0;
    }
    get id() {
        return this.listId;
    }
    get activeClass() {
        return this.active;
    }
    ngAfterViewInit() {
        if (this.heightEle.nativeElement && this._elementRef.nativeElement) {
            const el = this.heightEle.nativeElement;
            const wrapper = this._elementRef.nativeElement;
            this._observer = new ResizeObserver(() => {
                this._animationFrame = requestAnimationFrame(() => {
                    const height = el.getBoundingClientRect().height;
                    wrapper.style.setProperty(`--cmdk-list-height`, height.toFixed(1) + 'px');
                    this._cdr.markForCheck();
                });
            });
            this._observer.observe(el);
        }
    }
    ngOnDestroy() {
        if (this._animationFrame !== undefined) {
            cancelAnimationFrame(this._animationFrame);
        }
        if (this._observer && this.heightEle.nativeElement) {
            this._observer.unobserve(this.heightEle.nativeElement);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: ListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.5", type: ListComponent, isStandalone: true, selector: "cmdk-list", inputs: { ariaLabel: "ariaLabel" }, host: { properties: { "id": "this.id", "class.cmdk-list-active": "this.activeClass" }, classAttribute: "cmdk-list" }, queries: [{ propertyName: "items", predicate: ItemDirective, descendants: true }], viewQueries: [{ propertyName: "heightEle", first: true, predicate: ["height"], descendants: true }], ngImport: i0, template: "<div class=\"cmdk-list-content\" role=\"listbox\" [attr.aria-label]=\"ariaLabel\" #height>\n  <ng-content></ng-content>\n</div>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: ListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cmdk-list', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'cmdk-list',
                    }, standalone: true, template: "<div class=\"cmdk-list-content\" role=\"listbox\" [attr.aria-label]=\"ariaLabel\" #height>\n  <ng-content></ng-content>\n</div>\n" }]
        }], propDecorators: { ariaLabel: [{
                type: Input
            }], items: [{
                type: ContentChildren,
                args: [ItemDirective, { descendants: true }]
            }], heightEle: [{
                type: ViewChild,
                args: ['height']
            }], id: [{
                type: HostBinding,
                args: ['id']
            }], activeClass: [{
                type: HostBinding,
                args: ['class.cmdk-list-active']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3hwZXJ0L2NtZGsvc3JjL2xpYi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3hwZXJ0L2NtZGsvc3JjL2xpYi9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixXQUFXLEVBQ1gsTUFBTSxFQUNOLEtBQUssRUFHTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztBQUdyRSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFZbkIsTUFBTSxPQUFPLGFBQWE7SUFWMUI7UUFrQlUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixnQkFBVyxHQUFHLE1BQU0sQ0FBa0IsQ0FBQSxVQUFlLENBQUEsQ0FBQyxDQUFDO1FBRXRELFdBQU0sR0FBRyxhQUFhLFVBQVUsRUFBRSxFQUFFLENBQUM7UUFDOUMsU0FBSSxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBd0RsQztJQXJEQyxJQUFJLGFBQWE7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBQ0QsSUFBSSxNQUFNLENBQUMsS0FBYztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsSUFDSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbkUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7WUFDeEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFFL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcscUJBQXFCLENBQUMsR0FBRyxFQUFFO29CQUNoRCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUM7b0JBQ2pELE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUN2QixvQkFBb0IsRUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQ3pCLENBQUM7b0JBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLENBQUM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLEVBQUUsQ0FBQztZQUN2QyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsQ0FBQztJQUNILENBQUM7OEdBbkVVLGFBQWE7a0dBQWIsYUFBYSxxUEFHUCxhQUFhLHFKQ2hDaEMsbUlBR0E7OzJGRDBCYSxhQUFhO2tCQVZ6QixTQUFTOytCQUNJLFdBQVcsbUJBRUosdUJBQXVCLENBQUMsTUFBTSxRQUV6Qzt3QkFDRixLQUFLLEVBQUUsV0FBVztxQkFDckIsY0FDVyxJQUFJOzhCQUdULFNBQVM7c0JBQWpCLEtBQUs7Z0JBR04sS0FBSztzQkFESixlQUFlO3VCQUFDLGFBQWEsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7Z0JBR2hDLFNBQVM7c0JBQTdCLFNBQVM7dUJBQUMsUUFBUTtnQkEwQmYsRUFBRTtzQkFETCxXQUFXO3VCQUFDLElBQUk7Z0JBTWIsV0FBVztzQkFEZCxXQUFXO3VCQUFDLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBpbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2l0ZW0vaXRlbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ21ka0xpc3RQcm9wcyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxubGV0IGNtZGtMaXN0SWQgPSAwO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NtZGstbGlzdCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xpc3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdjbWRrLWxpc3QnLFxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgQ21ka0xpc3RQcm9wcyB7XG4gIEBJbnB1dCgpIGFyaWFMYWJlbD86IHN0cmluZztcblxuICBAQ29udGVudENoaWxkcmVuKEl0ZW1EaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IHRydWUgfSlcbiAgaXRlbXMhOiBRdWVyeUxpc3Q8SXRlbURpcmVjdGl2ZT47XG5cbiAgQFZpZXdDaGlsZCgnaGVpZ2h0JykgaGVpZ2h0RWxlITogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG5cbiAgcHJpdmF0ZSBfYWN0aXZlID0gZmFsc2U7XG4gIHByaXZhdGUgX2VsZW1lbnRSZWYgPSBpbmplY3Q8RWxlbWVudFJlZjxhbnk+PihFbGVtZW50UmVmPGFueT4pO1xuICBwcml2YXRlIF9hbmltYXRpb25GcmFtZTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICByZWFkb25seSBsaXN0SWQgPSBgY21kay1saXN0LSR7Y21ka0xpc3RJZCsrfWA7XG4gIF9jZHIgPSBpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuICBwcml2YXRlIF9vYnNlcnZlcjogUmVzaXplT2JzZXJ2ZXIgfCB1bmRlZmluZWQ7XG5cbiAgZ2V0IGZpbHRlcmVkSXRlbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXM/LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5maWx0ZXJlZCk7XG4gIH1cblxuICBnZXQgYWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cbiAgc2V0IGFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FjdGl2ZSA9IHZhbHVlO1xuICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldCBmaWx0ZXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJlZEl0ZW1zLmxlbmd0aCA+IDA7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2lkJylcbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmxpc3RJZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY21kay1saXN0LWFjdGl2ZScpXG4gIGdldCBhY3RpdmVDbGFzcygpIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmU7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuaGVpZ2h0RWxlLm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICBjb25zdCBlbCA9IHRoaXMuaGVpZ2h0RWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICBjb25zdCB3cmFwcGVyID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gICAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIHRoaXMuX2FuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBoZWlnaHQgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgICAgd3JhcHBlci5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgICAgIGAtLWNtZGstbGlzdC1oZWlnaHRgLFxuICAgICAgICAgICAgaGVpZ2h0LnRvRml4ZWQoMSkgKyAncHgnXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKGVsKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fYW5pbWF0aW9uRnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5fYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIgJiYgdGhpcy5oZWlnaHRFbGUubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5fb2JzZXJ2ZXIudW5vYnNlcnZlKHRoaXMuaGVpZ2h0RWxlLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImNtZGstbGlzdC1jb250ZW50XCIgcm9sZT1cImxpc3Rib3hcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiICNoZWlnaHQ+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuIl19