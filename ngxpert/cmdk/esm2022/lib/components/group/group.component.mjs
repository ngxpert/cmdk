import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, HostBinding, inject, Input, } from '@angular/core';
import { DynamicViewDirective } from '@ngneat/overview';
import { ItemDirective } from '../../directives/item/item.directive';
import * as i0 from "@angular/core";
let cmdkGroupId = 0;
export class GroupComponent {
    constructor() {
        this.showGroup = true;
        this._active = false;
        this.groupId = `cmdk-group-${cmdkGroupId++}`;
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
        return this.groupId;
    }
    get activeClass() {
        return this.active;
    }
    get hidden() {
        return !this.showGroup;
    }
    get dataValue() {
        return this.label?.toString().toLowerCase();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: GroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.3.5", type: GroupComponent, isStandalone: true, selector: "cmdk-group", inputs: { label: "label", ariaLabel: "ariaLabel" }, host: { properties: { "id": "this.id", "class.cmdk-group-active": "this.activeClass", "attr.cmdk-hidden": "this.hidden", "attr.data-value": "this.dataValue" }, classAttribute: "cmdk-group" }, queries: [{ propertyName: "items", predicate: ItemDirective, descendants: true }], ngImport: i0, template: "@if (label) {\n  <div role=\"presentation\" class=\"cmdk-group-label\">\n    <ng-container *dynamicView=\"label\"></ng-container>\n  </div>\n}\n<div class=\"cmdk-group-content\" role=\"group\" [attr.aria-label]=\"ariaLabel\">\n  <ng-content></ng-content>\n</div>\n", styles: [":host[cmdk-hidden=true]{display:none}\n"], dependencies: [{ kind: "directive", type: DynamicViewDirective, selector: "[dynamicView]", inputs: ["dynamicView", "dynamicViewInjector", "dynamicViewContext", "dynamicViewInputs"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: GroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cmdk-group', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'cmdk-group',
                    }, standalone: true, imports: [DynamicViewDirective], template: "@if (label) {\n  <div role=\"presentation\" class=\"cmdk-group-label\">\n    <ng-container *dynamicView=\"label\"></ng-container>\n  </div>\n}\n<div class=\"cmdk-group-content\" role=\"group\" [attr.aria-label]=\"ariaLabel\">\n  <ng-content></ng-content>\n</div>\n", styles: [":host[cmdk-hidden=true]{display:none}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], items: [{
                type: ContentChildren,
                args: [ItemDirective, { descendants: true }]
            }], id: [{
                type: HostBinding,
                args: ['id']
            }], activeClass: [{
                type: HostBinding,
                args: ['class.cmdk-group-active']
            }], hidden: [{
                type: HostBinding,
                args: ['attr.cmdk-hidden']
            }], dataValue: [{
                type: HostBinding,
                args: ['attr.data-value']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4cGVydC9jbWRrL3NyYy9saWIvY29tcG9uZW50cy9ncm91cC9ncm91cC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3hwZXJ0L2NtZGsvc3JjL2xpYi9jb21wb25lbnRzL2dyb3VwL2dyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsV0FBVyxFQUNYLE1BQU0sRUFDTixLQUFLLEdBRU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFXLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztBQUlyRSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFjcEIsTUFBTSxPQUFPLGNBQWM7SUFaM0I7UUFtQkUsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNULFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsY0FBYyxXQUFXLEVBQUUsRUFBRSxDQUFDO1FBQ2pELFNBQUksR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQXFDbEM7SUFuQ0MsSUFBSSxhQUFhO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELElBQ0ksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUNJLE1BQU07UUFDUixPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN6QixDQUFDO0lBRUQsSUFDSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlDLENBQUM7OEdBOUNVLGNBQWM7a0dBQWQsY0FBYyxnVkFJUixhQUFhLGdEQ2pDaEMsMFFBUUEsaUdEbUJjLG9CQUFvQjs7MkZBRXJCLGNBQWM7a0JBWjFCLFNBQVM7K0JBQ0ksWUFBWSxtQkFFTCx1QkFBdUIsQ0FBQyxNQUFNLFFBRXpDO3dCQUNGLEtBQUssRUFBRSxZQUFZO3FCQUN0QixjQUVXLElBQUksV0FDUCxDQUFDLG9CQUFvQixDQUFDOzhCQUd4QixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFHTixLQUFLO3NCQURKLGVBQWU7dUJBQUMsYUFBYSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtnQkF5QmpELEVBQUU7c0JBREwsV0FBVzt1QkFBQyxJQUFJO2dCQU1iLFdBQVc7c0JBRGQsV0FBVzt1QkFBQyx5QkFBeUI7Z0JBTWxDLE1BQU07c0JBRFQsV0FBVzt1QkFBQyxrQkFBa0I7Z0JBTTNCLFNBQVM7c0JBRFosV0FBVzt1QkFBQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBIb3N0QmluZGluZyxcbiAgaW5qZWN0LFxuICBJbnB1dCxcbiAgUXVlcnlMaXN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRlbnQsIER5bmFtaWNWaWV3RGlyZWN0aXZlIH0gZnJvbSAnQG5nbmVhdC9vdmVydmlldyc7XG5pbXBvcnQgeyBJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9pdGVtL2l0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IENtZGtHcm91cFByb3BzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuXG5cbmxldCBjbWRrR3JvdXBJZCA9IDA7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY21kay1ncm91cCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2dyb3VwLmNvbXBvbmVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAnY21kay1ncm91cCcsXG4gICAgfSxcbiAgICBzdHlsZVVybHM6IFsnLi9ncm91cC5jb21wb25lbnQuc2NzcyddLFxuICAgIHN0YW5kYWxvbmU6IHRydWUsXG4gICAgaW1wb3J0czogW0R5bmFtaWNWaWV3RGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBDbWRrR3JvdXBQcm9wcyB7XG4gIEBJbnB1dCgpIGxhYmVsPzogQ29udGVudDtcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogc3RyaW5nO1xuXG4gIEBDb250ZW50Q2hpbGRyZW4oSXRlbURpcmVjdGl2ZSwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KVxuICBpdGVtcyE6IFF1ZXJ5TGlzdDxJdGVtRGlyZWN0aXZlPjtcblxuICBzaG93R3JvdXAgPSB0cnVlO1xuICBwcml2YXRlIF9hY3RpdmUgPSBmYWxzZTtcbiAgcmVhZG9ubHkgZ3JvdXBJZCA9IGBjbWRrLWdyb3VwLSR7Y21ka0dyb3VwSWQrK31gO1xuICBfY2RyID0gaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKTtcblxuICBnZXQgZmlsdGVyZWRJdGVtcygpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcz8uZmlsdGVyKChpdGVtKSA9PiBpdGVtLmZpbHRlcmVkKTtcbiAgfVxuXG4gIGdldCBhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuICBzZXQgYWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gdmFsdWU7XG4gICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgZ2V0IGZpbHRlcmVkKCkge1xuICAgIHJldHVybiB0aGlzLmZpbHRlcmVkSXRlbXMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnaWQnKVxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ3JvdXBJZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY21kay1ncm91cC1hY3RpdmUnKVxuICBnZXQgYWN0aXZlQ2xhc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmNtZGstaGlkZGVuJylcbiAgZ2V0IGhpZGRlbigpIHtcbiAgICByZXR1cm4gIXRoaXMuc2hvd0dyb3VwO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRhdGEtdmFsdWUnKVxuICBnZXQgZGF0YVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsPy50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gIH1cbn1cbiIsIkBpZiAobGFiZWwpIHtcbiAgPGRpdiByb2xlPVwicHJlc2VudGF0aW9uXCIgY2xhc3M9XCJjbWRrLWdyb3VwLWxhYmVsXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqZHluYW1pY1ZpZXc9XCJsYWJlbFwiPjwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbn1cbjxkaXYgY2xhc3M9XCJjbWRrLWdyb3VwLWNvbnRlbnRcIiByb2xlPVwiZ3JvdXBcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==