import * as i0 from '@angular/core';
import { Injectable, inject, ElementRef, Directive, Input, TemplateRef, ViewContainerRef, Renderer2, EventEmitter, Output, HostListener, HostBinding, ChangeDetectorRef, Component, ChangeDetectionStrategy, ContentChildren, ViewChild, ContentChild, NgModule } from '@angular/core';
import { Subject, race } from 'rxjs';
import { __decorate } from 'tslib';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DynamicViewDirective } from '@ngneat/overview';
import { ActiveDescendantKeyManager, A11yModule } from '@angular/cdk/a11y';
import { CommonModule } from '@angular/common';

class CmdkService {
    constructor() {
        this._searchSub = new Subject();
        this.search$ = this._searchSub.asObservable();
        this._itemClickedSub = new Subject();
        this.itemClicked$ = this._itemClickedSub.asObservable();
        this._itemValueChangedSub = new Subject();
        this.itemValueChanged$ = this._itemValueChangedSub.asObservable();
    }
    setSearch(value) {
        this._searchSub.next(value);
    }
    itemClicked(value) {
        this._itemClickedSub.next(value);
    }
    itemValueChanged(oldValue, newValue) {
        this._itemValueChangedSub.next({ oldValue, newValue });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: CmdkService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: CmdkService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: CmdkService, decorators: [{
            type: Injectable
        }] });

class InputDirective {
    constructor() {
        this.updateOn = 'input';
        this._cmdkService = inject(CmdkService);
        this._elementRef = inject((ElementRef));
    }
    set value(value) {
        this.search(value);
    }
    search(value) {
        this._cmdkService.setSearch(value);
    }
    ngAfterViewInit() {
        this._elementRef.nativeElement.addEventListener(this.updateOn, (ev) => this.search(ev.target.value));
    }
    ngOnDestroy() {
        this._elementRef.nativeElement.removeAllListeners &&
            this._elementRef.nativeElement.removeAllListeners(this.updateOn);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: InputDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.5", type: InputDirective, isStandalone: true, selector: "input[cmdkInput]", inputs: { updateOn: "updateOn", value: "value" }, host: { classAttribute: "cmdk-input" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: InputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[cmdkInput]',
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        class: 'cmdk-input',
                    },
                    standalone: true,
                }]
        }], propDecorators: { updateOn: [{
                type: Input
            }], value: [{
                type: Input
            }] } });

