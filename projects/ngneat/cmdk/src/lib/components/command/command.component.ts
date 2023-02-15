import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  TemplateRef,
  ViewChild,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ElementRef,
  inject,
  ChangeDetectorRef,
} from '@angular/core';
import { Content } from '@ngneat/overview';
import { UntilDestroy } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { CmdkService } from '../../cmdk.service';
import { EmptyDirective } from '../../directives/empty/empty.directive';
import { CmdkCommandProps } from '../../types';
import { ItemComponent } from '../item/item.component';
import { ListComponent } from '../list/list.component';

let commandId = 0;
@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'cmdk-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
  providers: [CmdkService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'cmdkCommand',
})
export class CommandComponent
  implements CmdkCommandProps, OnInit, AfterContentInit
{
  @Input() label?: Content;
  @Input() ariaLabel?: string;
  @Input() shouldFilter?: boolean;
  @Input() filter?: (value: string, search: string) => number;
  @Input() value?: string;
  @Output() valueChanged = new EventEmitter<string>();

  @ViewChild(TemplateRef, { static: true }) templateRef:
    | TemplateRef<any>
    | undefined;

  /** Element for the panel containing the lists and list-items. */
  @ViewChild('panel') panel: ElementRef | undefined;

  /** Reference to all lists within the cmdk-command. */
  @ContentChildren(ListComponent, { descendants: true }) lists:
    | QueryList<ListComponent>
    | undefined;
  /** Reference to all list-items within the cmdk-command. */
  @ContentChildren(ItemComponent) items!: QueryList<ItemComponent>;
  /** Reference to all empty-items within the cmdk-command. */
  @ContentChildren(EmptyDirective) emptyList:
    | QueryList<EmptyDirective>
    | undefined;

  filteredItems: ItemComponent[] = [];

  private _cmdkService = inject(CmdkService);

  readonly panelId = `cmdk-command-${commandId++}`;

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
