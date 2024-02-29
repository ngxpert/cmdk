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
import { Content, DynamicViewModule } from '@ngxpert/overview';
import { ItemDirective } from '../../directives/item/item.directive';
import { CmdkGroupProps } from '../../types';
import { NgIf } from '@angular/common';

let cmdkGroupId = 0;

@Component({
    selector: 'cmdk-group',
    templateUrl: './group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'cmdk-group',
    },
    styleUrls: ['./group.component.scss'],
    standalone: true,
    imports: [NgIf, DynamicViewModule],
})
export class GroupComponent implements CmdkGroupProps {
  @Input() label?: Content;
  @Input() ariaLabel?: string;

  @ContentChildren(ItemDirective, { descendants: true })
  items!: QueryList<ItemDirective>;

  showGroup = true;
  private _active = false;
  readonly groupId = `cmdk-group-${cmdkGroupId++}`;
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
    return this.groupId;
  }

  @HostBinding('class.cmdk-group-active')
  get activeClass() {
    return this.active;
  }

  @HostBinding('attr.cmdk-hidden')
  get hidden() {
    return !this.showGroup;
  }

  @HostBinding('attr.data-value')
  get dataValue() {
    return this.label?.toString().toLowerCase();
  }
}
