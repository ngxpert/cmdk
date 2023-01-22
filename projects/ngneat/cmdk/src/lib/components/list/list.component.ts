import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { Content } from '@ngneat/overview';
import { CmdkListProps } from '../../types';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'cmdk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements CmdkListProps {
  @Input() label?: Content;
  @Input() ariaLabel?: string;

  /** Reference to all list-items within the cmdk-command. */
  @ContentChildren(ItemComponent) items: QueryList<ItemComponent> | undefined;

  get hasContent() {
    return !!this.items?.length;
  }
}
