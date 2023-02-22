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
} from '@angular/core';
import { Content } from '@ngneat/overview';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { first } from 'rxjs';
import { CmdkService } from '../../cmdk.service';
import { EmptyDirective } from '../../directives/empty/empty.directive';
import { ItemDirective } from '../../directives/item/item.directive';
import { CmdkCommandProps } from '../../types';
import { GroupComponent } from '../group/group.component';
import { SeparatorComponent } from '../separator/separator.component';

let commandId = 0;
@UntilDestroy()
@Component({
  selector: 'cmdk-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
  providers: [CmdkService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'cmdkCommand',
})
export class CommandComponent
  implements CmdkCommandProps, AfterViewInit, OnChanges
{
  @Output() valueChanged = new EventEmitter<string>();
  @Input() value?: string;
  @Input() label?: Content;
  @Input() ariaLabel?: string;
  @Input() filter: ((value: string, search: string) => boolean) | null = (
    value,
    search
  ) => {
    const searchValue = search.toLowerCase();
    return value.toLowerCase().includes(searchValue);
  };

  @ContentChildren(ItemDirective, { descendants: true })
  items: QueryList<ItemDirective> | undefined;
  @ContentChildren(GroupComponent, { descendants: true })
  groups: QueryList<GroupComponent> | undefined;
  @ContentChildren(SeparatorComponent, { descendants: true })
  separators: QueryList<SeparatorComponent> | undefined;
  @ContentChild(EmptyDirective) empty!: EmptyDirective;

  readonly panelId = `cmdk-command-${commandId++}`;

  private cmdkService = inject(CmdkService);

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes['value'] &&
      changes['value'].previousValue !== changes['value'].currentValue &&
      this.value
    ) {
      this.setValue(this.value);
    }
  }

  ngAfterViewInit() {
    if (this.filter) {
      this.cmdkService.search$
        .pipe(untilDestroyed(this))
        .subscribe((s) => this.handleSearch(s));
    }

    if (!this.value) {
      this.makeFirstItemActive();
      this.makeFirstGroupActive();
    }

    this.cmdkService.value$
      .pipe(untilDestroyed(this))
      .subscribe((value) => this.valueChanged.emit(value));

    this.cmdkService.activeItem$
      .pipe(untilDestroyed(this))
      .subscribe((itemId) => {
        this.setActiveGroupForActiveItem(itemId);
      });
  }

  get filteredItems() {
    return this.items?.filter((item) => item.filtered);
  }

  get filteredGroups() {
    return this.groups?.filter((group) => group.filtered);
  }

  handleSearch(search: string) {
    if (this.items?.length) {
      // filter items
      this.items?.forEach((item) => {
        item.filtered = this.filter ? this.filter(item.value, search) : true;
      });

      // show/hide empty directive
      this.empty.cmdkEmpty = this.filteredItems?.length === 0;

      // make first item active and in-turn it will also make first group active, if available
      this.makeFirstItemActive();

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
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    if (ev.key === 'ArrowDown') {
      this.makeNextItemActive();
    } else if (ev.key === 'ArrowUp') {
      this.makePreviousItemActive();
    }
  }

  private makeFirstItemActive() {
    setTimeout(() => {
      const firstItem = this.filteredItems?.[0];
      if (firstItem) {
        this.cmdkService.setActiveItem(firstItem.itemId);
      }
    });
  }

  private makeFirstGroupActive() {
    setTimeout(() => {
      const firstGroup = this.filteredGroups?.[0];
      if (firstGroup) {
        this.cmdkService.setActiveGroup(firstGroup.groupId);
      }
    });
  }
  private makePreviousItemActive() {
    this.cmdkService.activeItem$
      .pipe(first(), untilDestroyed(this))
      .subscribe((activeItemId) => {
        if (this.filteredItems?.length) {
          const activeItemIndex = this.filteredItems.findIndex(
            (item) => item.itemId === activeItemId
          );
          const nextActiveItem = this.filteredItems[activeItemIndex - 1];
          if (nextActiveItem) {
            const nextActiveItemId = nextActiveItem.itemId;
            this.cmdkService.setActiveItem(nextActiveItemId);
          }
        }
      });
  }

  private setActiveGroupForActiveItem(nextActiveItemId: string) {
    const nextActiveGroupId = this.filteredGroups?.find((group) =>
      group.filteredItems.some((item) => item.itemId === nextActiveItemId)
    )?.groupId;
    if (nextActiveGroupId) {
      this.cmdkService.setActiveGroup(nextActiveGroupId);
    }
  }

  private makeNextItemActive() {
    this.cmdkService.activeItem$
      .pipe(first(), untilDestroyed(this))
      .subscribe((activeItemId) => {
        if (this.filteredItems?.length) {
          const activeItemIndex = this.filteredItems.findIndex(
            (item) => item.itemId === activeItemId
          );
          const nextActiveItem = this.filteredItems[activeItemIndex + 1];
          if (nextActiveItem) {
            const nextActiveItemId = nextActiveItem.itemId;
            this.cmdkService.setActiveItem(nextActiveItemId);
          }
        }
      });
  }

  private setValue(value: string) {
    this.cmdkService.setValue(value);
  }
}