class EmptyDirective {
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

let cmdkGroupId = 0;
class GroupComponent {
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

/**
 * A visual and semantic separator between items or groups.
 * Visible when the search query is empty or `alwaysRender` is true, hidden otherwise.
 */
class SeparatorComponent {
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

class LoaderDirective {
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

let cmdkListId = 0;
class ListComponent {
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

let commandId = 0;
const GROUP_SELECTOR = 'cmdk-group';
const GROUP_HEADING_SELECTOR = '.cmdk-group-label';
let CommandComponent = class CommandComponent {
    constructor() {
        this.valueChanged = new EventEmitter();
        this.filter = (value, search) => value.toLowerCase().includes(search.toLowerCase());
        this.loop = false;
        this.search = '';
        this.panelId = `cmdk-command-${commandId++}`;
        this.cmdkService = inject(CmdkService);
    }
    get attrAriaLabel() {
        return this.ariaLabel;
    }
    get id() {
        return this.panelId;
    }
    ngOnChanges(changes) {
        if (changes['value'] && !changes['value'].firstChange) {
            this.setValue(this.value);
        }
        else if (changes['loading'] &&
            !changes['loading'].firstChange &&
            this.loader) {
            this.loader.cmdkLoader = this.loading;
        }
    }
    ngAfterViewInit() {
        race(this.cmdkService.itemValueChanged$, this.items.changes)
            .pipe(untilDestroyed(this))
            .subscribe(() => {
            setTimeout(() => {
                if (this.keyManager) {
                    this.keyManager.destroy();
                }
                // create key and focus managers
                this.initKeyManager();
                if (this.filter) {
                    this.handleSearch(this.search);
                }
            });
        });
        // show/hide loader
        if (this.loader) {
            this.loader.cmdkLoader = this.loading;
        }
        // create key and focus managers
        this.initKeyManager();
        if (this.filter) {
            this.cmdkService.search$
                .pipe(untilDestroyed(this))
                .subscribe((s) => this.handleSearch(s));
        }
        // if value is given, make that item active, else make first item active
        if (this.value) {
            this.setValue(this.value);
        }
        else {
            this.makeFirstItemActive();
        }
        // emit value on item clicks
        this.cmdkService.itemClicked$
            .pipe(untilDestroyed(this))
            .subscribe((value) => {
            const emit = true;
            this.setValue(value, emit);
        });
    }
    initKeyManager() {
        this.keyManager = new ActiveDescendantKeyManager(this.items)
            .withWrap(this.loop)
            .withPageUpDown()
            .skipPredicate((item) => item.disabled || !item.filtered);
        // set active group on active item change
        this.keyManager.change.pipe(untilDestroyed(this)).subscribe(() => {
            const activeItem = this.keyManager.activeItem;
            if (activeItem) {
                const emit = true;
                this.setValue(activeItem.value, emit);
                this.setActiveGroupForActiveItem(activeItem.itemId);
            }
        });
    }
    get filteredItems() {
        return this.items?.filter((item) => item.filtered);
    }
    get filteredGroups() {
        return this.groups?.filter((group) => group.filtered);
    }
    get filteredLists() {
        return this.lists?.filter((group) => group.filtered);
    }
    handleSearch(search) {
        this.search = search;
        if (this.items?.length) {
            // filter items
            this.items?.forEach((item) => {
                item.filtered = this.filter ? this.filter(item.value, search) : true;
            });
            // make first item active and in-turn it will also make first group active, if available
            this.makeFirstItemActive();
        }
        // show/hide empty directive
        if (this.empty) {
            this.empty.cmdkEmpty = this.filteredItems?.length === 0;
        }
        // show/hide group
        this.groups?.forEach((group) => {
            group.showGroup = group.filteredItems?.length > 0;
            group._cdr.markForCheck();
        });
        // hide separator if search and filter both are present, else show
        this.separators?.forEach((seperator) => {
            seperator.showSeparator = !(this.filter && search);
            seperator.cdr.markForCheck();
        });
    }
    onKeyUp(ev) {
        if (ev.key === 'Enter' &&
            this.keyManager.activeItem &&
            this.filteredItems.length > 0) {
            this.valueChanged.emit(this.keyManager.activeItem.value);
            this.keyManager.activeItem.selected.emit();
        }
        else {
            this.keyManager.onKeydown(ev);
        }
    }
    ngOnDestroy() {
        this.keyManager.destroy();
    }
    makeFirstItemActive() {
        setTimeout(() => {
            const firstItem = this.filteredItems?.[0];
            if (firstItem) {
                this.keyManager.setFirstItemActive();
            }
            else {
                this.valueChanged.emit(undefined);
            }
        });
    }
    setActiveGroupForActiveItem(nextActiveItemId) {
        this.filteredGroups?.forEach((group) => {
            group.active = group.filteredItems.some((item) => item.itemId === nextActiveItemId);
        });
        this.filteredLists?.forEach((list) => {
            list.active = list.filteredItems.some((item) => item.itemId === nextActiveItemId);
        });
    }
    setValue(value, emit = false) {
        if (value !== undefined) {
            const valueItem = this.filteredItems?.find((item) => item.value === value);
            if (valueItem) {
                if (this.keyManager.activeItem !== valueItem) {
                    setTimeout(() => {
                        this.keyManager.setActiveItem(valueItem);
                    });
                }
                setTimeout(() => {
                    this.scrollActiveIntoView();
                });
                if (emit) {
                    this.valueChanged.emit(value);
                }
            }
        }
    }
    scrollActiveIntoView() {
        const item = this.keyManager.activeItem;
        const nativeElement = item?._elementRef?.nativeElement;
        if (nativeElement) {
            if (nativeElement.parentElement?.firstChild === nativeElement) {
                // First item in Group, ensure heading is in view
                nativeElement
                    .closest(GROUP_SELECTOR)
                    ?.querySelector(GROUP_HEADING_SELECTOR)
                    ?.scrollIntoView({ block: 'nearest' });
            }
            // Ensure the item is always in view
            nativeElement.scrollIntoView({ block: 'nearest' });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: CommandComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.5", type: CommandComponent, isStandalone: true, selector: "cmdk-command", inputs: { value: "value", ariaLabel: "ariaLabel", loading: "loading", filter: "filter", loop: "loop" }, outputs: { valueChanged: "valueChanged" }, host: { listeners: { "keydown": "onKeyUp($event)" }, properties: { "attr.aria-label": "this.attrAriaLabel", "id": "this.id" }, classAttribute: "cmdk-command" }, providers: [CmdkService], queries: [{ propertyName: "empty", first: true, predicate: EmptyDirective, descendants: true }, { propertyName: "loader", first: true, predicate: LoaderDirective, descendants: true }, { propertyName: "items", predicate: ItemDirective, descendants: true }, { propertyName: "groups", predicate: GroupComponent, descendants: true }, { propertyName: "lists", predicate: ListComponent, descendants: true }, { propertyName: "separators", predicate: SeparatorComponent, descendants: true }], exportAs: ["cmdkCommand"], usesOnChanges: true, ngImport: i0, template: "<ng-content></ng-content>\n", changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
};
CommandComponent = __decorate([
    UntilDestroy()
], CommandComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: CommandComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cmdk-command', providers: [CmdkService], changeDetection: ChangeDetectionStrategy.OnPush, exportAs: 'cmdkCommand', host: {
                        class: 'cmdk-command',
                    }, standalone: true, template: "<ng-content></ng-content>\n" }]
        }], propDecorators: { valueChanged: [{
                type: Output
            }], value: [{
                type: Input
            }], ariaLabel: [{
                type: Input
            }], loading: [{
                type: Input
            }], filter: [{
                type: Input
            }], loop: [{
                type: Input
            }], items: [{
                type: ContentChildren,
                args: [ItemDirective, { descendants: true }]
            }], groups: [{
                type: ContentChildren,
                args: [GroupComponent, { descendants: true }]
            }], lists: [{
                type: ContentChildren,
                args: [ListComponent, { descendants: true }]
            }], separators: [{
                type: ContentChildren,
                args: [SeparatorComponent, { descendants: true }]
            }], empty: [{
                type: ContentChild,
                args: [EmptyDirective]
            }], loader: [{
                type: ContentChild,
                args: [LoaderDirective]
            }], attrAriaLabel: [{
                type: HostBinding,
                args: ['attr.aria-label']
            }], id: [{
                type: HostBinding,
                args: ['id']
            }], onKeyUp: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }] } });

