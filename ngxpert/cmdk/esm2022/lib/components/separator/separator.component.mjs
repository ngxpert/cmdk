import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, inject, } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A visual and semantic separator between items or groups.
 * Visible when the search query is empty or `alwaysRender` is true, hidden otherwise.
 */
export class SeparatorComponent {
    constructor() {
        this.showSeparator = true;
        this.cdr = inject(ChangeDetectorRef);
    }
    get hidden() {
        return !this.showSeparator;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: SeparatorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.5", type: SeparatorComponent, isStandalone: true, selector: "cmdk-separator", host: { properties: { "attr.cmdk-hidden": "this.hidden" }, classAttribute: "cmdk-separator" }, ngImport: i0, template: "<hr>", styles: [":host[cmdk-hidden=true]{display:none}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: SeparatorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cmdk-separator', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        class: 'cmdk-separator',
                    }, standalone: true, template: "<hr>", styles: [":host[cmdk-hidden=true]{display:none}\n"] }]
        }], propDecorators: { hidden: [{
                type: HostBinding,
                args: ['attr.cmdk-hidden']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VwYXJhdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neHBlcnQvY21kay9zcmMvbGliL2NvbXBvbmVudHMvc2VwYXJhdG9yL3NlcGFyYXRvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3hwZXJ0L2NtZGsvc3JjL2xpYi9jb21wb25lbnRzL3NlcGFyYXRvci9zZXBhcmF0b3IuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFdBQVcsRUFDWCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7O0FBRXZCOzs7R0FHRztBQVlILE1BQU0sT0FBTyxrQkFBa0I7SUFYL0I7UUFZRSxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNkLFFBQUcsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztLQU14QztJQUpDLElBQ0ksTUFBTTtRQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzdCLENBQUM7OEdBUFUsa0JBQWtCO2tHQUFsQixrQkFBa0IseUtDdkIvQixNQUFJOzsyRkR1QlMsa0JBQWtCO2tCQVg5QixTQUFTOytCQUNJLGdCQUFnQixtQkFFVCx1QkFBdUIsQ0FBQyxNQUFNLFFBRXpDO3dCQUNGLEtBQUssRUFBRSxnQkFBZ0I7cUJBQzFCLGNBRVcsSUFBSTs4QkFPZCxNQUFNO3NCQURULFdBQVc7dUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEEgdmlzdWFsIGFuZCBzZW1hbnRpYyBzZXBhcmF0b3IgYmV0d2VlbiBpdGVtcyBvciBncm91cHMuXG4gKiBWaXNpYmxlIHdoZW4gdGhlIHNlYXJjaCBxdWVyeSBpcyBlbXB0eSBvciBgYWx3YXlzUmVuZGVyYCBpcyB0cnVlLCBoaWRkZW4gb3RoZXJ3aXNlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NtZGstc2VwYXJhdG9yJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2VwYXJhdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcbiAgICBob3N0OiB7XG4gICAgICAgIGNsYXNzOiAnY21kay1zZXBhcmF0b3InLFxuICAgIH0sXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VwYXJhdG9yLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgU2VwYXJhdG9yQ29tcG9uZW50IHtcbiAgc2hvd1NlcGFyYXRvciA9IHRydWU7XG4gIHB1YmxpYyBjZHIgPSBpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5jbWRrLWhpZGRlbicpXG4gIGdldCBoaWRkZW4oKSB7XG4gICAgcmV0dXJuICF0aGlzLnNob3dTZXBhcmF0b3I7XG4gIH1cbn1cbiIsIjxocj4iXX0=