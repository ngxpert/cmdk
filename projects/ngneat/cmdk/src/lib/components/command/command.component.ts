import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  inject,
  ContentChild,
  HostListener,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  HostBinding,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CmdkService } from '../../cmdk.service';
import { EmptyDirective } from '../../directives/empty/empty.directive';
import { ItemDirective } from '../../directives/item/item.directive';
import { CmdkCommandProps } from '../../types';
import { GroupComponent } from '../group/group.component';
import { SeparatorComponent } from '../separator/separator.component';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { LoaderDirective } from '../../directives/loader/loader.directive';
import { ListComponent } from '../list/list.component';

let commandId = 0;
const GROUP_SELECTOR = 'cmdk-group';
const GROUP_HEADING_SELECTOR = '.cmdk-group-label';
@UntilDestroy()
@Component({
  selector: 'cmdk-command',
  templateUrl: './command.component.html',
  providers: [CmdkService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'cmdkCommand',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'cmdk-command',
  },
})
export class CommandComponent
  implements CmdkCommandProps, AfterViewInit, OnChanges, OnDestroy
{
  @Output() valueChanged = new EventEmitter<string>();
  @Input() value: string | undefined;
  @Input() ariaLabel?: string;
  @Input() loading?: boolean;
  @Input() filter: ((value: string, search: string) => boolean) | null = (
    value,
    search
  ) => value.toLowerCase().includes(search.toLowerCase());
  @Input() loop = false;

  @ContentChildren(ItemDirective, { descendants: true })
  items!: QueryList<ItemDirective>;
  @ContentChildren(GroupComponent, { descendants: true })
  groups: QueryList<GroupComponent> | undefined;
  @ContentChildren(ListComponent, { descendants: true })
  lists: QueryList<ListComponent> | undefined;
  @ContentChildren(SeparatorComponent, { descendants: true })
  separators: QueryList<SeparatorComponent> | undefined;
  @ContentChild(EmptyDirective) empty: EmptyDirective | undefined;
  @ContentChild(LoaderDirective) loader: LoaderDirective | undefined;

  @HostBinding('attr.aria-label')
  get attrAriaLabel() {
    return this.ariaLabel;
  }

  @HostBinding('id')
  get id() {
    return this.panelId;
  }

  readonly panelId = `cmdk-command-${commandId++}`;

  private cmdkService = inject(CmdkService);

  private keyManager!: ActiveDescendantKeyManager<ItemDirective>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value'] && !changes['value'].firstChange) {
      this.setValue(this.value);
    } else if (
      changes['loading'] &&
      !changes['loading'].firstChange &&
      this.loader
    ) {
      this.loader.cmdkLoader = this.loading;
    }
  }

  ngAfterViewInit() {
    // show/hide loader
    if (this.loader) {
      this.loader.cmdkLoader = this.loading;
    }

    // create key and focus managers
    this.keyManager = new ActiveDescendantKeyManager(this.items)
      .withWrap(this.loop)
      .skipPredicate((item) => item.disabled || !item.filtered);

    if (this.filter) {
      this.cmdkService.search$
        .pipe(untilDestroyed(this))
        .subscribe((s) => this.handleSearch(s));
    }

    // if value is given, make that item active, else make first item active
    if (this.value) {
      this.setValue(this.value);
    } else {
      this.makeFirstItemActive();
    }

    // emit value on item clicks
    this.cmdkService.itemClicked$
      .pipe(untilDestroyed(this))
      .subscribe((value) => {
        const emit = true;
        this.setValue(value, emit);
      });

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

  handleSearch(search: string) {
    if (this.items?.length) {
      // filter items
      this.items?.forEach((item) => {
        item.filtered = this.filter ? this.filter(item.value, search) : true;
      });

      // show/hide empty directive
      if (this.empty) {
        this.empty.cmdkEmpty = this.filteredItems?.length === 0;
      }

      // make first item active and in-turn it will also make first group active, if available
      this.makeFirstItemActive();

      // show/hide group
      this.groups?.forEach((group) => {
        group.showGroup = group.filteredItems?.length > 0;
        group._cdr.markForCheck();
      });

      // show/hide list
      this.lists?.forEach((list) => {
        list.showList = list.filteredItems?.length > 0;
        list._cdr.markForCheck();
      });

      // hide separator if search and filter both are present, else show
      this.separators?.forEach((seperator) => {
        seperator.showSeparator = !(this.filter && search);
        seperator.cdr.markForCheck();
      });
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    if (
      ev.key === 'Enter' &&
      this.keyManager.activeItem &&
      this.filteredItems.length > 0
    ) {
      this.valueChanged.emit(this.keyManager.activeItem.value);
    } else {
      this.keyManager.onKeydown(ev);
    }
  }

  ngOnDestroy(): void {
    this.keyManager.destroy();
  }

  private makeFirstItemActive() {
    setTimeout(() => {
      const firstItem = this.filteredItems?.[0];
      if (firstItem) {
        this.keyManager.setFirstItemActive();
      } else {
        this.valueChanged.emit(undefined);
      }
    });
  }

  private setActiveGroupForActiveItem(nextActiveItemId: string) {
    this.filteredGroups?.forEach((group) => {
      group.active = group.filteredItems.some(
        (item) => item.itemId === nextActiveItemId
      );
    });
    this.filteredLists?.forEach((list) => {
      list.active = list.filteredItems.some(
        (item) => item.itemId === nextActiveItemId
      );
    });
  }

  private setValue(value: string | undefined, emit = false) {
    if (value !== undefined) {
      const valueItem = this.filteredItems?.find(
        (item) => item.value === value
      );
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

  private scrollActiveIntoView() {
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
}