const ComponentsAndDirectives = [
    CommandComponent,
    InputDirective,
    EmptyDirective,
    GroupComponent,
    SeparatorComponent,
    ItemDirective,
    LoaderDirective,
    ListComponent,
];
class CmdkModule {
    static forRoot() {
        return {
            ngModule: CmdkModule,
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: CmdkModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.5", ngImport: i0, type: CmdkModule, imports: [CommonModule, A11yModule, CommandComponent,
            InputDirective,
            EmptyDirective,
            GroupComponent,
            SeparatorComponent,
            ItemDirective,
            LoaderDirective,
            ListComponent], exports: [CommandComponent,
            InputDirective,
            EmptyDirective,
            GroupComponent,
            SeparatorComponent,
            ItemDirective,
            LoaderDirective,
            ListComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: CmdkModule, imports: [CommonModule, A11yModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.5", ngImport: i0, type: CmdkModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, A11yModule, ...ComponentsAndDirectives],
                    exports: ComponentsAndDirectives,
                }]
        }] });

/*
 * Public API Surface of cmdk
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CmdkModule, CmdkService, CommandComponent, EmptyDirective, GroupComponent, InputDirective, ItemDirective, ListComponent, LoaderDirective, SeparatorComponent };
//# sourceMappingURL=ngxpert-cmdk.mjs.map
