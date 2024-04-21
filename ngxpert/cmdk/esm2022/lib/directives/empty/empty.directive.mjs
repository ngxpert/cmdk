import { Directive, inject, Renderer2, TemplateRef, ViewContainerRef, } from '@angular/core';
import * as i0 from "@angular/core";
export class EmptyDirective {
    constructor() {
        this._hasView = false;
        this._templateRef = inject((TemplateRef));
        this._viewContainer = inject(ViewContainerRef);
        this._renderer2 = inject(Renderer2);
    }
    set cmdkEmpty(condition) {
        if (condition && !this._hasView) {
            const emb = this._viewContainer.createEmbeddedView(this._templateRef);
            this._renderer2.addClass(emb.rootNodes[0], 'cmdk-empty');
            this._hasView = true;
        }
        else if (!condition && this._hasView) {
            this._viewContainer.clear();
            this._hasView = false;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: EmptyDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.5", type: EmptyDirective, isStandalone: true, selector: "[cmdkEmpty]", host: { classAttribute: "cmdk-empty" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: EmptyDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cmdkEmpty]',
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        class: 'cmdk-empty',
                    },
                    standalone: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4cGVydC9jbWRrL3NyYy9saWIvZGlyZWN0aXZlcy9lbXB0eS9lbXB0eS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxnQkFBZ0IsR0FDakIsTUFBTSxlQUFlLENBQUM7O0FBVXZCLE1BQU0sT0FBTyxjQUFjO0lBUjNCO1FBU1UsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixpQkFBWSxHQUFHLE1BQU0sQ0FBQyxDQUFBLFdBQWdCLENBQUEsQ0FBQyxDQUFDO1FBQ3hDLG1CQUFjLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDMUMsZUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQVl4QztJQVZDLElBQUksU0FBUyxDQUFDLFNBQTJCO1FBQ3ZDLElBQUksU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hDLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQzthQUFNLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQztJQUNILENBQUM7OEdBZlUsY0FBYztrR0FBZCxjQUFjOzsyRkFBZCxjQUFjO2tCQVIxQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixxRUFBcUU7b0JBQ3JFLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsWUFBWTtxQkFDcEI7b0JBQ0QsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBpbmplY3QsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY21ka0VtcHR5XScsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdjbWRrLWVtcHR5JyxcbiAgfSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRW1wdHlEaXJlY3RpdmUge1xuICBwcml2YXRlIF9oYXNWaWV3ID0gZmFsc2U7XG4gIHByaXZhdGUgX3RlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmPGFueT4pO1xuICBwcml2YXRlIF92aWV3Q29udGFpbmVyID0gaW5qZWN0KFZpZXdDb250YWluZXJSZWYpO1xuICBwcml2YXRlIF9yZW5kZXJlcjIgPSBpbmplY3QoUmVuZGVyZXIyKTtcblxuICBzZXQgY21ka0VtcHR5KGNvbmRpdGlvbjogYm9vbGVhbiB8IHN0cmluZykge1xuICAgIGlmIChjb25kaXRpb24gJiYgIXRoaXMuX2hhc1ZpZXcpIHtcbiAgICAgIGNvbnN0IGVtYiA9IHRoaXMuX3ZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMuX3RlbXBsYXRlUmVmKTtcbiAgICAgIHRoaXMuX3JlbmRlcmVyMi5hZGRDbGFzcyhlbWIucm9vdE5vZGVzWzBdLCAnY21kay1lbXB0eScpO1xuICAgICAgdGhpcy5faGFzVmlldyA9IHRydWU7XG4gICAgfSBlbHNlIGlmICghY29uZGl0aW9uICYmIHRoaXMuX2hhc1ZpZXcpIHtcbiAgICAgIHRoaXMuX3ZpZXdDb250YWluZXIuY2xlYXIoKTtcbiAgICAgIHRoaXMuX2hhc1ZpZXcgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==