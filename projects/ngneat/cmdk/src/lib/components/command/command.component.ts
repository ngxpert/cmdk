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
} from '@angular/core';
import { Content } from '@ngneat/overview';
import { UntilDestroy } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { CmdkService } from '../../cmdk.service';
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
export class CommandComponent implements CmdkCommandProps, OnInit {
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
  @ContentChildren(ItemComponent, { descendants: true }) items:
    | QueryList<ItemComponent>
    | undefined;

  allItems = new Set<string>(); // [...itemIds];
  allGroups = new Map<string, Set<string>>(); // groupId → [...itemIds]
  ids = new Map<string, string>(); // id → value

  private _cmdkService = inject(CmdkService);

  readonly panelId = `cmdk-command-${commandId++}`;

  ngOnInit() {
    this._cmdkService.search$
      .pipe(filter((s) => s !== undefined))
      .subscribe((s) => this.handleSearch(s!));
  }

  handleSearch(search: string) {
    this.items?.forEach((item) => {
      if (item.value && item.value.search(search) >= 0) {
        item.visible = true;
      } else {
        item.visible = false;
      }
    });
  }
}
