import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, QueryList } from '@angular/core';
import { ItemDirective } from '../../directives/item/item.directive';
import { CmdkListProps } from '../../types';
import * as i0 from "@angular/core";
export declare class ListComponent implements AfterViewInit, OnDestroy, CmdkListProps {
    ariaLabel?: string;
    items: QueryList<ItemDirective>;
    heightEle: ElementRef<HTMLDivElement>;
    private _active;
    private _elementRef;
    private _animationFrame;
    readonly listId: string;
    _cdr: ChangeDetectorRef;
    private _observer;
    get filteredItems(): ItemDirective[];
    get active(): boolean;
    set active(value: boolean);
    get filtered(): boolean;
    get id(): string;
    get activeClass(): boolean;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ListComponent, "cmdk-list", never, { "ariaLabel": { "alias": "ariaLabel"; "required": false; }; }, {}, ["items"], ["*"], true, never>;
}
