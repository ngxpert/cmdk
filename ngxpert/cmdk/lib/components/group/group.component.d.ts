import { ChangeDetectorRef, QueryList } from '@angular/core';
import { Content } from '@ngneat/overview';
import { ItemDirective } from '../../directives/item/item.directive';
import { CmdkGroupProps } from '../../types';
import * as i0 from "@angular/core";
export declare class GroupComponent implements CmdkGroupProps {
    label?: Content;
    ariaLabel?: string;
    items: QueryList<ItemDirective>;
    showGroup: boolean;
    private _active;
    readonly groupId: string;
    _cdr: ChangeDetectorRef;
    get filteredItems(): ItemDirective[];
    get active(): boolean;
    set active(value: boolean);
    get filtered(): boolean;
    get id(): string;
    get activeClass(): boolean;
    get hidden(): boolean;
    get dataValue(): string | undefined;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupComponent, "cmdk-group", never, { "label": { "alias": "label"; "required": false; }; "ariaLabel": { "alias": "ariaLabel"; "required": false; }; }, {}, ["items"], ["*"], true, never>;
}
