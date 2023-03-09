import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  HostBinding,
  inject,
  Input,
  QueryList,
} from '@angular/core';
import { ItemDirective } from '../../directives/item/item.directive';

let cmdkListId = 0;

@Component({
  selector: 'cmdk-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    class: 'cmdk-list',
  },
})
export class ListComponent {
  @Input() ariaLabel?: string;

  @ContentChildren(ItemDirective, { descendants: true })
  items!: QueryList<ItemDirective>;

  showList = true;
  private _active = false;
  readonly listId = `cmdk-list-${cmdkListId++}`;
  _cdr = inject(ChangeDetectorRef);

  get filteredItems() {
    return this.items?.filter((item) => item.filtered);
  }

  get active() {
    return this._active;
  }
  set active(value: boolean) {
    this._active = value;
    this._cdr.markForCheck();
  }

  get filtered() {
    return this.filteredItems.length > 0;
  }

  @HostBinding('id')
  get id() {
    return this.listId;
  }

  @HostBinding('class.cmdk-list-active')
  get activeClass() {
    return this.active;
  }

  @HostBinding('attr.cmdk-hidden')
  get hidden() {
    return !this.showList;
  }
}
