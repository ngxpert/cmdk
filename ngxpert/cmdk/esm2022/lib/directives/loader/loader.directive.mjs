import { Directive, TemplateRef, ViewContainerRef, inject, } from '@angular/core';
import * as i0 from "@angular/core";
export class LoaderDirective {
    constructor() {
        this._hasView = false;
        this._templateRef = inject(TemplateRef);
        this._viewContainer = inject(ViewContainerRef);
    }
    set cmdkLoader(condition) {
        if (condition && !this._hasView) {
            this._viewContainer.createEmbeddedView(this._templateRef);
            this._hasView = true;
        }
        else if (!condition && this._hasView) {
            this._viewContainer.clear();
            this._hasView = false;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: LoaderDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.5", type: LoaderDirective, isStandalone: true, selector: "[cmdkLoader]", host: { classAttribute: "cmdk-loader" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: LoaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[cmdkLoader]',
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        class: 'cmdk-loader',
                    },
                    standalone: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neHBlcnQvY21kay9zcmMvbGliL2RpcmVjdGl2ZXMvbG9hZGVyL2xvYWRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQzs7QUFVdkIsTUFBTSxPQUFPLGVBQWU7SUFSNUI7UUFTVSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25DLG1CQUFjLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7S0FXbkQ7SUFUQyxJQUFJLFVBQVUsQ0FBQyxTQUE4QjtRQUMzQyxJQUFJLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO2FBQU0sSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDO0lBQ0gsQ0FBQzs4R0FiVSxlQUFlO2tHQUFmLGVBQWU7OzJGQUFmLGVBQWU7a0JBUjNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLHFFQUFxRTtvQkFDckUsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRSxhQUFhO3FCQUNyQjtvQkFDRCxVQUFVLEVBQUUsSUFBSTtpQkFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBpbmplY3QsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY21ka0xvYWRlcl0nLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnY21kay1sb2FkZXInLFxuICB9LFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBMb2FkZXJEaXJlY3RpdmUge1xuICBwcml2YXRlIF9oYXNWaWV3ID0gZmFsc2U7XG4gIHByaXZhdGUgX3RlbXBsYXRlUmVmID0gaW5qZWN0KFRlbXBsYXRlUmVmKTtcbiAgcHJpdmF0ZSBfdmlld0NvbnRhaW5lciA9IGluamVjdChWaWV3Q29udGFpbmVyUmVmKTtcblxuICBzZXQgY21ka0xvYWRlcihjb25kaXRpb246IGJvb2xlYW4gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAoY29uZGl0aW9uICYmICF0aGlzLl9oYXNWaWV3KSB7XG4gICAgICB0aGlzLl92aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl90ZW1wbGF0ZVJlZik7XG4gICAgICB0aGlzLl9oYXNWaWV3ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFjb25kaXRpb24gJiYgdGhpcy5faGFzVmlldykge1xuICAgICAgdGhpcy5fdmlld0NvbnRhaW5lci5jbGVhcigpO1xuICAgICAgdGhpcy5faGFzVmlldyA9IGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19