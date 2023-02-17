import {
  AfterContentInit,
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

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'cmdk-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupComponent implements CmdkGroupProps, AfterContentInit {
  @Input() label?: Content;
  @Input() ariaLabel?: string;

  @ContentChildren(ItemDirective, { descendants: true })
  items!: QueryList<ItemDirective>;

  private cmdkService = inject(CmdkService);
  showGroup = true;

  constructor(private _cdr: ChangeDetectorRef) {}

  ngAfterContentInit() {
    this.cmdkService.search$
      .pipe(untilDestroyed(this))
      .subscribe(() => this.handleSearch());
  }

  handleSearch() {
    this.showGroup = this.items.some((item) => item.display === 'initial');
    this._cdr.markForCheck();
  }
}
