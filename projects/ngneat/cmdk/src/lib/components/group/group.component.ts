import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  inject,
  Input,
  QueryList,
} from '@angular/core';
import { Content } from '@ngneat/overview';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { CmdkService } from '../../cmdk.service';
import { ItemDirective } from '../../directives/item/item.directive';
import { CmdkGroupProps } from '../../types';

let cmdkGroupId = 0;

@UntilDestroy()
@Component({
  selector: 'cmdk-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupComponent implements CmdkGroupProps, AfterViewInit {
  @Input() label?: Content;
  @Input() ariaLabel?: string;

  @ContentChildren(ItemDirective, { descendants: true })
  items!: QueryList<ItemDirective>;

  showGroup = true;
  private _active = false;
  private _cmdkService = inject(CmdkService);
  readonly groupId = `cmdk-group-${cmdkGroupId++}`;
  _cdr = inject(ChangeDetectorRef);

  constructor() {}

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

  ngAfterViewInit() {
    this._cmdkService.activeGroup$
      .pipe(untilDestroyed(this))
      .subscribe((groupId) => {
        setTimeout(() => {
          this.active = this.groupId === groupId;
        });
      });
  }
}
