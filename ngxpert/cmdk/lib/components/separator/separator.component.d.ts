import { ChangeDetectorRef } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * A visual and semantic separator between items or groups.
 * Visible when the search query is empty or `alwaysRender` is true, hidden otherwise.
 */
export declare class SeparatorComponent {
    showSeparator: boolean;
    cdr: ChangeDetectorRef;
    get hidden(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<SeparatorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SeparatorComponent, "cmdk-separator", never, {}, {}, never, never, true, never>;
}
