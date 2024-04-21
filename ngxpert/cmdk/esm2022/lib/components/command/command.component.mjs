import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy, ContentChildren, inject, ContentChild, HostListener, HostBinding, } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CmdkService } from '../../cmdk.service';
import { EmptyDirective } from '../../directives/empty/empty.directive';
import { ItemDirective } from '../../directives/item/item.directive';
import { GroupComponent } from '../group/group.component';
import { SeparatorComponent } from '../separator/separator.component';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { LoaderDirective } from '../../directives/loader/loader.directive';
import { ListComponent } from '../list/list.component';
import { race } from 'rxjs';
import * as i0 from "@angular/core";
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
export { CommandComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3hwZXJ0L2NtZGsvc3JjL2xpYi9jb21wb25lbnRzL2NvbW1hbmQvY29tbWFuZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3hwZXJ0L2NtZGsvc3JjL2xpYi9jb21wb25lbnRzL2NvbW1hbmQvY29tbWFuZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTix1QkFBdUIsRUFDdkIsZUFBZSxFQUVmLE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxFQUtaLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRTVCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNsQixNQUFN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LGFBRWIsQ0FBQyxXQUFXLENBQUMsbUJBQ1AsdUJBQXVCLENBQUMsTUFBTSxZQUNyQyxhQUFhLFFBRWpCO3dCQUNGLEtBQUssRUFBRSxjQUFjO3FCQUN4QixjQUNXLElBQUk7OEJBS1IsWUFBWTtzQkFBckIsTUFBTTtnQkFDRSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUtHLElBQUk7c0JBQVosS0FBSztnQkFHTixLQUFLO3NCQURKLGVBQWU7dUJBQUMsYUFBYSxFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTtnQkFHckQsTUFBTTtzQkFETCxlQUFlO3VCQUFDLGNBQWMsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7Z0JBR3RELEtBQUs7c0JBREosZUFBZTt1QkFBQyxhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO2dCQUdyRCxVQUFVO3NCQURULGVBQWU7dUJBQUMsa0JBQWtCLEVBQUUsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO2dCQUU1QixLQUFLO3NCQUFsQyxZQUFZO3VCQUFDLGNBQWM7Z0JBQ0csTUFBTTtzQkFBcEMsWUFBWTt1QkFBQyxlQUFlO2dCQUl6QixhQUFhO3NCQURoQixXQUFXO3VCQUFDLGlCQUFpQjtnQkFNMUIsRUFBRTtzQkFETCxXQUFXO3VCQUFDLElBQUk7Z0JBaUlqQixPQUFPO3NCQUROLFlBQVk7dUJBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgaW5qZWN0LFxuICBDb250ZW50Q2hpbGQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVudGlsRGVzdHJveSwgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAbmduZWF0L3VudGlsLWRlc3Ryb3knO1xuaW1wb3J0IHsgQ21ka1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbWRrLnNlcnZpY2UnO1xuaW1wb3J0IHsgRW1wdHlEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2VtcHR5L2VtcHR5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJdGVtRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9pdGVtL2l0ZW0uZGlyZWN0aXZlJztcbmltcG9ydCB7IENtZGtDb21tYW5kUHJvcHMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBHcm91cENvbXBvbmVudCB9IGZyb20gJy4uL2dyb3VwL2dyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZXBhcmF0b3JDb21wb25lbnQgfSBmcm9tICcuLi9zZXBhcmF0b3Ivc2VwYXJhdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmVEZXNjZW5kYW50S2V5TWFuYWdlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IExvYWRlckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvbG9hZGVyL2xvYWRlci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gJy4uL2xpc3QvbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgcmFjZSB9IGZyb20gJ3J4anMnO1xuXG5sZXQgY29tbWFuZElkID0gMDtcbmNvbnN0IEdST1VQX1NFTEVDVE9SID0gJ2NtZGstZ3JvdXAnO1xuY29uc3QgR1JPVVBfSEVBRElOR19TRUxFQ1RPUiA9ICcuY21kay1ncm91cC1sYWJlbCc7XG5AVW50aWxEZXN0cm95KClcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY21kay1jb21tYW5kJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29tbWFuZC5jb21wb25lbnQuaHRtbCcsXG4gICAgcHJvdmlkZXJzOiBbQ21ka1NlcnZpY2VdLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIGV4cG9ydEFzOiAnY21ka0NvbW1hbmQnLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxuICAgIGhvc3Q6IHtcbiAgICAgICAgY2xhc3M6ICdjbWRrLWNvbW1hbmQnLFxuICAgIH0sXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgQ29tbWFuZENvbXBvbmVudFxuICBpbXBsZW1lbnRzIENtZGtDb21tYW5kUHJvcHMsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95XG57XG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQElucHV0KCkgdmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgYXJpYUxhYmVsPzogc3RyaW5nO1xuICBASW5wdXQoKSBsb2FkaW5nPzogYm9vbGVhbjtcbiAgQElucHV0KCkgZmlsdGVyOlxuICAgIHwgKCh2YWx1ZTogc3RyaW5nLCBzZWFyY2g6IHN0cmluZykgPT4gYm9vbGVhbilcbiAgICB8IG51bGxcbiAgICB8IHVuZGVmaW5lZCA9ICh2YWx1ZSwgc2VhcmNoKSA9PlxuICAgIHZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvTG93ZXJDYXNlKCkpO1xuICBASW5wdXQoKSBsb29wID0gZmFsc2U7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihJdGVtRGlyZWN0aXZlLCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gIGl0ZW1zITogUXVlcnlMaXN0PEl0ZW1EaXJlY3RpdmU+O1xuICBAQ29udGVudENoaWxkcmVuKEdyb3VwQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gIGdyb3VwczogUXVlcnlMaXN0PEdyb3VwQ29tcG9uZW50PiB8IHVuZGVmaW5lZDtcbiAgQENvbnRlbnRDaGlsZHJlbihMaXN0Q29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gIGxpc3RzOiBRdWVyeUxpc3Q8TGlzdENvbXBvbmVudD4gfCB1bmRlZmluZWQ7XG4gIEBDb250ZW50Q2hpbGRyZW4oU2VwYXJhdG9yQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pXG4gIHNlcGFyYXRvcnM6IFF1ZXJ5TGlzdDxTZXBhcmF0b3JDb21wb25lbnQ+IHwgdW5kZWZpbmVkO1xuICBAQ29udGVudENoaWxkKEVtcHR5RGlyZWN0aXZlKSBlbXB0eTogRW1wdHlEaXJlY3RpdmUgfCB1bmRlZmluZWQ7XG4gIEBDb250ZW50Q2hpbGQoTG9hZGVyRGlyZWN0aXZlKSBsb2FkZXI6IExvYWRlckRpcmVjdGl2ZSB8IHVuZGVmaW5lZDtcbiAgc2VhcmNoID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWwnKVxuICBnZXQgYXR0ckFyaWFMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcmlhTGFiZWw7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2lkJylcbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLnBhbmVsSWQ7XG4gIH1cblxuICByZWFkb25seSBwYW5lbElkID0gYGNtZGstY29tbWFuZC0ke2NvbW1hbmRJZCsrfWA7XG5cbiAgcHJpdmF0ZSBjbWRrU2VydmljZSA9IGluamVjdChDbWRrU2VydmljZSk7XG5cbiAgcHJpdmF0ZSBrZXlNYW5hZ2VyITogQWN0aXZlRGVzY2VuZGFudEtleU1hbmFnZXI8SXRlbURpcmVjdGl2ZT47XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWyd2YWx1ZSddICYmICFjaGFuZ2VzWyd2YWx1ZSddLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjaGFuZ2VzWydsb2FkaW5nJ10gJiZcbiAgICAgICFjaGFuZ2VzWydsb2FkaW5nJ10uZmlyc3RDaGFuZ2UgJiZcbiAgICAgIHRoaXMubG9hZGVyXG4gICAgKSB7XG4gICAgICB0aGlzLmxvYWRlci5jbWRrTG9hZGVyID0gdGhpcy5sb2FkaW5nO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICByYWNlKHRoaXMuY21ka1NlcnZpY2UuaXRlbVZhbHVlQ2hhbmdlZCQsIHRoaXMuaXRlbXMuY2hhbmdlcylcbiAgICAgIC5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmtleU1hbmFnZXIpIHtcbiAgICAgICAgICAgIHRoaXMua2V5TWFuYWdlci5kZXN0cm95KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNyZWF0ZSBrZXkgYW5kIGZvY3VzIG1hbmFnZXJzXG4gICAgICAgICAgdGhpcy5pbml0S2V5TWFuYWdlcigpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaCh0aGlzLnNlYXJjaCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgLy8gc2hvdy9oaWRlIGxvYWRlclxuICAgIGlmICh0aGlzLmxvYWRlcikge1xuICAgICAgdGhpcy5sb2FkZXIuY21ka0xvYWRlciA9IHRoaXMubG9hZGluZztcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUga2V5IGFuZCBmb2N1cyBtYW5hZ2Vyc1xuICAgIHRoaXMuaW5pdEtleU1hbmFnZXIoKTtcblxuICAgIGlmICh0aGlzLmZpbHRlcikge1xuICAgICAgdGhpcy5jbWRrU2VydmljZS5zZWFyY2gkXG4gICAgICAgIC5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKVxuICAgICAgICAuc3Vic2NyaWJlKChzKSA9PiB0aGlzLmhhbmRsZVNlYXJjaChzKSk7XG4gICAgfVxuXG4gICAgLy8gaWYgdmFsdWUgaXMgZ2l2ZW4sIG1ha2UgdGhhdCBpdGVtIGFjdGl2ZSwgZWxzZSBtYWtlIGZpcnN0IGl0ZW0gYWN0aXZlXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWFrZUZpcnN0SXRlbUFjdGl2ZSgpO1xuICAgIH1cblxuICAgIC8vIGVtaXQgdmFsdWUgb24gaXRlbSBjbGlja3NcbiAgICB0aGlzLmNtZGtTZXJ2aWNlLml0ZW1DbGlja2VkJFxuICAgICAgLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpXG4gICAgICAuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBlbWl0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSwgZW1pdCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEtleU1hbmFnZXIoKSB7XG4gICAgdGhpcy5rZXlNYW5hZ2VyID0gbmV3IEFjdGl2ZURlc2NlbmRhbnRLZXlNYW5hZ2VyKHRoaXMuaXRlbXMpXG4gICAgICAud2l0aFdyYXAodGhpcy5sb29wKVxuICAgICAgLndpdGhQYWdlVXBEb3duKClcbiAgICAgIC5za2lwUHJlZGljYXRlKChpdGVtKSA9PiBpdGVtLmRpc2FibGVkIHx8ICFpdGVtLmZpbHRlcmVkKTtcblxuICAgIC8vIHNldCBhY3RpdmUgZ3JvdXAgb24gYWN0aXZlIGl0ZW0gY2hhbmdlXG4gICAgdGhpcy5rZXlNYW5hZ2VyLmNoYW5nZS5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlSXRlbSA9IHRoaXMua2V5TWFuYWdlci5hY3RpdmVJdGVtO1xuICAgICAgaWYgKGFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgY29uc3QgZW1pdCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoYWN0aXZlSXRlbS52YWx1ZSwgZW1pdCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlR3JvdXBGb3JBY3RpdmVJdGVtKGFjdGl2ZUl0ZW0uaXRlbUlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldCBmaWx0ZXJlZEl0ZW1zKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zPy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZmlsdGVyZWQpO1xuICB9XG5cbiAgZ2V0IGZpbHRlcmVkR3JvdXBzKCkge1xuICAgIHJldHVybiB0aGlzLmdyb3Vwcz8uZmlsdGVyKChncm91cCkgPT4gZ3JvdXAuZmlsdGVyZWQpO1xuICB9XG5cbiAgZ2V0IGZpbHRlcmVkTGlzdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGlzdHM/LmZpbHRlcigoZ3JvdXApID0+IGdyb3VwLmZpbHRlcmVkKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaChzZWFyY2g6IHN0cmluZykge1xuICAgIHRoaXMuc2VhcmNoID0gc2VhcmNoO1xuICAgIGlmICh0aGlzLml0ZW1zPy5sZW5ndGgpIHtcbiAgICAgIC8vIGZpbHRlciBpdGVtc1xuICAgICAgdGhpcy5pdGVtcz8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmZpbHRlcmVkID0gdGhpcy5maWx0ZXIgPyB0aGlzLmZpbHRlcihpdGVtLnZhbHVlLCBzZWFyY2gpIDogdHJ1ZTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBtYWtlIGZpcnN0IGl0ZW0gYWN0aXZlIGFuZCBpbi10dXJuIGl0IHdpbGwgYWxzbyBtYWtlIGZpcnN0IGdyb3VwIGFjdGl2ZSwgaWYgYXZhaWxhYmxlXG4gICAgICB0aGlzLm1ha2VGaXJzdEl0ZW1BY3RpdmUoKTtcbiAgICB9XG4gICAgLy8gc2hvdy9oaWRlIGVtcHR5IGRpcmVjdGl2ZVxuICAgIGlmICh0aGlzLmVtcHR5KSB7XG4gICAgICB0aGlzLmVtcHR5LmNtZGtFbXB0eSA9IHRoaXMuZmlsdGVyZWRJdGVtcz8ubGVuZ3RoID09PSAwO1xuICAgIH1cblxuICAgIC8vIHNob3cvaGlkZSBncm91cFxuICAgIHRoaXMuZ3JvdXBzPy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgZ3JvdXAuc2hvd0dyb3VwID0gZ3JvdXAuZmlsdGVyZWRJdGVtcz8ubGVuZ3RoID4gMDtcbiAgICAgIGdyb3VwLl9jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG5cbiAgICAvLyBoaWRlIHNlcGFyYXRvciBpZiBzZWFyY2ggYW5kIGZpbHRlciBib3RoIGFyZSBwcmVzZW50LCBlbHNlIHNob3dcbiAgICB0aGlzLnNlcGFyYXRvcnM/LmZvckVhY2goKHNlcGVyYXRvcikgPT4ge1xuICAgICAgc2VwZXJhdG9yLnNob3dTZXBhcmF0b3IgPSAhKHRoaXMuZmlsdGVyICYmIHNlYXJjaCk7XG4gICAgICBzZXBlcmF0b3IuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgIH0pO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uS2V5VXAoZXY6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAoXG4gICAgICBldi5rZXkgPT09ICdFbnRlcicgJiZcbiAgICAgIHRoaXMua2V5TWFuYWdlci5hY3RpdmVJdGVtICYmXG4gICAgICB0aGlzLmZpbHRlcmVkSXRlbXMubGVuZ3RoID4gMFxuICAgICkge1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbS52YWx1ZSk7XG4gICAgICB0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbS5zZWxlY3RlZC5lbWl0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMua2V5TWFuYWdlci5vbktleWRvd24oZXYpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMua2V5TWFuYWdlci5kZXN0cm95KCk7XG4gIH1cblxuICBwcml2YXRlIG1ha2VGaXJzdEl0ZW1BY3RpdmUoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBmaXJzdEl0ZW0gPSB0aGlzLmZpbHRlcmVkSXRlbXM/LlswXTtcbiAgICAgIGlmIChmaXJzdEl0ZW0pIHtcbiAgICAgICAgdGhpcy5rZXlNYW5hZ2VyLnNldEZpcnN0SXRlbUFjdGl2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh1bmRlZmluZWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBY3RpdmVHcm91cEZvckFjdGl2ZUl0ZW0obmV4dEFjdGl2ZUl0ZW1JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5maWx0ZXJlZEdyb3Vwcz8uZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgIGdyb3VwLmFjdGl2ZSA9IGdyb3VwLmZpbHRlcmVkSXRlbXMuc29tZShcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaXRlbUlkID09PSBuZXh0QWN0aXZlSXRlbUlkXG4gICAgICApO1xuICAgIH0pO1xuICAgIHRoaXMuZmlsdGVyZWRMaXN0cz8uZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgICAgbGlzdC5hY3RpdmUgPSBsaXN0LmZpbHRlcmVkSXRlbXMuc29tZShcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaXRlbUlkID09PSBuZXh0QWN0aXZlSXRlbUlkXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkLCBlbWl0ID0gZmFsc2UpIHtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgdmFsdWVJdGVtID0gdGhpcy5maWx0ZXJlZEl0ZW1zPy5maW5kKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS52YWx1ZSA9PT0gdmFsdWVcbiAgICAgICk7XG4gICAgICBpZiAodmFsdWVJdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbSAhPT0gdmFsdWVJdGVtKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmtleU1hbmFnZXIuc2V0QWN0aXZlSXRlbSh2YWx1ZUl0ZW0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2Nyb2xsQWN0aXZlSW50b1ZpZXcoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChlbWl0KSB7XG4gICAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNjcm9sbEFjdGl2ZUludG9WaWV3KCkge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLmtleU1hbmFnZXIuYWN0aXZlSXRlbTtcbiAgICBjb25zdCBuYXRpdmVFbGVtZW50ID0gaXRlbT8uX2VsZW1lbnRSZWY/Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKG5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGlmIChuYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQ/LmZpcnN0Q2hpbGQgPT09IG5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgLy8gRmlyc3QgaXRlbSBpbiBHcm91cCwgZW5zdXJlIGhlYWRpbmcgaXMgaW4gdmlld1xuICAgICAgICBuYXRpdmVFbGVtZW50XG4gICAgICAgICAgLmNsb3Nlc3QoR1JPVVBfU0VMRUNUT1IpXG4gICAgICAgICAgPy5xdWVyeVNlbGVjdG9yKEdST1VQX0hFQURJTkdfU0VMRUNUT1IpXG4gICAgICAgICAgPy5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnbmVhcmVzdCcgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVuc3VyZSB0aGUgaXRlbSBpcyBhbHdheXMgaW4gdmlld1xuICAgICAgbmF0aXZlRWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnbmVhcmVzdCcgfSk7XG4gICAgfVxuICB9XG59XG4iLCI8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4iXX0=