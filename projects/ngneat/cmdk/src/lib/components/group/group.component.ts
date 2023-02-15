import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  inject,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';
import { Content } from '@ngneat/overview';
import { CmdkService } from '../../cmdk.service';
import { CmdkGroupProps } from '../../types';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'cmdk-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupComponent
  implements CmdkGroupProps, OnInit, AfterContentInit
{
  @Input() label?: Content;
  @Input() ariaLabel?: string;
  @ContentChildren(ItemComponent) items!: QueryList<ItemComponent>;
  private _cmdkService = inject(CmdkService);
  filteredItems: ItemComponent[] = [];

  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this._cmdkService.search$.subscribe((s) => this.handleSearch(s));
  }

  ngAfterContentInit(): void {
    this.handleSearch('');
  }

  handleSearch(search = '') {
    this.filteredItems = this.items.filter((item) => {
      if (!search) {
        return true;
      }
      const filterValue = search.toLowerCase();
      return item.value.toLowerCase().includes(filterValue);
    });
    this._cdr.markForCheck();
  }
}
