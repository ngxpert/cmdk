import { AfterViewInit, OnDestroy } from '@angular/core';
import { CmdkInputProps } from '../../types';
import * as i0 from "@angular/core";
export declare class InputDirective implements AfterViewInit, OnDestroy, CmdkInputProps {
    updateOn: 'blur' | 'change' | 'input';
    set value(value: string);
    private _cmdkService;
    private _elementRef;
    search(value: string): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<InputDirective, "input[cmdkInput]", never, { "updateOn": { "alias": "updateOn"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, never, true, never>;
}
