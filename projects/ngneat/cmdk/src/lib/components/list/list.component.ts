import {
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  Input,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { Content } from '@ngneat/overview';
import { EmptyDirective } from '../../directives/empty/empty.directive';
import { CmdkListProps } from '../../types';
import { GroupComponent } from '../group/group.component';
import { ItemComponent } from '../item/item.component';
import { SeparatorComponent } from '../separator/separator.component';

@Component({
  selector: 'cmdk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements CmdkListProps {
  @Input() label?: Content;
  @Input() ariaLabel?: string;

  @ContentChildren(ItemComponent) items: QueryList<ItemComponent> | undefined;
  @ContentChildren(EmptyDirective) empty: QueryList<EmptyDirective> | undefined;
  @ContentChildren(SeparatorComponent) separators:
    | QueryList<SeparatorComponent>
    | undefined;

  constructor(public parentGroup: GroupComponent) {}
}
